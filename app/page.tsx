"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CategoryClinics } from "./containers/CategoryClinics";
import { HeroHomepage } from "./containers/HeroHomepage";
import { Navbar } from "./containers/Navbar";
import { Promo } from "./containers/Promo";
import { SearchClinic } from "./containers/SearchClinic";
import { getClinicListThunk } from "./store/actions/clinic";
import { AppDispatch } from "./store/store";
import styles from "./styles/pages/homepage.module.css";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getClinicListThunk());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Navbar />
      <HeroHomepage />
      <div style={{ padding: "0 5%" }}>
        <SearchClinic />
        <CategoryClinics />
        <Promo />
      </div>
    </div>
  );
};

export default Home;
