import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { validateField, IValidator } from "@utils";

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
};

export function useForm<TKeys extends string>(
  initialState: IInitialState<TKeys> | (() => IInitialState<TKeys>)
): UseFormReturn<TKeys> {
  const onChange: ChangeEventHandler = (event) => {
    const { name, value } = event.target as HTMLInputElement;
    const typedKey = name as TKeys;

    setFormState((prevState) => {
      const updatedField = {
        ...prevState[typedKey],
        value,
      };

      return {
        ...prevState,
        [typedKey]: updatedField,
      };
    });
  };

  const onBlur = useCallback<FocusEventHandler>((event) => {
    const { name } = event.target as HTMLInputElement;
    const typedKey = name as TKeys;

    setFormState((prevState) => {
      const updatedField = {
        ...prevState[typedKey],
        touched: true,
      };

      return {
        ...prevState,
        [typedKey]: updatedField,
      };
    });
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

      state[typedKey] = {
        ...state[typedKey],
        touched: false,
        errors: null,
        name: key,
        onChange,
        onBlur,
        maxLength: state[typedKey]?.validators?.maxLength,
      };

      if (state[typedKey].validators) {
        Object.defineProperty(state[typedKey], "validators", {
          enumerable: false,
        });
      }
    });

    return state;
  });

  const handleSubmit = (callback: () => void) => (event: FormEvent) => {
    event.preventDefault();
    callback();
  };

  return { ...formState, handleSubmit } as const;
}
