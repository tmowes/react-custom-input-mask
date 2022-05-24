import { KeyboardEvent } from 'react'

export const maskTypes = {
  CEP: (e: KeyboardEvent<HTMLInputElement>) => cepMask(e),
  CPF: (e: KeyboardEvent<HTMLInputElement>) => cpfMask(e),
  PHONE: (e: KeyboardEvent<HTMLInputElement>) => phoneMask(e),
  CURRENCY: (e: KeyboardEvent<HTMLInputElement>) => currencyMask(e),
  NONE: (e: KeyboardEvent<HTMLInputElement>) => noneMask(e),
}

// 99.999-999
const cepMask = ({ currentTarget }: KeyboardEvent<HTMLInputElement>) => {
  currentTarget.maxLength = 10
  if (!currentTarget.value.match(/^(\d{2}).(\d{3})-(\d{3})$/)) {
    currentTarget.value = currentTarget.value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{3})$/, '$1-$2')
  }
  return currentTarget.value
}

// 999.999.999-99
const cpfMask = ({ currentTarget }: KeyboardEvent<HTMLInputElement>) => {
  currentTarget.maxLength = 14
  if (!currentTarget.value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    currentTarget.value = currentTarget.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{2})$/, '$1-$2')
  }
  return currentTarget.value
}

// (99) 99999-9999
const phoneMask = ({ currentTarget }: KeyboardEvent<HTMLInputElement>) => {
  currentTarget.maxLength = 15
  if (!currentTarget.value.match(/^\((\d{2})\) (\d{5})-(\d{4})$/)) {
    currentTarget.value = currentTarget.value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})$/, '$1-$2')
  }
  return currentTarget.value
}

// R$ 999.999.999.999,00
const currencyMask = ({ currentTarget }: KeyboardEvent<HTMLInputElement>) => {
  currentTarget.maxLength = 18
  currentTarget.value = currentTarget.value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.')
  return currentTarget.value
}

const noneMask = ({ currentTarget }: KeyboardEvent<HTMLInputElement>) => currentTarget.value
