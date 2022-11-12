import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import PageTitle from '../components/PageTitle'
import { Container, Row } from 'react-bootstrap'
import FormTodo from '../components/FormTodo'
import Todos from '../components/Todos'

function TodoPage() {
    const dispatch = useDispatch();
    //Set editFormVisibility state to handle edit form
    const [ editFormVisibility, setEditFormVisibility ] = useState(false);
    //Set editTodo state to catch editTodo value from Todos component child
    const [ editTodo, setEditTodo ] = useState('');
  
    //Set function handleEditClick to catch todo object value from button edit todo from Todos component child
    const handleEditClick = (todo) => {
      setEditFormVisibility(true);
      setEditTodo(todo);
    }
  
    //Set function cancelUpdate to cahnge Edit Form visibility to false(hidden)
    const cancelUpdate = () => {
      setEditFormVisibility(false);
    }

  return (
    <>
          <PageTitle children="What's the plan for today?" />
            <Container className="mb-5">
              <Row>
                <FormTodo editFormVisibility={editFormVisibility } editTodo={editTodo} cancelUpdate={cancelUpdate} />
              </Row>
            </Container>
            <Container>
              <Row className="d-flex justify-content-center flex-column">
                <Todos handleEditClick={handleEditClick}  editFormVisibility={editFormVisibility} />
              </Row>
            </Container>
    </>
  )
}

export default TodoPage