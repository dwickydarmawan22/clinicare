"use client";

import { HeroClinics } from "@/app/containers/HeroClinics";
import { Navbar } from "@/app/containers/Navbar";
import { TabsClinics } from "@/app/containers/TabsClinics";

const Clinics = () => {
  return (
    <div>
      <Navbar />
      <HeroClinics />
      <div style={{ padding: "0 5%" }}>
        <TabsClinics />
      </div>
    </div>
  );
};

export default Clinics;
