import { ChangeEvent, useState } from 'react'
import { Form } from 'react-bootstrap'
import css from './RecipeName.module.scss'

const RecipeImage = (): JSX.Element => {
  const [recipeImg, setRecipeImg] = useState<string>('')

  const handleNewRecipeImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if (
      event &&
      event.currentTarget &&
      event.currentTarget.files &&
      event.currentTarget.files.length
    ) {
      const newImg = URL.createObjectURL(event.currentTarget.files[0])
      setRecipeImg(newImg)
    }
  }

  return (
    <div className={css.recipe_image}>
      <Form className={css.recipe_image_form}>
        <Form.Control
          type="file"
          onChange={handleNewRecipeImage}
        ></Form.Control>
        <img src={recipeImg}></img>
      </Form>
    </div>
  )
}

export default RecipeImage
