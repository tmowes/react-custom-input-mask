import { InputHTMLAttributes } from 'react'

import { maskTypes } from './mask'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  maskType?: keyof typeof maskTypes
  prefix?: string
}

// maskType: 'CEP' | 'CPF' | 'PHONE' | 'CURRENCY'
