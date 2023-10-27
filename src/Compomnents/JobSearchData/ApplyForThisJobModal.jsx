import Apply from "./Apply";
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
  
  function ApplyForThisJobModal({open , onClose,object}) {
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal size={"2xl"} isOpen={open} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius={"8px"} bg={"white.100"}>
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            <ModalCloseButton color={"black.100"} />
            <ModalBody px={"150px"} py={"40px"} >
              <Apply object={object}/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
  export default ApplyForThisJobModal;
  