import Loader from "../Loader/Loader";

import {
  Heading,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

function DeleteModal({
  deleteBtnLabel,
  name,
  loading,
  handleDelete,
  isOpen,
  onOpen,
  onClose,
}) {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal size={"md"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={"white.100"}>
          <ModalHeader
            mx={"15px"}
            px={"10px"}
            borderBottom={"1px solid "}
            borderColor={"gray.500"}
            py={"12px"}
          >
            <Heading variant={"p6"} color={"black.100"}>
              Delete
            </Heading>
          </ModalHeader>
          <ModalCloseButton fontSize={"10px"} />
          <ModalBody>
            <Box>
              <Heading
                mt={"10px"}
                mb="10px"
                variant={"p4"}
                color={"black.100"}
                fontWeight={500}
              >
                Are you sure you want to { deleteBtnLabel??" delete"} it{" "}
                <Box as="span" fontWeight={700}>
                  {" "}
                  {name}{" "}
                </Box>
                ?
              </Heading>
            </Box>
          </ModalBody>

          <ModalFooter
            mx={"15px"}
            px={"6px"}
            borderTop={"1px solid "}
            borderColor={"gray.500"}
          >
            <Button
              height={"32px"}
              variant={"outline-blue"}
              width={"max-content"}
              px={"20px"}
              colorScheme="blue"
              mr={2}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              height={"32px"}
              width={"max-content"}
              px={"20px"}
              variant={"blue-btn"}
            >
              {loading ? <Loader /> : deleteBtnLabel ?? "Delete"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteModal;
