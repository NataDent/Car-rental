import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { CardItem } from './CardItem';

export const ModalWindow = () => {
  const { isOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalBody>
            <CardItem />
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Button variant="ghost" colorScheme="blue" mr={3}>
              Rental car
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
