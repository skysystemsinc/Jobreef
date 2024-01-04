import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  FormLabel,
  Image,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import white_edit from "@/assets/Images/white-edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import { roles } from "@/Utils/constant";
import EditProifle from "../EditProifle/EditProifle";
import CreditCardForm from "../CreditCard/CreditCard";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";
import PaymentMethodeCard from "../PaymentMethodeCard/PaymentMethodeCard";
import RecentOrders from "../RecentOrders/RecentOrders";
import DeleteModal from "../DeleteModal/DeleteModal";
import SubscriptionPlans from "../SubscriptionPlans/SubscriptionPlans";
const Billing = () => {
  const [state, setState] = useState({
    add: false,
    edit: false,
    delete: false,
    paymentMethodeAdded: true,
    SubscriptionPlans: false,
  });
  return (
    <Box minH={"58vh"} mt={{ lg: "30px", base: "15px" }}>
      <DeleteModal
        onOpen={() =>
          setState((prev) => {
            return { ...prev, delete: true };
          })
        }
        isOpen={state.delete}
        onClose={() =>
          setState((prev) => {
            return { ...prev, delete: false };
          })
        }
      />
      {state.add ? (
        <CreditCardForm
          handleCancel={() => {
            setState((prev) => {
              return {
                ...prev,
                add: false,
              };
            });
          }}
          handleSave={() => {
            setState((prev) => {
              return {
                ...prev,
                add: false,
                paymentMethodeAdded: false,
              };
            });
          }}
        />
      ) : state.SubscriptionPlans ? (
        <SubscriptionPlans />
      ) : (
        <>
          <Box mb={"20px"}>
            <SubscriptionCard
              handleAdd={() =>
                setState((prev) => ({ ...prev, SubscriptionPlans: true }))
              }
              noActiveSub
            />
          </Box>
          <PaymentMethodeCard
            handleAdd={() => {
              setState((prev) => {
                return {
                  ...prev,
                  add: true,
                };
              });
            }}
            handleEdit={() => {
              setState((prev) => {
                return {
                  ...prev,
                  add: true,
                };
              });
            }}
            handleDelete={() => {
              setState((prev) => {
                return {
                  ...prev,
                  delete: true,
                };
              });
            }}
            addPaymentMethode={state.paymentMethodeAdded}
          />
          <Box mt={"20px"}>
            <RecentOrders />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Billing;
