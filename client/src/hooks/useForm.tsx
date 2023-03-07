import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEvent,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
import { isFormValid, IValidator, validateField } from "@utils";

interface IFormValue {
  maxLength?: number;
  value: string;
  validators?: IValidator;
  touched: boolean;
  errors: string[] | null;
  name: string;
  onChange: ChangeEventHandler;
  onBlur: FocusEventHandler;
}

type IFormState<TKeys extends string> = {
  [Key in TKeys]: IFormValue;
};

type IInitialState<TKeys extends string> = {
  [Key in TKeys]: Pick<IFormValue, "value" | "validators">;
};

type UseFormReturn<TKeys extends string> = IFormState<TKeys> & {
  handleSubmit: (callback: () => void) => FormEventHandler;
  isValid: boolean;
};

export function useForm<TKeys extends string>(
  initialState: IInitialState<TKeys> | (() => IInitialState<TKeys>)
): UseFormReturn<TKeys> {
  const [isValid, setIsValid] = useState(false);
  const handleChange = (name: string, value: string, touched?: boolean) => {
    const typedKey = name as TKeys;

    const errors = validateField(value, formState[typedKey]?.validators);

    setFormState((prevState) => {
      const updatedField = {
        ...prevState[typedKey],
        value,
        errors,
        touched: touched ?? prevState[typedKey].touched,
      };

      setIsValid(isFormValid({ ...prevState, [typedKey]: updatedField }));

      return {
        ...prevState,
        [typedKey]: updatedField,
      };
    });
  };

  const onChange: ChangeEventHandler = useCallback<ChangeEventHandler>(
    (event) => {
      const { name, value } = event.target as HTMLInputElement;

      handleChange(name, value);
    },
    []
  );

  const onBlur = useCallback<FocusEventHandler>((event) => {
    const { name, value } = event.target as HTMLInputElement;

    handleChange(name, value, true);
  }, []);

  const [formState, setFormState] = useState(() => {
    let state: IFormState<TKeys>;

    if (typeof initialState === "function") {
      state = { ...(initialState() as IFormState<TKeys>) };
    } else {
      state = initialState as IFormState<TKeys>;
    }

    Object.keys(state).forEach((key) => {
      const typedKey = key as TKeys;

      const errors = validateField(
        state[typedKey].value,
        state[typedKey]?.validators
      );

      state[typedKey] = {
        ...state[typedKey],
        touched: false,
        errors,
        name: key,
        onChange,
        onBlur,
        maxLength: state[typedKey]?.validators?.maxLength,
      };
    });

    setIsValid(isFormValid(state));

    return state;
  });

  const handleSubmit = (callback: () => void) => (event: FormEvent) => {
    event.preventDefault();
    callback();
  };

  return { ...formState, handleSubmit, isValid } as const;
}
