"use client";

import { HeroClinics } from "@/app/containers/HeroClinics";
import { Navbar } from "@/app/containers/Navbar";
import { TabsClinics } from "@/app/containers/TabsClinics";
import { getClinicDetailThunk } from "@/app/store/actions/clinic";
import { AppDispatch } from "@/app/store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Clinics = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getClinicDetailThunk(1));
  }, []);
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
