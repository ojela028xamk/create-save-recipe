import { Container, Nav, Navbar } from 'react-bootstrap'
import css from './Navigation.module.scss'

type NavigationProps = {
  toggleNav: (showIngredients: boolean, showInstructions: boolean) => void
  showIngredients: boolean
  showInstructions: boolean
}

const Navigation = ({
  toggleNav,
  showIngredients,
  showInstructions,
}: NavigationProps): JSX.Element => {
  return (
    <div className={css.navigation}>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://react-bootstrap.netlify.app/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span> Create Save Recipe</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              className={showIngredients ? css.nav_link_active : css.nav_link}
              onClick={() => toggleNav(true, false)}
            >
              Add ingredients
            </Nav.Link>
            <Nav.Link
              className={showInstructions ? css.nav_link_active : css.nav_link}
              onClick={() => toggleNav(false, true)}
            >
              Add instructions
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
