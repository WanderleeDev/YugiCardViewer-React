import { useState } from "react";

export const useForm = (initialValue) => {
  const [ formState, setFormState ] = useState(initialValue)

  const captureValue = ({target}) => {
    const { name, value } = target
    target.type !== 'checkbox'
      ? setFormState({ ...formState, [name]: value })
      : setFormState({ ...formState, [name]: target.checked })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formState);
  }

  return {
    formState,
    captureValue,
    onSubmit
  }
}