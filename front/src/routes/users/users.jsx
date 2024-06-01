import { UserList } from '../../components'
import { 
  Container, 
  Description, 
  Heading, 
  UserListContainer
} from './users.styled'

export const Users = () => {
  return (
    <Container>
      <Heading>This is the user list</Heading>
      <Description>
        here you could add, edit and delete users
      </Description>
      <UserListContainer>
        <UserList/>
      </UserListContainer>
    </Container>
  )
}