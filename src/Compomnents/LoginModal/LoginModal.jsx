import Login from "../Login/Login";

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
  
  function LoginModal({open , onClose,setTemplogin}) {
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal size={"2xl"} isOpen={open} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius={"8px"} bg={"white.100"}>
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            <ModalCloseButton color={"black.100"} />
            <ModalBody px={{lg:"150px", base:"10px"}} py={"40px"} >
              <Login setTemplogin={setTemplogin}/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
  export default LoginModal;
  