import { MapProvider } from "@/app/mapProviders";
import styles from "./tabsClinics.module.css";
import { MapComponent } from "@/app/components/Map";
import { ClinicTabsProps } from "@/app/types/clinic";

export const LocationTabs = ({ clinic }: ClinicTabsProps) => {
  return (
    <>
      <h1 className={styles.section_title}>Lokasi</h1>
      <MapProvider>
        <MapComponent />
      </MapProvider>
      <p>{clinic.address}</p>
    </>
  );
};
