export interface IValidator {
  maxLength?: number;
  minLength?: number;
  email?: boolean;
  required?: boolean;
}

const maxLengthMessage = (maxLength: number) =>
  `Length of this flied should be less than ${maxLength}`;
const minLengthMessage = (minLength: number) =>
  `Length of this flied should be more than ${minLength}`;
const emailMessage = () => "This field should be valid email";
const requiredMessage = () => "This field is required";

const isValueLengthValid = (
  value: string,
  length: number,
  validationType: "maxLength" | "minLength"
): boolean => {
  switch (validationType) {
    case "maxLength":
      return value.length <= length;
    case "minLength":
      return value.length >= length;
    default:
      return false;
  }
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateField = (
  value: string,
  validators?: IValidator
): string[] | null => {
  const errors: string[] = [];

  if (validators === undefined) return null;

  Object.keys(validators).forEach((key) => {
    switch (key) {
      case "maxLength":
        if (validators.maxLength === undefined) break;
        if (isValueLengthValid(value, validators.maxLength, "maxLength")) break;

        errors.push(maxLengthMessage(validators.maxLength));

        break;

      case "minLength":
        if (validators.minLength === undefined) break;
        if (isValueLengthValid(value, validators.minLength, "minLength")) break;

        errors.push(minLengthMessage(validators.minLength));
        break;

      case "required":
        if (value.length) break;
        errors.push(requiredMessage());

        break;

      case "email":
        if (isValidEmail(value)) break;

        errors.push(emailMessage());

        break;

      default:
        break;
    }
  });

  return errors.length ? errors : null;
};
