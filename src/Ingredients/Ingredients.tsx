import { JSX, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import css from './Ingredients.module.scss'

enum IngredientUnitValue {
  GRAM = 'g',
  MILLILITRE = 'ml',
}

const Ingredients = (): JSX.Element => {
  const [ingredientName, setIngredientName] = useState<string>('')
  const [ingredientAmount, setIngredientAmount] = useState<number>(0)
  const [ingredientUnit, setIngredientUnit] = useState<string>('')

  return (
    <div className={css.ingredients}>
      <h3>Ingredients</h3>

      <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={ingredientName}
          placeholder="Name..."
          onChange={(event) => setIngredientName(event.currentTarget.value)}
        />
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          value={ingredientAmount}
          placeholder="Name..."
          onChange={(event) =>
            setIngredientAmount(Number(event.currentTarget.value))
          }
        />
        <Form.Label>Unit</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(event) => setIngredientUnit(event.currentTarget.value)}
        >
          <option value={''}></option>
          {Object.values(IngredientUnitValue).map((unit) => (
            <option key={`addIngredient-${unit}`} value={unit}>
              {unit}
            </option>
          ))}
        </Form.Select>
      </Form>
      <Button variant="success">Add an ingredient +</Button>
    </div>
  )
}

export default Ingredients
