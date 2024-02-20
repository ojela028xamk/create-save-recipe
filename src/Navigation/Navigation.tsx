import { Container, Navbar } from 'react-bootstrap'
import css from './Navigation.module.scss'

const Navigation = (): JSX.Element => {
  return (
    <div className={css.navigation}>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://react-bootstrap.netlify.app/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span>Create Save Recipe</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
