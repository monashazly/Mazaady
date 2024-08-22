
export const isNullOrUndefined = (value: any): boolean => {
  return value === null || value === undefined;
};

export const isEmptyArray = (arr : any) : boolean => {
  return Array.isArray(arr) && arr.length === 0;
};

export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined || value === "") return true;

  return !!(Array.isArray(value) && value.length === 0);
};

export const requiredValidator = (value: any): string | boolean => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return "This field is required";

  return !!String(value).trim().length || "This field is required";
};
