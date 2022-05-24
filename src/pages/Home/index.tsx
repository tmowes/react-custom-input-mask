import { ChangeEvent, useCallback, useState } from 'react'

import { Input } from '../../components/Input'
import { UserProps } from './types'

export function Home() {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [e.currentTarget.name]: e.target.value })
    },
    [user],
  )

  const onSave = useCallback(() => {
    console.log('user', user)
  }, [user])

  return (
    <div>
      <h2>Cadastro</h2>
      <span>nome:</span>
      <Input name="nome" placeholder="Qual seu nome?" onChange={onChange} maskType="NONE" />
      <span>cpf:</span>
      <Input name="cpf" placeholder="999.999.999-99" onChange={onChange} maskType="CPF" />
      <span>cep:</span>
      <Input name="cep" placeholder="99.999-999" onChange={onChange} maskType="CEP" />
      <span>telefone:</span>
      <Input name="phone" placeholder="(47) 99999-9999" onChange={onChange} maskType="PHONE" />
      <span>preço:</span>
      <Input
        name="price"
        prefix="R$"
        placeholder="0,00"
        onChange={onChange}
        maskType="CURRENCY"
      />

      <button type="button" onClick={onSave}>
        Salvar
      </button>
    </div>
  )
}
