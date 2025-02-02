"use client";
import {
  EnvironmentOutlined,
  SearchOutlined,
  StarFilled,
} from "@ant-design/icons";
import { ConfigProvider, Divider, Input, Select } from "antd";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DefaultSortIcon from "../../../public/arrow-3.svg";
import hospitalImage from "../../../public/Hero_Homepage.jpg";
import styles from "./searchClinic.module.css";

const buttonFilter = [
  { name: "Semua", value: "semua" },
  { name: "Umum", value: "umum" },
  { name: "Mata", value: "mata" },
  { name: "Gigi", value: "gigi" },
  { name: "THT", value: "hth" },
];

const clinics = [
  {
    id: 1,
    name: "Klinik Mayapada 1",
    type: "Klinik Umum",
    address: "Jl. H. R. Rasuna Said, Kav C-17",
    rating: 4.8,
    totalReviews: 1872,
    images: [
      "/images/mayapada/main.jpg",
      "/images/mayapada/room1.jpg",
      "/images/mayapada/operation.jpg",
      "/images/mayapada/exterior.jpg",
    ],
    tabs: ["Info Umum", "Spesialis", "Fasilitas", "Review", "Lokasi"],
    specialists: [
      {
        id: 1,
        name: "Dr. Mawardi",
        specialization: "Cardiologist",
        rating: 4.9,
        totalReviews: 72,
        image: "/images/doctors/mawardi.jpg",
      },
      {
        id: 2,
        name: "Dr. Jessica",
        specialization: "Orthopedi",
        rating: 4.8,
        totalReviews: 127,
        image: "/images/doctors/jessica.jpg",
      },
    ],
    facilities: [
      {
        name: "WiFi",
        icon: "wifi-icon",
      },
      {
        name: "AC",
        icon: "ac-icon",
      },
      {
        name: "Parkir",
        icon: "parking-icon",
      },
      {
        name: "Spa",
        icon: "spa-icon",
      },
    ],
    reviews: [
      {
        id: 1,
        userName: "Emily Anderson",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus dui. Integer imperdiet sem ac ros ultrices tempor tortor.",
        date: "2024-01-15",
      },
      {
        id: 2,
        userName: "Emily Anderson",
        rating: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus dui. Integer imperdiet sem ac ros ultrices tempor tortor.",
        date: "2024-01-10",
      },
    ],
  },
  {
    id: 2,
    name: "Klinik Kemang",
    type: "Klinik Umum",
    address: "Jl. Kemang Raya No.9",
    rating: 4.9,
    totalReviews: 127,
    images: [
      "/images/kemang/main.jpg",
      "/images/kemang/room1.jpg",
      "/images/kemang/operation.jpg",
      "/images/kemang/exterior.jpg",
    ],
    tabs: ["Info Umum", "Spesialis", "Fasilitas", "Review", "Lokasi"],
    specialists: [
      {
        id: 1,
        name: "Dr. Sarah",
        specialization: "General Practitioner",
        rating: 4.9,
        totalReviews: 85,
        image: "/images/doctors/sarah.jpg",
      },
    ],
    facilities: [
      {
        name: "WiFi",
        icon: "wifi-icon",
      },
      {
        name: "AC",
        icon: "ac-icon",
      },
      {
        name: "Parkir",
        icon: "parking-icon",
      },
    ],
    reviews: [
      {
        id: 1,
        userName: "John Doe",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus dui. Integer imperdiet sem ac ros ultrices tempor tortor.",
        date: "2024-01-20",
      },
    ],
  },
  {
    id: 3,
    name: "Klinik Medika",
    type: "Klinik Gigi",
    address: "Jl. Kby Baru No.27",
    rating: 4.7,
    totalReviews: 5223,
    images: [
      "/images/medika/main.jpg",
      "/images/medika/dental-room.jpg",
      "/images/medika/waiting-area.jpg",
      "/images/medika/exterior.jpg",
    ],
    tabs: ["Info Umum", "Spesialis", "Fasilitas", "Review", "Lokasi"],
    specialists: [
      {
        id: 1,
        name: "Dr. Robert",
        specialization: "Dental Surgeon",
        rating: 4.8,
        totalReviews: 156,
        image: "/images/doctors/robert.jpg",
      },
      {
        id: 2,
        name: "Dr. Linda",
        specialization: "Orthodontist",
        rating: 4.9,
        totalReviews: 203,
        image: "/images/doctors/linda.jpg",
      },
      {
        id: 3,
        name: "Dr. Michael",
        specialization: "Periodontist",
        rating: 4.7,
        totalReviews: 178,
        image: "/images/doctors/michael.jpg",
      },
    ],
    facilities: [
      {
        name: "WiFi",
        icon: "wifi-icon",
      },
      {
        name: "AC",
        icon: "ac-icon",
      },
      {
        name: "Parkir",
        icon: "parking-icon",
      },
      {
        name: "X-Ray",
        icon: "xray-icon",
      },
    ],
    reviews: [
      {
        id: 1,
        userName: "Maria Garcia",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus dui. Integer imperdiet sem ac ros ultrices tempor tortor.",
        date: "2024-01-18",
      },
      {
        id: 2,
        userName: "David Wilson",
        rating: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus dui. Integer imperdiet sem ac ros ultrices tempor tortor.",
        date: "2024-01-12",
      },
    ],
  },
  {
    id: 4,
    name: "Klinik Tanah Kusir",
    type: "Klinik THT",
    address: "Jl. Ampera Raya 67",
    rating: 5,
    totalReviews: 405,
    images: [
      "/images/tanahkusir/main.jpg",
      "/images/tanahkusir/examination-room.jpg",
      "/images/tanahkusir/waiting-area.jpg",
      "/images/tanahkusir/exterior.jpg",
    ],
    tabs: ["Info Umum", "Spesialis", "Fasilitas", "Review", "Lokasi"],
    specialists: [
      {
        id: 1,
        name: "Dr. Amanda",
        specialization: "ENT Specialist",
        rating: 5,
        totalReviews: 189,
        image: "/images/doctors/amanda.jpg",
      },
      {
        id: 2,
        name: "Dr. James",
        specialization: "Audiologist",
        rating: 4.9,
        totalReviews: 156,
        image: "/images/doctors/james.jpg",
      },
    ],
    facilities: [
      {
        name: "WiFi",
        icon: "wifi-icon",
      },
      {
        name: "AC",
        icon: "ac-icon",
      },
      {
        name: "Parkir",
        icon: "parking-icon",
      },
      {
        name: "Audiometry",
        icon: "audiometry-icon",
      },
    ],
    reviews: [
      {
        id: 1,
        userName: "Sophie Chen",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus dui. Integer imperdiet sem ac ros ultrices tempor tortor.",
        date: "2024-01-14",
      },
    ],
  },
  {
    id: 5,
    name: "Klinik Ampera",
    type: "Klinik THT",
    address: "Jl. Ampera Raya 67",
    rating: 5,
    totalReviews: 405,
    images: [
      "/images/ampera/main.jpg",
      "/images/ampera/examination-room.jpg",
      "/images/ampera/consultation-room.jpg",
      "/images/ampera/exterior.jpg",
    ],
    tabs: ["Info Umum", "Spesialis", "Fasilitas", "Review", "Lokasi"],
    specialists: [
      {
        id: 1,
        name: "Dr. Kevin",
        specialization: "ENT Surgeon",
        rating: 4.9,
        totalReviews: 167,
        image: "/images/doctors/kevin.jpg",
      },
      {
        id: 2,
        name: "Dr. Rachel",
        specialization: "ENT Specialist",
        rating: 4.8,
        totalReviews: 143,
        image: "/images/doctors/rachel.jpg",
      },
    ],
    facilities: [
      {
        name: "WiFi",
        icon: "wifi-icon",
      },
      {
        name: "AC",
        icon: "ac-icon",
      },
      {
        name: "Parkir",
        icon: "parking-icon",
      },
      {
        name: "Audiometry",
        icon: "audiometry-icon",
      },
      {
        name: "Pharmacy",
        icon: "pharmacy-icon",
      },
    ],
    reviews: [
      {
        id: 1,
        userName: "Thomas Brown",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus dui. Integer imperdiet sem ac ros ultrices tempor tortor.",
        date: "2024-01-16",
      },
      {
        id: 2,
        userName: "Lisa Wang",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus dui. Integer imperdiet sem ac ros ultrices tempor tortor.",
        date: "2024-01-11",
      },
    ],
  },
];

