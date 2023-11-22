// import { JobPostTimeline } from "@/Compomnents/JobPostTimeline/JobPostTimeline";
import DasboardLayout from "@/Compomnents/Layout/DasboardLayout";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";
const JobPostTimeline = dynamic(
  () => import("@/Compomnents/JobPostTimeline/JobPostTimeline"),
  {
    ssr: false,
  }
);
const crearteJobost = () => {
  return (
    <DasboardLayout disableWaveImage>
      <JobPostTimeline title="Create a New Job Post" />
      <DashboardFooter waveImage/>
    </DasboardLayout>
  );
};

export default crearteJobost;
