import { ConfigProvider, Tabs, TabsProps } from "antd";
import { GeneralTabs } from "./generalTabs";
import { SpecialistTabs } from "./specialistTabs";
import { FacilityTabs } from "./facilityTabs";
import { ReviewsTabs } from "./reviewsTabs";
import { LocationTabs } from "./locationTabs";

const dataClinic = {
  id: "1",
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
};

const tabs = ["Info Umum", "Spesialis", "Fasilitas", "Review", "Lokasi"];
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Info Umum",
    children: <GeneralTabs clinic={dataClinic} />,
  },
  {
    key: "2",
    label: "Spesialis",
    children: <SpecialistTabs clinic={dataClinic} />,
  },
  {
    key: "3",
    label: "Fasilitas",
    children: <FacilityTabs clinic={dataClinic} />,
  },
  {
    key: "3",
    label: "Review",
    children: <ReviewsTabs clinic={dataClinic} />,
  },
  {
    key: "3",
    label: "Lokasi",
    children: <LocationTabs clinic={dataClinic} />,
  },
];

export const TabsClinics = () => {
  const groupedItems = tabs.map((tab, index) => ({
    key: (index + 1).toString(),
    label: tab,
    children: items
      .filter((item) => item.label === tab)
      .map((item) => item.children),
  }));

  return (
    <div style={{ margin: "-250px 0 100px" }}>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "#357A7B",
              itemActiveColor: "#357A7B",
              itemSelectedColor: "#357A7B",
              itemHoverColor: "#357A7B",
              titleFontSize: 16,
            },
          },
        }}
      >
        <Tabs
          defaultActiveKey="1"
          items={groupedItems}
          tabBarStyle={{ color: "red" }}
        />
      </ConfigProvider>
    </div>
  );
};
