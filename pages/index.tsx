import {
  Box,
  Heading,
  IconButton,
  StackDivider,
  VStack,
} from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { FaSun, FaMoon } from "react-icons/fa"
import TodoList from "../components/TodoList"
import AddTodo from "../components/AddTodo"
import { useState } from "react"

const Home: NextPage = () => {
  const init = [
    { id: 1, body: "lorem" },
    { id: 2, body: "ipsum" },
  ]
  const [todos, setTodos] = useState(init)

  function deleteTodo(id: any) {
    const newTodos = todos.filter((todo: any) => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }
  return (
    <VStack p={4} spacing='8'>
      <IconButton
        icon={<FaSun />}
        aria-label={"mode color"}
        size='lg'
        isRound
        alignSelf='flex-end'
      />
      <Heading
        size='2xl'
        fontWeight='extrabold'
        bgGradient='linear(to-r,red.500, red.300, blue.400)'
        bgClip='text'>
        Chakra UI Todo
      </Heading>
      <TodoList data={todos} deleteTodo={deleteTodo} />
      <AddTodo />
    </VStack>
  )
}

export default Home
