import { FormEvent, JSX, useState } from 'react'
import css from './Instructions.module.scss'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useEffectOnce } from 'react-use'
import { InstructionItem, StorageType } from '../globalTypes'
import { getSessionStorage } from '../Services/storageService'

const Instructions = (): JSX.Element => {
  const [instructionStep, setInstructionStep] = useState<string>('')
  const [instructionList, setInstructionList] = useState<InstructionItem[]>([])
  const [showValidated, setShowValidated] = useState<boolean>(false)

  const getInstructionList = (): void => {
    const storageInstructions = getSessionStorage(StorageType.INSTRUCTION)
    setInstructionList(storageInstructions as InstructionItem[])
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

    const newIngredient: InstructionItem = {
      id: getId(),
      step: instructionStep,
      storageType: StorageType.INSTRUCTION,
    }

    sessionStorage.setItem(newIngredient.id, JSON.stringify(newIngredient))
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
      <div className={css.instructions_add}>
        <h3>Instructions</h3>
        <Form
          noValidate
          validated={showValidated}
          onSubmit={(event) => handleNewInstruction(event)}
        >
          <Form.Label>Instruction</Form.Label>
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
      <br />
      <div className={css.instructions_list}>
        {instructionList && instructionList.length ? (
          <ListGroup as="ol" numbered>
            {instructionList.map((instruction) => (
              <ListGroup.Item key={instruction.id} as="li">
                {instruction.step}{' '}
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
          <h5>No instructions...</h5>
        )}
      </div>
    </div>
  )
}

export default Instructions
