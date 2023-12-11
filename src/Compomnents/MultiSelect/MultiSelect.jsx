import { MultiSelect } from "chakra-multiselect";
import { useState } from "react";
import black_arrow_down from "@/assets/Images/black-arrow-down.svg";
import { Image } from "@chakra-ui/react";

const CustomMultiSelect = () => {
  const [value, setValue] = useState([]);
  console.log("value",value);

  const options = [
    { label: "option1", value: "option1" },
    { label: "option2", value: "option2" },
    { label: "option3", value: "option3" },
    { label: "option4", value: "option4" },
  ];
  return (
    <MultiSelect
      options={options}
      value={value}
      label="Company Employees"
      onChange={setValue}
      placeholder="Select  Employee"
      icon={<Image src={black_arrow_down.src} />}
      SelectIconButtonProps={{ icon: <Image src={black_arrow_down.src} /> }}
    />
  );
};

export default CustomMultiSelect;
