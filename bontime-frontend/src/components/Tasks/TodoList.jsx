import React from "react";
import {Box, Button, Flex} from "@chakra-ui/react"
const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <>
    <Box  w="80%"  m="auto" >
        <Flex w ="50%" m="auto" className="allTodos" flexDirection="column" >
      <table>
        <tbody>
          <tr>
            <td>
            {todos.map((t) => (
            <Box className="singleTodo" mt="1rem" w="auto" bgColor="#5dadf8" borderRadius="10" p=".5em">
              <td>
              <span className="todoText" key={t.id}>
                {t.todo}
              </span>

              </td>
              <td>
              <Button borderRadius="50%" p="1rem"   ml="7rem" onClick={() => handleEdit(t.id)}>Edit</Button>
              </td>
              <td>
              <Button borderRadius="50%" p="1rem" ml="1rem" onClick={() => handleDelete(t.id)}>Delete</Button>
              </td>
            </Box>
          ))}

            </td>
          </tr>
        </tbody>
        </table>
        
      
          
        </Flex>
        </Box>
    </>
  );
};

export default TodoList;