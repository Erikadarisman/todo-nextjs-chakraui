import { Button, HStack, Input, useToast } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import React, { useState } from "react"

function AddTodo({ addTodo }: any) {
  const [newTodo, setNewTodo] = useState("")

  const toast = useToast()

  function handleSubmit(e: any) {
    e.preventDefault()
    if (!newTodo) {
      toast({
        title: "No Item Todo",
        status: "error",
        duration: 2000,
        isClosable: true,
      })
    } else {
      const todo = {
        id: nanoid(),
        body: newTodo,
      }
      addTodo(todo)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          variant='filled'
          placeholder='Add Todo...'
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value)
          }}
        />
        <Button colorScheme='blue' px='8' type='submit'>
          Add Todo
        </Button>
      </HStack>
    </form>
  )
}

export default AddTodo
