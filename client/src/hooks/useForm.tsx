import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEvent,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
import { validateField, IValidator } from "@utils";

interface IFormValue {
  maxLength?: number;
  value: string;
  validators?: IValidator;
  touched: boolean;
  errors: string[];
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
  const onChange = useCallback<ChangeEventHandler>((event) => {
    const { name, value } = event.target as HTMLInputElement;

    setFormState((prev) => {
      const typedKey = name as TKeys;

      return {
        ...prev,
        [typedKey]: {
          ...prev[typedKey],
          value,
        },
      };
    });
  }, []);

  const onBlur = useCallback<FocusEventHandler>((event) => {}, []);

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
