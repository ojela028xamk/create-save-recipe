import { FormEvent, JSX, useState } from 'react'
import css from './Instructions.module.scss'
import { Alert, Button, Form, ListGroup } from 'react-bootstrap'
import { useEffectOnce } from 'react-use'
import { InstructionItem, StorageType } from '../globalTypes'
import { getSessionStorage } from '../Services/storageService'
import { useRecipeData } from '../AppContainer'

const Instructions = (): JSX.Element => {
  const [{ recipeInstructions }, setRecipeData] = useRecipeData()
  const [instructionStep, setInstructionStep] = useState<string>('')
  const [instructionList, setInstructionList] = useState<InstructionItem[]>([])
  const [showValidated, setShowValidated] = useState<boolean>(false)

  const getInstructionList = (): void => {
    const storageInstructions = getSessionStorage(StorageType.INSTRUCTION)
    setInstructionList(storageInstructions as InstructionItem[])
    setRecipeData((prev) => ({
      ...prev,
      recipeInstructions: storageInstructions as InstructionItem[],
    }))
  }

  const getId = (): string => {
    return Date.now().toString(36)
  }

  const handleNewInstruction = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (event.currentTarget.checkValidity() === false) {
      setShowValidated(true)
      return
    }

    const newInstruction: InstructionItem = {
      id: getId(),
      step: instructionStep,
      storageType: StorageType.INSTRUCTION,
    }

    sessionStorage.setItem(newInstruction.id, JSON.stringify(newInstruction))
    setRecipeData((prev) => ({
      ...prev,
      recipeInstructions: [...recipeInstructions, newInstruction],
    }))
    setShowValidated(false)
    setInstructionStep('')
    getInstructionList()
  }

  const handleDeleteInstruction = (instructionId: string): void => {
    sessionStorage.removeItem(instructionId)
    getInstructionList()
  }

  useEffectOnce(() => {
    getInstructionList()
  })

  return (
    <div className={css.instructions}>
      <h2>Instructions</h2>
      <div className={css.instructions_add}>
        <Form
          noValidate
          validated={showValidated}
          onSubmit={(event) => handleNewInstruction(event)}
        >
          <Form.Label>Instruction Step</Form.Label>
          <Form.Control
            required
            type="text"
            value={instructionStep}
            placeholder="Add an instruction..."
            onChange={(event) => setInstructionStep(event.currentTarget.value)}
          ></Form.Control>
          <br />
          <Button type="submit" variant="success">
            Add an instruction +
          </Button>
        </Form>
      </div>
      <div className={css.instructions_list}>
        {instructionList && instructionList.length ? (
          <ListGroup as="ol" numbered>
            {instructionList.map((instruction) => (
              <ListGroup.Item
                key={instruction.id}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <span>{instruction.step}</span>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDeleteInstruction(instruction.id)}
                >
                  X
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <Alert variant="secondary">No instructions...</Alert>
        )}
      </div>
    </div>
  )
}

export default Instructions
