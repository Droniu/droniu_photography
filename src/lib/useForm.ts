import { useState, ChangeEvent, FormEvent } from "react";

interface Validation {
  required?: {
    value: boolean;
    message: string;
  }
}
type Validations<T extends {}> = Partial <Record<keyof T, Validation>>
type ErrorRecord<T> = Partial<Record<keyof T, string>>


export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: () => void
}) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T)
  const [errors, setErrors] = useState<ErrorRecord<T>>({});

  const handleChange = (key: keyof T) => (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    const value = e.target.value
    setData({
      ...data,
      [key]: value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validations = options?.validations;
    
    if (validations) {
      
      let valid = true;
      const newErrors: ErrorRecord<T> = {};

      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }
      }

    if (!valid) {
      setErrors(newErrors);
      return;
    }
  }
    
    if (options?.onSubmit) {
      options.onSubmit();
    }
  }

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  }
}