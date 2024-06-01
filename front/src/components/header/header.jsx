import { useGlobalContext } from '../../context'
import { ButtonTheme, Container } from './header.styled'

export const Header = () => {

  const { toggleTheme, theme } = useGlobalContext();

  const onClickButtonTheme = () => {
    toggleTheme();
  };

  return (
    <Container>
      Current Theme: {theme.name}
      <ButtonTheme onClick={onClickButtonTheme}>
        Change Theme
      </ButtonTheme>
    </Container>
  )
}