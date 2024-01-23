import { JSX } from 'react'
import css from './Ingredients.module.scss'
import { Button } from 'react-bootstrap'

const Ingredients = (): JSX.Element => {
  return (
    <div className={css.ingredients}>
      <h3>Ingredients</h3>
      <Button variant="success">Add an ingredient +</Button>
    </div>
  )
}

export default Ingredients
