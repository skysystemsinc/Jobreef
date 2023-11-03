import React from "react";
import { Box, Button, Heading, Flex, Input, Image } from "@chakra-ui/react";
import EditDeleteButtons from "../EditDeleteButtons/EditDeleteButtons";
import paycard from "@/assets/Images/paycard.svg";
const PaymentMethodeCard = ({ handleDelete, handleEdit, handleCancel ,handleAdd, addPaymentMethode }) => {
  return (
    <Box
      border={"1px solid"}
      borderColor={"gray.400"}
      borderRadius="8px"
      p={"20px 30px 20px 30px"}
      boxShadow={" 0px 4px 20px 0px rgba(0, 0, 0, 0.05)"}
      bg={"white.100"}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading color={"gray.text"} variant={"p7"}>
          Payment Method
        </Heading>
        {addPaymentMethode ? null : <EditDeleteButtons handleDelete={handleDelete} handleEdit={handleEdit} />}
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box mt={"13px"} display="flex" gap={"15px"}>
          {addPaymentMethode ? (
            <Heading color={"gray.text"} variant={"p7"}>
              No Active Payment Method
            </Heading>
          ) : (
            <>
              <Image width={"40px"} src={paycard.src} />
              <Box>
                <Heading color={"gray.text"} variant={"p4"} fontWeight={600}>
                  Visa
                </Heading>

                <Heading color={"gray.text"} variant={"p12"}>
                  Expires 12/24
                </Heading>
              </Box>
            </>
          )}
        </Box>

        {addPaymentMethode ? (
          <Button onClick={handleAdd} width={"max-content"} variant={"outline-blue"}>
            {" "}
            Add Payment Method
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};

export default PaymentMethodeCard;
