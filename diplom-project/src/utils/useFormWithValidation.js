import { useCallback, useState } from "react";
import { regexEmail } from "./config";

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    if (name === 'email') {
      const test = regexEmail.test((value))
      if (!test) {
        setErrors({ ...errors, [name]: 'Ошибка при вводе данных' });
        setIsValid(false);
      } else {
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());
      }

    } else {
      setErrors({ ...errors, [name]: target.validationMessage });
      setIsValid(target.closest('form').checkValidity());
    }
  };


  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
