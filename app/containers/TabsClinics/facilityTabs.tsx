import { ClinicTabsProps } from "@/app/types/clinic";
import {
  CarOutlined,
  HomeOutlined,
  UserOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import styles from "./tabsClinics.module.css";

const facilites = [
  { name: "WiFi", icon: <WifiOutlined style={{ fontSize: "24px" }} /> },
  { name: "AC", icon: <HomeOutlined style={{ fontSize: "24px" }} /> },
  { name: "Parkir", icon: <CarOutlined style={{ fontSize: "24px" }} /> },
  { name: "Spa", icon: <UserOutlined style={{ fontSize: "24px" }} /> },
];

export const FacilityTabs = ({ clinic }: ClinicTabsProps) => {
  const groupedItems = clinic?.facilities?.map((tab) => ({
    label: tab?.name,
    children: facilites.find((item) => item?.name === tab?.name)?.icon,
  }));
  return (
    <>
      <h1 className={styles.section_title}>Fasilitas</h1>
      <div className={styles.facility_wrapper}>
        {groupedItems?.map((item, index) => (
          <div
            key={index}
            className={styles.clinic_subitem_wrapper}
            style={{ gap: "16px" }}
          >
            {item?.children}
            <p className={styles.facility_text}>{item?.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};
