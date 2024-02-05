import { JSX, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import css from './Ingredients.module.scss'
import { useEffectOnce } from 'react-use'
import {
  IngredientItem,
  IngredientUnitValue,
  StorageType,
} from '../globalTypes'
import { getSessionStorage } from '../Services/storageService'

const Ingredients = (): JSX.Element => {
  const [ingredientName, setIngredientName] = useState<string>('')
  const [ingredientAmount, setIngredientAmount] = useState<number>(0)
  const [ingredientUnit, setIngredientUnit] = useState<
    IngredientUnitValue | string
  >('')
  const [ingredientList, setIngredientList] = useState<IngredientItem[]>([])
  const [showValidated, setShowValidated] = useState<boolean>(false)

  const getIngredientList = (): void => {
    const storageIngredients = getSessionStorage(StorageType.INGREDIENT)
    setIngredientList(storageIngredients as IngredientItem[])
  }

  const handleDeleteIngredient = (ingredientId: string): void => {
    sessionStorage.removeItem(ingredientId)
    getIngredientList()
  }

  const getId = (): string => {
    return Date.now().toString(36)
  }

  const handleNewIngredient = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault()

    if (event.currentTarget.checkValidity() === false) {
      setShowValidated(true)
      return
    }

    const newIngredient: IngredientItem = {
      id: getId(),
      name: ingredientName,
      amount: ingredientAmount,
      unit: ingredientUnit,
      storageType: StorageType.INGREDIENT,
    }

    sessionStorage.setItem(newIngredient.id, JSON.stringify(newIngredient))
    setShowValidated(false)
    setIngredientName('')
    getIngredientList()
  }

  useEffectOnce(() => {
    getIngredientList()
  })

  return (
    <div className={css.ingredients}>
      <div className={css.ingredients_add}>
        <h3>Ingredients</h3>
        <Form
          noValidate
          validated={showValidated}
          onSubmit={(event) => handleNewIngredient(event)}
        >
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={ingredientName}
            placeholder="Name..."
            onChange={(event) => setIngredientName(event.currentTarget.value)}
          />

          <Form.Label>Amount</Form.Label>
          <Form.Control
            required
            type="number"
            value={ingredientAmount}
            placeholder="Amount..."
            onChange={(event) =>
              setIngredientAmount(Number(event.currentTarget.value))
            }
          />
          <Form.Label>Unit</Form.Label>
          <Form.Select
            required
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
          <br />
          <Button type="submit" variant="success">
            Add an ingredient +
          </Button>
        </Form>
      </div>
      <br />
      <div className={css.ingredients_list}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Unit</th>
              <th>
                <i className="bi bi-trash"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredientList && ingredientList.length ? (
              ingredientList.map((item) => (
                <tr key={item.id}>
                  <th>{item.name}</th>
                  <th>{item.amount}</th>
                  <th>{item.unit}</th>
                  <th>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDeleteIngredient(item.id)}
                    >
                      X
                    </Button>
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={4}>No ingredients...</th>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Ingredients
