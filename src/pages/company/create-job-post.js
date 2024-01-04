// import { JobPostTimeline } from "@/Components/JobPostTimeline/JobPostTimeline";
import DashboardLayout from "@/Components/Layout/DashboardLayout";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import DashboardFooter from "@/Components/Footer/DashboardFooter";
const JobPostTimeline = dynamic(
  () => import("@/Components/JobPostTimeline/JobPostTimeline"),
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
