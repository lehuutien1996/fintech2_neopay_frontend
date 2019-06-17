import BaseValidator from "./base.validator";

export default class LoginValidator extends BaseValidator {
  rules() {
    return {
      email: 'required|max:255|email',
      password: 'required|max:255',
    };
  }
}
