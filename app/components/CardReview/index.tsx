import { StarFilled, StarOutlined } from "@ant-design/icons";
import styles from "./cardReview.module.css";

export const CardReview = ({
  title,
  comment,
  rating,
}: {
  title?: string;
  rating?: number;
  comment?: string;
}) => {
  const fullStars = Math.floor(rating ?? 0);
  const emptyStars = 5 - fullStars;

  const stars = [
    ...Array(fullStars).fill(<StarFilled style={{ color: "#feb052" }} />),
    ...Array(emptyStars).fill(<StarOutlined />),
  ];
  return (
    <div className={styles.component_wrapper}>
      <div style={{ width: "100%" }}>
        <div
          className={styles.card_item_container}
          style={{ justifyContent: "space-between" }}
        >
          <p className={styles.card_title}>{title}</p>
        </div>
        <div className={styles.card_item_container}>
          {rating && (
            <>
              <p className={styles.card_info} style={{ margin: "10px 10px 10px 0" }}>
                {rating.toLocaleString()}
              </p>
              {stars?.map((star, index) => (
                <div key={index}>{star}</div>
              ))}
            </>
          )}
        </div>
        {comment && (
          <>
            <p className={styles.card_subtitle}>{comment}</p>
          </>
        )}
      </div>
    </div>
  );
};
