import moment from 'moment';

const dateValid = (date) => {

  let isValid = false;

  if (date.length < 10) {

    // Invalid input Length 
    return isValid;

  }
  else {
    const dateFormat = moment(date.split('/').reverse().join('-'))
    const dateCheck = dateFormat.isValid()

    if (dateCheck) {
      // Date Format is valid
      isValid = true;
      return isValid;
    }

    // Date format is not valid
    isValid;
    return isValid;
  }

}

const objectValidation = (object) => {
  if (Object.values(object).includes("") || Object.values(object).includes(null)) {
    return false;
  }
  return true;
}

export { objectValidation, dateValid }
