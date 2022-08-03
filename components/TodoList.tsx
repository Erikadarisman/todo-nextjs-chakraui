import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react"
import React from "react"
import { FaTrash } from "react-icons/fa"

function TodoList({ data, deleteTodo }: any) {
  if (!data.length) {
    return (
      <Badge colorScheme='red' p='4' m='4'>
        No Data
      </Badge>
    )
  }
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
      {data.map((item: any, idx: any) => (
        <HStack key={idx}>
          <Text>{item.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            aria-label={"trash button"}
            onClick={() => deleteTodo(item.id)}
          />
        </HStack>
      ))}
    </VStack>
  )
}

export default TodoList
