import Image from "next/image";
import LogoClinicare from "../../../public/Logo_Clinicare.svg";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.component_wrapper}>
      <div className={styles.container}>
        <Image src={LogoClinicare} alt="logo clinicare" />
        <div className={styles.menu_container}>
          <div>Beranda</div>
          <div>Layanan</div>
          <div>Cari Klinik</div>
          <div>Tentang Kami</div>
          <div>Blog</div>
          <div>Hubungi Kami</div>
        </div>
        <div style={{ position: "relative" }}>
          <Avatar size={50} icon={<UserOutlined />} className={styles.avatar} />
          <div className={styles.ellipse} />
        </div>
      </div>
    </div>
  );
};
