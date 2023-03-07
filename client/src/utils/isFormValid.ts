interface IObjectValue {
  errors: string[] | null;
}

type TObject = {
  [TKey in string]: IObjectValue;
};

export const isFormValid = <T extends TObject>(object: T): boolean => {
  return Object.values(object).every(({ errors }) => errors === null);
};
