import { ClinicTabsProps } from "@/app/types/clinic";
import { Carousel, ConfigProvider } from "antd";
import styles from "./tabsClinics.module.css";
import { CardReview } from "@/app/components/CardReview";

export const ReviewsTabs = ({ clinic }: ClinicTabsProps) => {
  return (
    <>
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
    </>
  );
};
