import { ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'
import css from './RecipeName.module.scss'
import { useRecipeData } from '../AppContainer'

const RecipeImage = (): JSX.Element => {
  const setRecipeData = useRecipeData()[1]

  const handleNewRecipeImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if (
      event &&
      event.currentTarget &&
      event.currentTarget.files &&
      event.currentTarget.files.length
    ) {
      const newImg = URL.createObjectURL(event.currentTarget.files[0])
      setRecipeData((prev) => ({
        ...prev,
        recipeImage: newImg,
      }))
    }
  }

  return (
    <div className={css.recipe_image}>
      <Form className={css.recipe_image_form}>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={handleNewRecipeImage}
        ></Form.Control>
      </Form>
    </div>
  )
}

export default RecipeImage
