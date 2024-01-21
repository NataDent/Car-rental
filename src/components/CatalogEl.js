import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { HeartIcon } from './HeartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toggleLikedAd } from '../redux/favoritesSlice';
import { ModalWindow } from './Modal';

export const CatalogEl = ({ advert }) => {
  const dispatch = useDispatch();
  const isAdLiked = useSelector(state =>
    state.favorites.likedAds.includes(advert.id)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Восстанавливаем overflow при размонтировании
    };
  }, [isModalOpen]);
  const handleHeartToggle = () => {
    dispatch(toggleLikedAd(advert.id));
  };

  const handleLearnMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Card
      key={advert.id}
      style={{
        position: 'relative',
        height: '426px',
      }}
    >
      <HeartIcon
        adId={advert.id}
        onToggle={handleHeartToggle}
        isLiked={isAdLiked}
      />

      <CardBody>
        <Box>
          <Image
            src={advert.img}
            alt={advert.make}
            style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        <Box>
          <HStack>
            <Heading>
              {advert.make}
              <Text as="span" color="blue">
                {advert.model}
              </Text>
              ,{advert.year}
            </Heading>
            <Text>{advert.rentalPrice}</Text>
          </HStack>
        </Box>
        <HStack>
          <Text>
            {advert.address && advert.address.split(',').slice(-2).join(', ')}
            {advert.rentalCompany}| {advert.type}|{advert.id}|{' '}
            {advert.accessories && advert.accessories[0]}
          </Text>
        </HStack>
      </CardBody>
      <CardFooter>
        <Button onClick={handleLearnMoreClick}>Learn more</Button>
      </CardFooter>
      {isModalOpen && (
        <ModalWindow onClose={handleModalClose} advert={advert} />
      )}
    </Card>
  );
};
