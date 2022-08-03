import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
} from "@chakra-ui/react"
import React from "react"
import { FaTrash } from "react-icons/fa"

function TodoList() {
  const todo = [
    { id: 1, body: "lorem" },
    { id: 2, body: "ipsum" },
  ]
  return (
    <VStack
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      p='4'
      borderRadius='lg'
      w='100%'
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems='stretch'>
      {todo.map((item, idx) => (
        <HStack key={idx}>
          <Text>{item.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} aria-label={"trash button"} />
        </HStack>
      ))}
    </VStack>
  )
}

export default TodoList
