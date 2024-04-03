import { FormEvent, JSX, useState } from 'react'
import css from './Instructions.module.scss'
import { Alert, Button, Form, ListGroup } from 'react-bootstrap'
import { InstructionItem, StorageType } from '../globalTypes'
import { useRecipeData } from '../AppContainer'

const Instructions = (): JSX.Element => {
  const [{ recipeInstructions }, setRecipeData] = useRecipeData()
  const [instructionStep, setInstructionStep] = useState<string>('')

  const getId = (): string => {
    return Date.now().toString(36)
  }

  const handleNewInstruction = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (!event.currentTarget.checkValidity()) {
      return
    }

    const newInstruction: InstructionItem = {
      id: getId(),
      step: instructionStep,
    }

    const currentInstructions = [...recipeInstructions, newInstruction]

    sessionStorage.setItem(
      StorageType.INSTRUCTION,
      JSON.stringify(currentInstructions)
    )
    setRecipeData((prev) => ({
      ...prev,
      recipeInstructions: currentInstructions,
    }))
    setInstructionStep('')
  }

  const handleDeleteInstruction = (instructionId: string): void => {
    const filteredInstructions = recipeInstructions.filter(
      (instruction) => instruction.id !== instructionId
    )
    sessionStorage.setItem(
      StorageType.INSTRUCTION,
      JSON.stringify(filteredInstructions)
    )

    setRecipeData((prev) => ({
      ...prev,
      recipeInstructions: filteredInstructions,
    }))
  }

  return (
    <div className={css.instructions}>
      <h2>Instructions</h2>
      <div className={css.instructions_add}>
        <Form noValidate onSubmit={handleNewInstruction}>
          <Form.Label>Instruction Step</Form.Label>
          <Form.Control
            required
            type='text'
            value={instructionStep}
            placeholder='Add an instruction...'
            onChange={(event) => setInstructionStep(event.currentTarget.value)}
          />
          <br />
          <Button type='submit' variant='light'>
            Add an instruction +
          </Button>
        </Form>
      </div>
      <div className={css.instructions_list}>
        {recipeInstructions && recipeInstructions.length ? (
          <ListGroup as='ol' numbered>
            {recipeInstructions.map((instruction) => (
              <ListGroup.Item
                key={instruction.id}
                as='li'
                className='d-flex justify-content-between align-items-start'
              >
                <span>{instruction.step}</span>
                <Button
                  variant='outline-danger'
                  size='sm'
                  onClick={() => handleDeleteInstruction(instruction.id)}
                >
                  X
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <Alert variant='secondary'>No instructions...</Alert>
        )}
      </div>
    </div>
  )
}

export default Instructions
