import React from 'react';
import {
  Box,
  Flex,
  Select,
  Input,
  Button,
  Text,
  HStack,
} from '@chakra-ui/react';
import { ChevronDown } from 'react-feather';
import { makes } from 'utils/makes';

const Filter = () => {
  const nums = Array.from({ length: 8 }, (_, index) => (index + 3) * 10);
  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg="white">
      <Flex justify="space-between" align="center">
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
        <HStack>
          <Input type="number" placeholder="From" />

          <Input type="number" placeholder="To" />
        </HStack>
        <Box>
          <Button bg="blue" color="white">
            Search
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Filter;
