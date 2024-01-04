import React, { useRef, useState } from "react";
import {
  isValid,
  isExpirationDateValid,
  isSecurityCodeValid,
  getCreditCardNameByNumber,
  getCreditCardImageByNumber,
} from "creditcard.js";
import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate,
} from "@/Utils/paymentInput";
import { Box, Button, Heading, Flex, Input } from "@chakra-ui/react";
import LabelInput from "../LabelInput/LabelInput";
import InputWrapper from "../InputWrapper/InputWrapper";
function CreditCardForm({ handleCancel, handleSave }) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardData, setCardData] = useState(null);
  const inputRef = useRef(null);
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    address: "",
    address: "",
    city: "",
    province: "",
    date: "",
    country: "",
    month: "",
  });

  const handleInputChange = ({ target }) => {
    console.log("|target", target);
    const newState = { ...state };
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }
    newState[target.name] = target.value;
    setState(newState);
  };

  const handleExpiry = (e) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/\D/g, "").slice(0, 2);
    if (e.target === inputRef.current) {
      setState((prev) => {
        return {
          ...prev,
          month: filteredValue,
        };
      });
    } else {
      setState((prev) => {
        return {
          ...prev,
          date: filteredValue,
        };
      });
      if (filteredValue.length === 2) {
        inputRef.current.focus();
      }
    }
  };
  return (
    <Box>
      <Box mx={"auto"} width={"45%"}>
        <Heading
          fontWeight={600}
          color={"black.100"}
          textAlign={"center"}
          m={{ md: "42px 0px 40px 0px", base: "30px 0px 30px 0px" }}
          variant={"p6"}
        >
          Add Payment Method
        </Heading>
        <LabelInput
          name={"number"}
          setState={handleInputChange}
          state={state.number}
          pattern="[\d| ]{16,22}"
          required
          labelVariant={"label"}
          type="tel"
          variant={"bg-input"}
          placeholder="Enter Card Number"
          label={" Card Number"}
        />
        <Box my={"25px"}>
          <LabelInput
            setState={handleInputChange}
            state={state.name}
            name={"name"}
            required
            labelVariant={"label"}
            type="tel"
            variant={"bg-input"}
            placeholder="Enter Name"
            label={"Name On Card"}
          />
        </Box>

        <InputWrapper gap={{ xl: "80px", base: "20px" }}>
          <LabelInput
            state={state.cvc}
            pattern="\d{3,4}"
            name={"cvc"}
            setState={handleInputChange}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder=" Enter 3-Digit Code"
            label={"CVV"}
          />
          <Box
            textAlign="end"
            display={"flex"}
            justifyContent={"flex-end"}
            flexDirection={"column"}
            alignItems={"flex-end"}
          >
            <Heading mb={"9px"} variant={"p4"}>
              {" "}
              Expiry Date{" "}
            </Heading>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"5px "}
              justifyContent={"flex-end"}
            >
              <Input
                value={state.date}
                sx={{ width: "50%" }}
                variant={"bg-input"}
                onChange={handleExpiry}
                placeholder={""}
                type={"number"}
              />
              <Heading
                fontSize={"33px"}
                variant={"h1"}
                color={"gray.400"}
                as={"p"}
                fontWeight={200}
              >
                /
              </Heading>
              <Input
                value={state.month}
                onChange={handleExpiry}
                ref={inputRef}
                sx={{ width: "50%" }}
                variant={"bg-input"}
                placeholder={""}
                type={"number"}
              />
            </Box>
          </Box>
        </InputWrapper>

        <Box mb={"20px"}>
          <LabelInput
            state={state.country}
            setState={handleInputChange}
            name={"country"}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Select Country"
            dropdown
            label={"Country*"}
          />
        </Box>
        <Box mb={"20px"}>
          <LabelInput
            state={state.province}
            setState={handleInputChange}
            name={"province"}
            dropdown
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Select State/Province"
            label={"State/Province"}
          />
        </Box>
        <Box mb={"20px"}>
          <LabelInput
            state={state.city}
            setState={handleInputChange}
            name={"city"}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter City"
            label={"City"}
          />
        </Box>
        <Box mb={"20px"}>
          <LabelInput
            state={state.address}
            setState={handleInputChange}
            name={"address"}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Street Address"
            label={"Street Address"}
          />
        </Box>

        <Flex mb={"40px"} gap={"25px"} justifyContent="center" mt={"70px"}>
          <Button onClick={handleCancel} variant="outline-blue">
            Cancel
          </Button>
          <Button onClick={handleSave} variant={"blue-btn"}>
            Save
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default CreditCardForm;
