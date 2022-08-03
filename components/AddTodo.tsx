import { Button, HStack, Input } from "@chakra-ui/react"
import React from "react"

function AddTodo() {
  function handleSubmit(e: any) {}
  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input variant='filled' placeholder='Add Todo...' />
        <Button colorScheme='blue' px='8' type='submit'>
          Add Todo
        </Button>
      </HStack>
    </form>
  )
}

export default AddTodo
