// import { JobPostTimeline } from "@/Compomnents/JobPostTimeline/JobPostTimeline";
import DashboardLayout from "@/Compomnents/Layout/DashboardLayout";

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
    <DashboardLayout disableWaveImage>
      <JobPostTimeline timeLine={[]} title="Create a New Job Post" />
      <DashboardFooter waveImage/>
    </DashboardLayout>
  );
};

export default crearteJobost;
