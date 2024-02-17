import { Button, Form } from 'react-bootstrap'
import css from './RecipeName.module.scss'
import { useState } from 'react'
import { RecipeNameValue } from '../globalTypes'
import { useRecipeData } from '../AppContainer'

const RecipeName = (): JSX.Element => {
  const setRecipeData = useRecipeData()[1]
  const [recipeNameValue, setRecipeNameValue] = useState<string>('')
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
      recipe_name: recipeNameValue,
    }

    sessionStorage.setItem(newRecipeName.id, JSON.stringify(newRecipeName))
    setRecipeData((prev) => ({
      ...prev,
      recipeName: newRecipeName,
    }))
    setShowValidated(false)
    setRecipeNameValue('')
  }

  return (
    <div className={css.recipe_name}>
      <h2>Recipe Name</h2>
      <Form
        className={css.recipe_name_form}
        noValidate
        validated={showValidated}
        onSubmit={(event) => handleNewRecipeName(event)}
      >
        <Form.Control
          required
          type="text"
          value={recipeNameValue}
          placeholder="Recipe name..."
          onChange={(event) => setRecipeNameValue(event.currentTarget.value)}
        ></Form.Control>
        <Button type="submit" variant="success">
          <i className="bi bi-check"></i>
        </Button>
      </Form>
    </div>
  )
}

export default RecipeName
