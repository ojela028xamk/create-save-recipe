import { JSX } from 'react'
import css from './Instructions.module.scss'

const Instructions = (): JSX.Element => {
  return (
    <div className={css.instructions}>
      <h3>Instructions</h3>
    </div>
  )
}

export default Instructions
