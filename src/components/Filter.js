import React from 'react';
import { Box, Select, Input, Button, Text, HStack } from '@chakra-ui/react';
import { ChevronDown } from 'react-feather';
import { makes } from 'data/makes';

export const Filter = () => {
  const nums = Array.from({ length: 8 }, (_, index) => (index + 3) * 10);
  return (
    <Box
      boxShadow="md"
      borderRadius="md"
      bg="white"
      gap=" 18px"
      display="flex"
      maxWidth="1440px"
      p="20px 115px"
      alignItems="center"
      justifyContent="space-between"
      mb="64px"
      mx="auto"
    >
      <Box position="relative">
        <Text>Car brand</Text>
        <Select placeholder="Choose the brand" righticon={<ChevronDown />}>
          {makes.map((make, i) => (
            <option key={i} value={make}>
              {make}
            </option>
          ))}
        </Select>
      </Box>

      <Box position="relative">
        <Text>Price/ 1 hour</Text>
        <Select placeholder="To $" righticon={<ChevronDown />}>
          {nums.map(num => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </Select>
      </Box>
      <Box>
        <Text>Сar mileage / km</Text>
        <HStack maxW="320px" h="48px" gap="0">
          <Input type="number" placeholder="From" />

          <Input type="number" placeholder="To" />
        </HStack>
      </Box>
      <Box>
        <Button bg="blue" color="white">
          Search
        </Button>
      </Box>
    </Box>
  );
};
