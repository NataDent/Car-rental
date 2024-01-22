import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  HStack,
  Heading,
  Image,
  ListItem,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ModalWindow } from './Modal';
import { selectIsLoading, selectfavorites } from '../redux/selectors';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

export const CatalogEl = ({ advert }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    photoLink,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = advert;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectfavorites);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedAdvert = favorites.some(favorite => favorite.id === id);
    setIsLiked(likedAdvert);
  }, [favorites, id]);

  const handleCheckbox = () => {
    if (isLiked) {
      dispatch(removeFavorite({ advert }));
    } else {
      dispatch(addFavorite({ advert }));
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <ListItem
      style={{
        position: 'relative',
        height: '426px',
      }}
    >
      <Card>
        <CardHeader>
          <Checkbox
            ariaLabel="isFavorite"
            border="none"
            checked={isLiked}
            onChange={() => handleCheckbox()}
          >
            {isLiked ? (
              <FaHeart color="#3470FF" />
            ) : (
              <FaRegHeart color="rgba(255, 255, 255, 0.80)" />
            )}
          </Checkbox>
          <Image
            src={img || photoLink}
            alt={make}
            style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
          />
        </CardHeader>

        <CardBody>
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

          <HStack divider={<StackDivider />}>
            <Text>{address.split(',')[1]}</Text>
            <Text>{address.split(',')[2]}</Text>
            <Text>{rentalCompany}</Text>
            <Text>{id}</Text>
            <Text>{type}</Text>
            <Text>{model}</Text>
            <Text>{mileage}</Text>
            <Text>{functionalities[0]}</Text>
          </HStack>
        </CardBody>

        <CardFooter>
          <Button aria-label="LearnMore" disabled={isLoading} onClick={onOpen}>
            Learn more
          </Button>
        </CardFooter>
        {isOpen && (
          <ModalWindow onOpen={onOpen} onClose={onClose} advert={advert} />
        )}
      </Card>
    </ListItem>
  );
};
