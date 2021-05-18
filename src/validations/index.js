

const objectValidation = (object) => {
  if (Object.values(object).includes("") || Object.values(object).includes(null)) {
    return false;
  }
  return true;
}

export { objectValidation }
