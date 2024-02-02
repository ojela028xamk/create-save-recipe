import { JSX, useState } from 'react'
import css from './Instructions.module.scss'
import { Button, Form, ListGroup } from 'react-bootstrap'

const Instructions = (): JSX.Element => {
  const [instructionItem, setInstructionItem] = useState<string>('')

  return (
    <div className={css.instructions}>
      <div className={css.instructions_add}>
        <h3>Instructions</h3>
        <Form>
          <Form.Label>Instruction</Form.Label>
          <Form.Control
            type="text"
            value={instructionItem}
            placeholder="Add an instruction..."
            onChange={(event) => setInstructionItem(event.currentTarget.value)}
          ></Form.Control>
        </Form>
        <br />
        <Button variant="success">Add an instruction +</Button>
      </div>
      <div className={css.instructions_list}>
        <ListGroup></ListGroup>
      </div>
    </div>
  )
}

export default Instructions
