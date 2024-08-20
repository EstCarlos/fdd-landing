import { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    // Cargar los estilos de Leaflet
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
    document.head.appendChild(link);

    // Cargar el script de Leaflet
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Crear el mapa una vez que el script se haya cargado
      const map = L.map("map").setView([18.4855, -69.9398], 13); // Coordenadas y zoom

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([18.4855, -69.9398])
        .addTo(map)
        .bindPopup("Ubicación de prueba.")
        .openPopup();
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComponent;
