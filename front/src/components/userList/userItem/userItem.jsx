import { useState } from 'react';
import { Container, Column, Form } from './userItem.styled';
import { createUser, deleteUser } from '../../../services';

export const UserItem = ({
  id, name, age, email, creating, onSave, onDelete
}) => {

  const [isEditing, setEditing] = useState(creating);
  const [user, setUser] = useState({
    id, name, age, email
  });

  const saveButtonLabel = isEditing ? 'Save' : 'Edit';

  const onSubmitForm = (e) => {
    e.preventDefault();
    createUser(user).then(() => {
      onSave(user);
    });
  }

  const onChangeForm = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setUser((currentState) => {
      return {
        ...currentState,
        [field]: value
      }
    });
  };

  const onSaveClick = (e) => {
    if (!isEditing) {
      e.preventDefault();
      setEditing(!isEditing)
    }
  }

  const onClickCancel = (e) => {
    setEditing(!isEditing);
  }

  const onClickDelete = (e) => {
    deleteUser(user.id).then(() => {
      onDelete(user);
    });
  }

  return (
    <Container>
      <Form onSubmit={onSubmitForm} onChange={onChangeForm}>
        <Column>{user.id}</Column>
        {
          isEditing ? (
            <>
              <Column>
                <input name="name" type="text" value={user.name}/>
              </Column>
              <Column>
                <input name="age" type="text" value={user.age}/>
              </Column>
              <Column>
                <input name="email" type="text" value={user.email}/>
              </Column>
            </>
          ):(
            <>
              <Column>{user.name}</Column>
              <Column>{user.age}</Column>
              <Column>{user.email}</Column>
            </>
          )
        }
        <Column>
          <button name="btnSave" onClick={onSaveClick}>{saveButtonLabel}</button>
        </Column>
      </Form>
      {
        !creating && (
          <Column>
            {
              isEditing ? (
                <button name="btnCancelEdit" onClick={onClickCancel}>Cancel</button>
              ) : (
                <button name="btnDelete" onClick={onClickDelete}>Delete</button>
              )
            }
          </Column>
        )
      }
    </Container>
  )
};