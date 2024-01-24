import * as React from 'react';
import { useState } from 'react';
import { useUnit } from "effector-react";
import { $counter, incrementCounter, decrementCounter, generateRandomNumber } from "@/stores/counter";
import { ChakraProvider } from '@chakra-ui/react';
import { Button, ButtonGroup, Center, Heading, Card, CardBody, CardFooter } from '@chakra-ui/react';

export default function Count() {
  const { counter, onIncrement, onDecrement, onRandomNumber} = useUnit({
    counter: $counter,
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
    onRandomNumber: generateRandomNumber
  });
  return (
    <ChakraProvider>
      <Center>
        <Card marginTop='200px' align='center' bg='gray.50' size='lg'>
          <CardBody>
            <ButtonGroup>
              <Button colorScheme='blue' size='lg' onClick={onIncrement}>Увеличить (+)</Button>
              <Button colorScheme='blue' size='lg' onClick={onDecrement}>Уменьшить (-)</Button>
              <Button colorScheme='teal' size='lg' onClick={onRandomNumber}>Рандомное число</Button>
            </ButtonGroup>
          </CardBody>
          <CardFooter>
            <Heading as='h2' size='2xl'>Число: {counter}</Heading>
          </CardFooter>
        </Card>
      </Center>
    </ChakraProvider>
  );
}
