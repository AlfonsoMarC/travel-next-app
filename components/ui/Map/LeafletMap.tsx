"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useIsClient } from "../IsClientCtxProvider/IsClientCtx";

const LeafletMap = () => {
  const isClient = useIsClient();
  if (!isClient) {
    return null;
  }

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/*  <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default LeafletMap;
