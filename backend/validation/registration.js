import Validator from "validator";
import isEmpty from "is-empty";

function validateRegisterInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //Name Check
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "Firstname field is required";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Lastname field is required";
  }
  //Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  //Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateRegisterInput;
