import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import location from "../../assets/Images/location.svg";
import { useRouter } from "next/router";
import { get, post } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResult } from "@/Redux/slices/search";
import { setFilter } from "@/Redux/slices/filters";

const SearchBox = ({ setIsApplied }) => {
  const selectedFilterState = useSelector(
    (state) => state.filters.value.filters
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedJobState = useSelector(
    (state) => state.jobApplicantList.value.selectedJob
  );
  const [formData, setFormData] = useState({
    location: "",
    multipleSearch: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSearch = async () => {
    if (formData.location == "" && formData.multipleSearch == "") return;
    dispatch(setSearchResult(false));

    try {
      const postData = await post(
        `${endPoints.filters}/${selectedJobState.id}?searchQuery=${formData.multipleSearch}&location=${formData.location}`
      );
      dispatch(setSearchResult(postData.data));

      dispatch(
        // false
        setFilter({
          // ...selectedFilterState,
          sortBy: [],
          status: [],
          educationLevel: [],
          skills: [],
          searchResult: formData,
        })
      );
      setIsApplied(false);
    } catch (err) {}
  };
  return (
    <Flex
      gap={{ md: "30px", base: "10px" }}
      //   flexWrap={"wrap"}

      mb="20px"
      mr={"30px"}
      flexDirection={{ md: "row", base: "column" }}
      alignItems="center" // Center the items vertically
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="black" />}
        />
        <Input
          type="text"
          name="multipleSearch"
          onChange={handleChange}
          value={formData.multipleSearch}
          variant="bg-input"
          placeholder="Search for  skills, and Keywords"
          marginRight="2"
          bg={"gray.200"}
        />
      </InputGroup>

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Image width={"18px"} src={location.src} />}
        />
        <Input
          type="text"
          variant="bg-input"
          placeholder="Search by Location e.g. “city” “state” "
          marginRight="2"
          name="location"
          onChange={handleChange}
          value={formData.location}
        />
      </InputGroup>

      <Button
        sx={{ padding: "20px 60px 20px 60px" }}
        variant="blue-btn"
        marginLeft="2"
        onClick={handleSearch}
      >
        Search Now
      </Button>
    </Flex>
  );
};

export default SearchBox;
