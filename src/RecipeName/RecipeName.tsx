import { Form } from 'react-bootstrap'
import css from './RecipeName.module.scss'
import { useState } from 'react'

const RecipeName = (): JSX.Element => {
  const [recipeName, setRecipeName] = useState<string>('')

  return (
    <div className={css.recipe_name}>
      <h5>Recipe Name</h5>
      <Form>
        <Form.Control
          required
          type="text"
          value={recipeName}
          placeholder="Recipe name..."
          onChange={(event) => setRecipeName(event.currentTarget.value)}
        ></Form.Control>
      </Form>
      <br />
    </div>
  )
}

export default RecipeName
