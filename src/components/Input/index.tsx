import { KeyboardEvent, useCallback } from 'react'

import { maskTypes } from './mask'
import { InputProps } from './types'
import './styles.css'

export function Input(props: InputProps) {
  const { maskType = 'NONE', prefix, ...attrs } = props
  const onKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      maskTypes[maskType](e)
    },
    [maskType],
  )

  return (
    <div className="input-group prefix">
      {prefix && <span className="prefix-span">{prefix}</span>}
      <input type="text" onKeyUp={onKeyUp} {...attrs} />
    </div>
  )
}
