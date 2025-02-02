import { Hero } from "@/app/components/Hero";
import { Breadcrumb } from "antd";
import Image from "next/image";
import Hospital1 from "../../../public/Hospital_1.jpg";
import Hospital2 from "../../../public/Hospital_2.jpg";
import Hospital3 from "../../../public/Hospital_3.jpg";
import Hospital4 from "../../../public/Hospital_4.jpg";
import styles from "./heroClinics.module.css";

export const HeroClinics = () => {
  return (
    <Hero stylingContainer={{ borderRadius: "0 0 120px 120px" }}>
      <Breadcrumb
        separator="-"
        items={[
          {
            title: "Beranda",
            href: "/",
          },
          {
            title: "Klinik",
          },
          {
            title: "Klinik Mayapada",
          },
        ]}
      />
      <div className={styles.image_wrapper}>
        <Image
          src={Hospital1}
          alt="hospital image 1"
          className={styles.main_image}
        />
        <div className={styles.other_image_wrapper}>
          {[
            Hospital2,
            Hospital3,
            Hospital4,
            Hospital2,
            Hospital3,
            Hospital4,
          ]?.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="hospital image"
              className={styles.other_image_item}
            />
          ))}
        </div>
      </div>
    </Hero>
  );
};
