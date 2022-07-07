import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Maps = () => {
  const center = [25.762907223854455, 89.01067721159593];
  const markerIcon = new L.Icon({
    iconUrl: require("../../images/marker.png"),
    iconSize: [35, 35],
    iconAnchor: [17, 46],
    popupAnchor: [3, -46],
  });
  return (
    <div>
      <MapContainer
        className="bg-primary"
        center={center}
        zoom={11}
        style={{ width: "100%", height: "200px" }}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <TileLayer url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=yQEKVyHONQ2bLjl1dP0i" />

        <Marker position={center} icon={markerIcon}>
          <Popup>
            Taragonj-5420, Rangpur, Bangladesh (shamimislamonline@gmail.com)
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
