import { Card } from "@/app/components/Card";
import {
  CarOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  StarFilled,
  UserOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Carousel, ConfigProvider, Divider } from "antd";
import DoctorImage from "../../../public/doctor_1.jpg";
import styles from "./tabsClinics.module.css";
import { CardReview } from "@/app/components/CardReview";
import { ClinicTabsProps } from "@/app/types/clinic";

const facilites = [
  { name: "WiFi", icon: <WifiOutlined style={{ fontSize: "24px" }} /> },
  { name: "AC", icon: <HomeOutlined style={{ fontSize: "24px" }} /> },
  { name: "Parkir", icon: <CarOutlined style={{ fontSize: "24px" }} /> },
  { name: "Spa", icon: <UserOutlined style={{ fontSize: "24px" }} /> },
];

export const GeneralTabs = ({ clinic }: ClinicTabsProps) => {
  const groupedItems = clinic?.facilities?.map((tab) => ({
    label: tab?.name,
    children: facilites.find((item) => item?.name === tab?.name)?.icon,
  }));

  return (
    <>
      <div className={styles.clinic_wrapper}>
        <div style={{ width: "100%" }}>
          <p className={styles.clinic_item_title}>{clinic?.name}</p>
          <p className={styles.clinic_item_type}>{clinic?.type}</p>
          <div className={styles.clinic_subitem_wrapper}>
            <EnvironmentOutlined style={{ color: "#4B5563" }} />
            <p className={styles.clinic_item_info}>{clinic?.address}</p>
          </div>
          <div className={styles.clinic_subitem_wrapper}>
            <StarFilled style={{ color: "#feb052" }} />{" "}
            <p className={styles.clinic_item_info}>{clinic?.rating}</p>
            <Divider
              type="vertical"
              style={{ borderLeft: "2px solid #E5E7EB" }}
            />
            <p className={styles.clinic_item_info}>
              {clinic?.totalReviews?.toLocaleString()} Reviews
            </p>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <button className={styles.btn_appointment}>Book Appointment</button>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <h1 className={styles.section_title}>
          Spesialis{" "}
          <span style={{ color: "#428283" }}>
            ({clinic?.specialists?.length})
          </span>{" "}
        </h1>
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                dotWidth: 10,
                dotHeight: 10,
                dotActiveWidth: 50,
              },
            },
          }}
        >
          <Carousel
            infinite={clinic?.specialists?.length > 3 ? true : false}
            draggable={clinic?.specialists?.length > 3 ? true : false}
            slidesToShow={3.5}
            slidesToScroll={clinic?.specialists?.length > 3 ? 3.5 : 1}
            className={styles.carousel_specialist}
          >
            {clinic?.specialists?.map((item) => (
              <div key={item?.id}>
                <div style={{ margin: "0 10px" }}>
                  <Card
                    imageSrc={DoctorImage}
                    title={item.name}
                    subtitle={clinic.type}
                    address={clinic.address}
                    rating={item.rating}
                    totalReviews={item.totalReviews}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </ConfigProvider>
      </div>
      <div style={{ marginTop: "100px" }}>
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
      </div>
      <div style={{ marginTop: "100px" }}>
        <h1 className={styles.section_title}>Reviews</h1>
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                dotWidth: 10,
                dotHeight: 10,
                dotActiveWidth: 50,
              },
            },
          }}
        >
          <Carousel
            infinite={clinic?.reviews?.length > 3 ? true : false}
            draggable={clinic?.reviews?.length > 3 ? true : false}
            slidesToShow={3.5}
            slidesToScroll={clinic?.reviews?.length > 3 ? 3.5 : 1}
            className={styles.carousel_specialist}
          >
            {clinic?.reviews?.map((item) => (
              <div key={item?.id}>
                <div style={{ margin: "0 10px" }}>
                  <CardReview
                    title={item.userName}
                    rating={item.rating}
                    comment={item.comment}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </ConfigProvider>
      </div>
    </>
  );
};
