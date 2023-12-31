import dynamic from "next/dynamic";
import React, { useState } from "react";
// import ReactQuill from "react-quill";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

// import "react-quill/dist/quill.snow.css";

const TextFormatting = ({
  placeholder,
  className,
  value,
  readOnly,
  setValue,
}) => {
  // const [value, setValue] = useState("");
  // console.log("value",value);
  const formate = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    // "image",
    // "video",
  ];
  const module = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      // ["link", "image", "video"],
      ["link"],
      ["clean"],
    ],
  };
  return (
    <ReactQuill
      formats={formate}
      className={className}
      modules={module}
      style={{
        // border: "none",
        // color: "#111",

        borderRadius: "8px ",
        backgroundColor: "#F7F9FB",
      }}
      value={value}
      theme="snow"
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={setValue}
    />
  );
};
export default TextFormatting;
