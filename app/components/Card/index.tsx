import {
  EnvironmentOutlined,
  HeartOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Divider } from "antd";
import Image, { StaticImageData } from "next/image";
import styles from "./card.module.css";

export const Card = ({
  title,
  imageSrc,
  subtitle,
  address,
  totalReviews,
  rating,
}: {
  title?: string;
  imageSrc: StaticImageData;
  subtitle?: string;
  address?: string;
  totalReviews?: number;
  rating?: number;
}) => {
  return (
    <div className={styles.component_wrapper}>
      <div>
        <Image
          src={imageSrc}
          alt="card-image"
          className={styles.image_container}
        />
      </div>
      <div style={{ width: "100%" }}>
        <div
          className={styles.card_item_container}
          style={{ justifyContent: "space-between" }}
        >
          <p className={styles.card_title}>{title}</p>
          <HeartOutlined style={{ cursor: "pointer" }} />
        </div>
        <Divider
          style={{
            borderTop: "1px solid #E5E7EB",
            margin: "8px 0",
          }}
        />
        <p className={styles.card_subtitle}>{subtitle}</p>
        {address && (
          <div className={styles.card_item_container}>
            <EnvironmentOutlined style={{ color: "#4B5563" }} />
            <p className={styles.card_info}>{address}</p>
          </div>
        )}
        <div className={styles.card_item_container}>
          {rating && (
            <>
              <StarFilled style={{ color: "#feb052" }} />{" "}
              <p className={styles.card_info}>{rating}</p>
            </>
          )}
          {totalReviews && (
            <>
              <Divider
                type="vertical"
                style={{ borderLeft: "2px solid #E5E7EB" }}
              />
              <p className={styles.card_info}>
                {totalReviews?.toLocaleString()} Reviews
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
