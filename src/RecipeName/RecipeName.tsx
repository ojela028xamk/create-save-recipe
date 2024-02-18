import { Button, Form } from 'react-bootstrap'
import css from './RecipeName.module.scss'
import { useEffect, useState } from 'react'
import { StorageType } from '../globalTypes'
import { useRecipeData } from '../AppContainer'

const RecipeName = (): JSX.Element => {
  const [{ recipeName }, setRecipeData] = useRecipeData()
  const [recipeNameValue, setRecipeNameValue] = useState<string>('')
  const [isEditRecipeName, setIsEditRecipeName] = useState<boolean>(false)
  const [showValidated, setShowValidated] = useState<boolean>(false)

  useEffect(() => {
    setRecipeNameValue(recipeName)
  }, [recipeName])

  const handleNewRecipeName = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault()

    if (event.currentTarget.checkValidity() === false) {
      setShowValidated(true)
      return
    }

    sessionStorage.setItem(
      StorageType.RECIPE_NAME,
      JSON.stringify(recipeNameValue)
    )
    setRecipeData((prev) => ({
      ...prev,
      recipeName: recipeNameValue,
    }))

    setShowValidated(false)
    setIsEditRecipeName(false)
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
          disabled={!isEditRecipeName}
          placeholder="Add recipe name..."
          onChange={(event) => setRecipeNameValue(event.currentTarget.value)}
        ></Form.Control>
        {isEditRecipeName && (
          <Button type="submit">
            <i className="bi bi-check"></i>
          </Button>
        )}
        {!isEditRecipeName && (
          <Button type="button" onClick={() => setIsEditRecipeName(true)}>
            Edit <i className="bi bi-pen"></i>
          </Button>
        )}
      </Form>
    </div>
  )
}

export default RecipeName
