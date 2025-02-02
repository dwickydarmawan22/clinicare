import { RightOutlined, StarFilled } from "@ant-design/icons";
import { Avatar, Rate } from "antd";
import Image from "next/image";
import HeroHomepageImage from "../../../public/Hero_Homepage.jpg";
import styles from "./heroHomepage.module.css";
import Avatar1 from "../../../public/avatar_1.jpg";
import Avatar2 from "../../../public/avatar_2.jpg";
import Avatar3 from "../../../public/avatar_3.jpg";
import Avatar4 from "../../../public/avatar_4.jpg";
import { Hero } from "@/app/components/Hero";

export const HeroHomepage = () => {
  return (
    <Hero>
      <div className={styles.content_grid}>
        <div>
          <h1 className={styles.hero_title}>
            <span>Partner Kepercayaan</span> Anda dalam Mencari Klinik Kesehatan
          </h1>
          <p className={styles.hero_subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            lacus dui. Integer imperdiet sem ac nisi ultrices semper non ac
            dolor. Aliquam id porttitor dui, eget congue eros. Duis iaculis
            purus eu quam mollis, ut iaculis quam cursus. Proin semper odio eu
            mauris rhoncus, et finibus diam pellentesque.
          </p>
          <button className={styles.btn_appointment}>
            Book an Appointment <RightOutlined />
          </button>
        </div>
        <div>
          <div className={styles.info_benefits}>
            <div
              style={{
                backgroundColor: "#EFF9FF",
                borderRadius: "4px",
                width: "28px",
                height: "28px",
              }}
            >
              <StarFilled className={styles.info_icon} />
            </div>
            <p className={styles.info_text}>Mudah untuk buat janji</p>
          </div>
          <div className={styles.info_customers}>
            <div className={styles.info_content_wrapper}>
              <div>
                <Avatar
                  style={{ width: "40px", height: "40px" }}
                  src={Avatar1.src}
                  alt="avatar 1"
                />
                <Avatar
                  style={{
                    marginLeft: "-10px",
                    width: "40px",
                    height: "40px",
                  }}
                  src={Avatar2.src}
                  alt="avatar 2"
                />
                <Avatar
                  style={{
                    marginLeft: "-10px",
                    width: "40px",
                    height: "40px",
                  }}
                  src={Avatar3.src}
                  alt="avatar 3"
                />
                <Avatar
                  style={{
                    marginLeft: "-10px",
                    width: "40px",
                    height: "40px",
                  }}
                  src={Avatar4.src}
                  alt="avatar 4"
                />
              </div>
              <p
                className={styles.info_customer_text}
                style={{ color: "#3D3D3D", fontSize: "24px" }}
              >
                1400 <span style={{ color: "#357a7b" }}>+</span>
              </p>
            </div>
            <p
              className={styles.info_customer_text}
              style={{ margin: "10px 0" }}
            >
              Happy Customers
            </p>
            <div className={styles.info_content_wrapper}>
              <Rate allowHalf defaultValue={4.5} disabled />
              <p
                className={styles.info_customer_text}
                style={{ color: "#3D3D3D" }}
              >
                (4.7 Stars)
              </p>
            </div>
          </div>
          <Image
            src={HeroHomepageImage}
            alt="hero homepage"
            style={{
              zIndex: "1",
              position: "relative",
              borderRadius: "24px",
            }}
          />
        </div>
      </div>
    </Hero>
  );
};