export const SearchClinic = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const FilterCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        FilterCardRef.current &&
        !FilterCardRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Cari Klinik Pilihan Anda</h1>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeBorderColor: "#357A7B",
              hoverBorderColor: "#357A7B",
            },
          },
        }}
      >
        <Input
          className={styles.input_field}
          prefix={<SearchOutlined />}
          placeholder="Cari Klinik"
          allowClear
          onFocus={() => setIsSearchOpen(true)}
        />
      </ConfigProvider>
      {isSearchOpen && (
        <div className={styles.search_wrapper} ref={FilterCardRef}>
          <div className={styles.search_container}>
            <p className={styles.filter_text}>Hasil untuk Klinik</p>
            <div className={styles.button_filter_wrapper}>
              {buttonFilter.map((button) => (
                <div key={button?.name} className={styles.button_filter}>
                  {button?.name}
                </div>
              ))}
            </div>
            <div className={styles.filter_found_wrapper}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#474748",
                }}
              >
                13 Ditemukan
              </p>
              <Select
                defaultValue="default"
                onChange={(e) => console.log(e)}
                suffixIcon={<Image src={DefaultSortIcon} alt="default sort" />}
                options={[
                  { value: "default", label: "Default" },
                  { value: "asc", label: "Ascending" },
                  { value: "desc", label: "Descending" },
                ]}
                variant="borderless"
              />
            </div>
            <div className={styles.clinic_list_wrapper}>
              {clinics.map((clinic) => (
                <div key={clinic.id} className={styles.clinic_item_wrapper}>
                  <Image
                    src={hospitalImage}
                    alt="clinic image"
                    width={100}
                    height={100}
                    style={{ borderRadius: "12px", objectFit: "cover" }}
                  />
                  <div style={{ width: "100%" }}>
                    <p className={styles.clinic_item_title}>{clinic?.name}</p>
                    <Divider
                      style={{
                        borderTop: "1px solid #E5E7EB",
                        margin: "8px 0",
                      }}
                    />
                    <p className={styles.clinic_item_type}>{clinic?.type}</p>
                    <div className={styles.clinic_subitem_wrapper}>
                      <EnvironmentOutlined style={{ color: "#4B5563" }} />
                      <p className={styles.clinic_item_info}>
                        {clinic?.address}
                      </p>
                    </div>
                    <div className={styles.clinic_subitem_wrapper}>
                      <StarFilled style={{ color: "#feb052" }} />{" "}
                      <p className={styles.clinic_item_info}>
                        {clinic?.rating}
                      </p>
                      <Divider
                        type="vertical"
                        style={{ borderLeft: "2px solid #E5E7EB" }}
                      />
                      <p className={styles.clinic_item_info}>
                        {clinic?.totalReviews?.toLocaleString()} Reviews
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
