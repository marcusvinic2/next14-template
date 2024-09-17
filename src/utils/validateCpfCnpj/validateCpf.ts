import { cpf as validator } from 'cpf-cnpj-validator';

export const validateCpf = (value: string): boolean => {
  const striped = validator.strip(value);

  if (validator.isValid(striped)) {
    return true;
  }

  return false;
};
