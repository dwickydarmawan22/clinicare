import styles from "./categoryClinics.module.css";
import HospitalIcon from "../../../public/hospital.svg";
import EyeIcon from "../../../public/Eye.svg";
import EarIcon from "../../../public/Ear.svg";
import PhysioIcon from "../../../public/Physiotherapist.svg";
import TeethIcon from "../../../public/Teeth.svg";
import Image from "next/image";

const categories = [
  { name: "Umum", imageSrc: HospitalIcon },
  { name: "Mata", imageSrc: EyeIcon },
  { name: "Gigi", imageSrc: TeethIcon },
  { name: "Fisioterapi", imageSrc: PhysioIcon },
  { name: "THT", imageSrc: EarIcon },
];

export const CategoryClinics = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.section_title}>
        Kategori <span>Klinik</span>
      </h1>
      <div className={styles.category_wrapper}>
        {categories?.map((category) => (
          <div key={category.name} className={styles.category_item}>
            <div className={styles.image_wrapper}>
              <div className={styles.image_items}>
                <Image src={category.imageSrc} alt={category.name} />
              </div>
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
