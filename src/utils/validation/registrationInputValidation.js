import is from "is_js";

export const registrationInputValidation = (value, fieldType) => {
  const spacesValidator = (value) => {
    return value.trim() !== "";
  };

  const validateField = () => {
    switch (fieldType) {
      case "name":
        return is.empty(value) || !spacesValidator(value);
      case "surname":
        return is.empty(value) || !spacesValidator(value);
      case "telephone":
        return (
          is.empty(value) ||
          !spacesValidator(value) ||
          value.trim().split("")[0] !== "+" ||
          value.trim().split("")[1] !== "7" ||
          value.trim().split("").length !== 12
        );
      case "email":
        return is.empty(value) || !spacesValidator(value) || !is.email(value);
      case "password":
        return (
          is.empty(value) ||
          !spacesValidator(value) ||
          value.trim().split("").length < 6
        );
      case "confirmPassword":
        return is.empty(value.confirmpassword) || value.confirmpassword !== value.password;  
      case "birthday":
        return value.day === "00" || value.month === "00" || value.year === "0000";    
      case "sex":
        return value !== 0 
      default:
        break;
    }
  };

  return validateField()
}