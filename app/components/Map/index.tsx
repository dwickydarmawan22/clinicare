"use client";

import { GoogleMap } from "@react-google-maps/api";

const defaultMapContainerStyle = {
  width: "100%",
  height: "30vw",
  borderRadius: "15px",
};

const defaultMapCenter = {
  lat: -6.226363,
  lng: 106.832311,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

export const MapComponent = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      ></GoogleMap>
    </div>
  );
};
