import { Carousel, ConfigProvider } from "antd";
import styles from "./tabsClinics.module.css";
import DoctorImage from "../../../public/doctor_1.jpg";
import { Card } from "@/app/components/Card";
import { GeneralTabsProps } from "@/app/types/clinic";

export const SpecialistTabs = ({ clinic }: GeneralTabsProps) => {
  return (
    <>
    <h1 className={styles.section_title}>Spesialis</h1>
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
    </>
  );
};
