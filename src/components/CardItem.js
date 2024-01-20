import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  HStack,
  StackDivider,
} from '@chakra-ui/react';

export const CardItem = ({
  id,
  make,
  model,
  year,
  address,
  type,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  functionalities,
  mileage,
  rentalPrice,
}) => {
  const addressParts = address.split(',').map(part => part.trim());
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.riastatic.com%2Fphotosnew%2Fauto%2Fphoto%2Fmitsubishi_outlander-xl__313601782fx.jpg&tbnid=PAemgMXFcj4sfM&vet=10CAYQxiAoBWoXChMI-K2Fqa7sgwMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fauto.ria.com%2Fuk%2Freviews%2Fmitsubishi%2Foutlander-xl%2F&docid=TbUjVuzAu0I4YM&w=800&h=564&itg=1&q=Mitsubishi%20Outlander%20XL&ved=0CAYQxiAoBWoXChMI-K2Fqa7sgwMVAAAAAB0AAAAAEAc"
          alt="Outlander XL"
          borderRadius="xl"
          objectFit="cover"
          mx="auto"
        />
        <Stack>
          <Box>
            <Heading>
              {make}
              <Text as="span" color="blue">
                {model}
              </Text>
              ,{year}
            </Heading>
            <HStack divider={<StackDivider />}>
              <Text>{city}</Text>
              <Text>{country}</Text>
              <Text>Id:{id}</Text>
              <Text>Year:{year}</Text>
              <Text>Type:{type}</Text>
            </HStack>
            <HStack divider={<StackDivider />}>
              <Text>Fuel consumption:{fuelConsumption}</Text>
              <Text>Engine size:{engineSize}</Text>
            </HStack>
            <Text>{description}</Text>
          </Box>
          <Box>
            <Heading>Accessories and functionalities:</Heading>

            <Text>{accessories.split(' ')}</Text>
            <Text>{functionalities.split(' ')}</Text>
          </Box>

          <Box>
            <HStack>
              <Text>Security deposite required </Text>
              <Text>{mileage}</Text>
              <Text>{rentalPrice}</Text>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
