import { JSX } from 'react'
import css from './Preview.module.scss'

const Preview = (): JSX.Element => {
  return (
    <div className={css.preview}>
      <h3>Preview</h3>
    </div>
  )
}

export default Preview
