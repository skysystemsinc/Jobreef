const {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} = require("@chakra-ui/react");
const { default: NotePad } = require("../NotePad/NotePad");

function NotePadModal({open , onClose}) {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal size={"lg"} isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"8px"} bg={"white.100"}>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton color={"black.100"} />
          <ModalBody p={0}>
            <NotePad />
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
export default NotePadModal;
