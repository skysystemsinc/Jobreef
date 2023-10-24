// import { JobPostTimeline } from "@/Compomnents/JobPostTimeline/JobPostTimeline";
import DasboardLayout from "@/Compomnents/Layout/DasboardLayout";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const JobPostTimeline = dynamic(
  () => import("@/Compomnents/JobPostTimeline/JobPostTimeline"),
  {
    ssr: false,
  }
);
const crearteJobost = () => {
  return (
    <DasboardLayout>
      <JobPostTimeline />
    </DasboardLayout>
  );
};

export default crearteJobost;
