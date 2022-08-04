import { Heading, IconButton, VStack } from "@chakra-ui/react"
import type { NextPage } from "next"
import { FaSun } from "react-icons/fa"
import TodoList from "../components/TodoList"
import AddTodo from "../components/AddTodo"
import { useEffect, useRef, useState } from "react"

const Home: NextPage = () => {
  const [todos, setTodos]: any = useState([])
  const didMount = useRef(false)

  useEffect(() => {
    const init = localStorage.getItem("todos")
    if (init) {
      setTodos(JSON.parse(init))
    }
  }, [])

  useEffect(() => {
    // Return early, if this is the first render:
    if (!didMount.current) {
      didMount.current = true
      return
    }
    // Paste code to be executed on subsequent renders:
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  async function deleteTodo(id: any) {
    const newTodos = await todos.filter((todo: any) => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  async function addTodo(todo: any) {
    setTodos([...todos, todo])
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
      <AddTodo addTodo={addTodo} />
    </VStack>
  )
}

export default Home
