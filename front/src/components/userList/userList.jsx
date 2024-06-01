import { useEffect, useState } from 'react'
import { 
  Container,
  UserItemList,
  UserListHeader
} from './userList.styled'
import { UserItem } from './userItem';
import { listUsers } from '../../services';

export const UserList = () => {

  const [creating, setCreating] = useState(false);
  const [users, setUsers] = useState([]);

  const loadUserList = () => {
    listUsers().then((resp) => {
      setUsers(resp.data);
    });
  };

  const onClickCreateUser = () => {
    setCreating(!creating);
  };

  const onSaveUser = () => {
    setCreating(false);
    loadUserList();
  };

  const onDeleteUser = (user) => {
    console.log('deleted', user);
    loadUserList();
  };

  useEffect(() => {
    loadUserList();
  },[]);

  const btnCreateLabel = creating ? 'Cancel' : 'Create User'

  return (
    <Container>
      <UserListHeader>
        <button onClick={onClickCreateUser}>
          {btnCreateLabel}
        </button>
      </UserListHeader>
      <UserItemList>
        {
          creating && <UserItem creating onSave={onSaveUser} onDelete={onDeleteUser}/>
        }
        {
          users.map((user) => {
            return (
              <UserItem
                key={user.id}
                id={user.id} 
                name={user.name}
                age={user.age}
                email={user.email}
                onSave={onSaveUser} 
                onDelete={onDeleteUser}
              />
            )
          })
        }
      </UserItemList>
    </Container>
  )
}