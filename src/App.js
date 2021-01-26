import { useState, useEffect } from 'react';

import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';

function App() {
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState(() => {
    const cache = localStorage.getItem('cache');
    if (cache) return JSON.parse(cache);
    return [];
  });

  // Save data to local storage every time it changes
  useEffect(() => {
    localStorage.setItem('cache', JSON.stringify(todoList));
  }, [todoList]);

  const handleInputChange = (event) => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, value]);
    setValue('');
  };

  return (
    <>
      <Box padding={6} backgroundColor="blue.500" color="white">
        <Heading>My Todo App</Heading>
      </Box>
      <Box padding={6}>
        <form onSubmit={handleSubmit}>
          <FormControl id="todo">
            <FormLabel>Add a New To-do</FormLabel>
            <Input value={value} onChange={handleInputChange} type="text" />
            <FormHelperText>Make it exciting.</FormHelperText>
          </FormControl>
        </form>

        <Box marginTop={4}>
          <OrderedList>
            {todoList.map((todoItem, index) => (
              <ListItem key={index}>{todoItem}</ListItem>
            ))}
          </OrderedList>
        </Box>
      </Box>
    </>
  );
}

export default App;
