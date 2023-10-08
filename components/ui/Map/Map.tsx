"use client";
import React from "react";
import LeafletMap from "./LeafletMap";
import { IsClientCtxProvider } from "../IsClientCtxProvider/IsClientCtx";

const MapComponent = () => {
  return (
    <IsClientCtxProvider>
      <LeafletMap />
    </IsClientCtxProvider>
  );
};

export default MapComponent;
