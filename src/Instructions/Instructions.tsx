import { JSX, useState } from 'react'
import css from './Instructions.module.scss'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useEffectOnce } from 'react-use'
import { InstructionItem, StorageType } from '../globalTypes'

const Instructions = (): JSX.Element => {
  const [instructionStep, setInstructionStep] = useState<string>('')
  const [instructionList, setInstructionList] = useState<InstructionItem[]>([])

  const getInstructionList = (): void => {
    const storageInstructions = Object.keys(sessionStorage)
    const currentInstructions: InstructionItem[] = []

    for (const key of storageInstructions) {
      const instructionItem = sessionStorage.getItem(key)

      if (instructionItem) {
        const parsedInstructionItem = JSON.parse(instructionItem)

        if (parsedInstructionItem.hasOwnProperty('step')) {
          currentInstructions.push(parsedInstructionItem)
        }
      }
    }

    setInstructionList(currentInstructions)
  }

  const getId = (): string => {
    return Date.now().toString(36)
  }

  const handleNewInstruction = (): void => {
    if (!instructionStep || !instructionStep.length) return
    const newIngredient: InstructionItem = {
      id: getId(),
      step: instructionStep,
      storageType: StorageType.INSTRUCTION,
    }

    sessionStorage.setItem(newIngredient.id, JSON.stringify(newIngredient))
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
        <Form>
          <Form.Label>Instruction</Form.Label>
          <Form.Control
            type="text"
            value={instructionStep}
            placeholder="Add an instruction..."
            onChange={(event) => setInstructionStep(event.currentTarget.value)}
          ></Form.Control>
        </Form>
        <br />
        <Button variant="success" onClick={handleNewInstruction}>
          Add an instruction +
        </Button>
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
