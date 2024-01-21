import React from 'react';
import { Box, Flex, Select, Input, Button } from '@chakra-ui/react';
import { ChevronDown } from 'react-feather';
import { makes } from 'utils/makes';

const Filter = () => {
  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg="white">
      <Flex justify="space-between" align="center">
        <Box position="relative">
          <Select placeholder="Choose the brand" rightIcon={<ChevronDown />}>
            {makes.map((make, i) => (
              <option key={i} value={make}>
                {make}
              </option>
            ))}
          </Select>
        </Box>

        <Box position="relative">
          <Select
            placeholder="Enter the text"
            rightIcon={<ChevronDown />}
          ></Select>
        </Box>
        <Box>
          <Input type="number" placeholder="Введите число" />
        </Box>
        <Box>
          <Input type="number" placeholder="Введите число" />
        </Box>
        <Box>
          <Button colorScheme="blue">Search</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Filter;
