import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import imagery from "./mapStyles/esriImagery.json";

const Map = () => {
    const [viewport, setViewport] = useState({
        height: "100vh",
        width: "100vw",
        latitude: 47.4675,
        longitude: -122.1664,
        zoom: 8,
    });

    return (
        <div
            className="map-container"
            style={{ height: "calc(100% - 100px)", width: "100%" }}
        >
            <ReactMapGL
                {...viewport}
                mapStyle={imagery}
                onViewportChange={setViewport}
            />
        </div>
    );
};

export default Map;
