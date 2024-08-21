
export const isNullOrUndefined = (value) => {
  return value === null || value === undefined;
};

export const isEmptyArray = (arr) => {
  return Array.isArray(arr) && arr.length === 0;
};

export const isEmpty = (value) => {
  if (value === null || value === undefined || value === "") return true;

  return !!(Array.isArray(value) && value.length === 0);
};

export const requiredValidator = (value) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return "This field is required";

  return !!String(value).trim().length || "This field is required";
};
