import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { HeartIcon } from './HeartIcon';

export const CatalogEl = ({
  id,
  img,
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
  return (
    <Card>
      <CardBody>
        <Box>
          <HeartIcon />
          <Image src={img} alt={make} />
        </Box>

        <Box>
          <HStack>
            <Heading>
              {make}
              <Text as="span" color="blue">
                {model}
              </Text>
              ,{year}
            </Heading>
            <Text>{rentalPrice}</Text>
          </HStack>
        </Box>
      </CardBody>
    </Card>
  );
};
