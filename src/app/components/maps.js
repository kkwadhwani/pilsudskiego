"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";

export default function Maps() {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS_API,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");
      const position = {
        lat: 51.10019453620514,
        lng: 17.032557017625493,
      };

      //Map options
      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: "My_MAP_ID",
      };

      const map = new Map(mapRef.current, mapOptions);
      const marker = new Marker({
        map: map,
        position: position,
      });
    };
    initMap();
  }, []);
  return <div style={{ height: "100%", width: "100%" }} ref={mapRef} />;
}
