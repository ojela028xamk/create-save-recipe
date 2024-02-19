import { JSX } from 'react'
import css from './Preview.module.scss'
import PreviewPDF from './PreviewPDF'
import { useRecipeData } from '../AppContainer'

const Preview = (): JSX.Element => {
  const [{ recipeName, recipeIngredients, recipeInstructions }] =
    useRecipeData()

  return (
    <div className={css.preview}>
      <h2>Preview</h2>
      <PreviewPDF
        pdfRecipeName={recipeName}
        pdfIngredients={recipeIngredients}
        pdfInstructions={recipeInstructions}
      />
    </div>
  )
}

export default Preview
