import { Button, Form } from 'react-bootstrap'
import css from './RecipeName.module.scss'
import { useState } from 'react'
import { RecipeNameValue } from '../globalTypes'

const RecipeName = (): JSX.Element => {
  const [recipeName, setRecipeName] = useState<string>('')
  const [showValidated, setShowValidated] = useState<boolean>(false)

  const handleNewRecipeName = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault()

    if (event.currentTarget.checkValidity() === false) {
      setShowValidated(true)
      return
    }

    const newRecipeName: RecipeNameValue = {
      id: 'recipeNameStorage',
      recipe_name: recipeName,
    }

    sessionStorage.setItem(newRecipeName.id, JSON.stringify(newRecipeName))
    setShowValidated(false)
    setRecipeName('')
  }

  return (
    <div className={css.recipe_name}>
      <h3>Recipe Name</h3>
      <Form
        className={css.recipe_name_form}
        noValidate
        validated={showValidated}
        onSubmit={(event) => handleNewRecipeName(event)}
      >
        <Form.Control
          required
          type="text"
          value={recipeName}
          placeholder="Recipe name..."
          onChange={(event) => setRecipeName(event.currentTarget.value)}
        ></Form.Control>
        <Button type="submit" variant="success">
          <i className="bi bi-check"></i>
        </Button>
      </Form>
      <br />
    </div>
  )
}

export default RecipeName
