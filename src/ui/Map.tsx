import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import mapPin from "/images/pin.svg";

import "leaflet/dist/leaflet.css";

function Map() {
  const position: [number, number] = [50.284905, 19.579508];

  const legalIcon = new Icon({
    iconUrl: mapPin,
    iconSize: [40, 40],
  });

  return (
    <MapContainer
      center={[50.280704, 19.578284]}
      zoom={13}
      scrollWheelZoom
      style={{ height: "400px", width: "100%" }}
      className="z-1 rounded-2xl"
    >
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={legalIcon} />
    </MapContainer>
  );
}

export default Map;
