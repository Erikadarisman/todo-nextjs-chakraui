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

const Home: NextPage = () => {
  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        aria-label={"mode color"}
        size='lg'
        isRound
        alignSelf='flex-end'
      />
      <Heading
        mb='8'
        size='2xl'
        fontWeight='extrabold'
        bgGradient='linear(to-r,red.500, red.300, blue.400)'
        bgClip='text'>
        Chakra UI Todo
      </Heading>
      <TodoList />
      <AddTodo />
    </VStack>
  )
}

export default Home
