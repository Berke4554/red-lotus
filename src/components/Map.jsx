import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-15.0, -52.0, 0],
        center: [-5, -3],
        scale: 900,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#381d6d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      <Annotation
        subject={[28.97953, 41.015137]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fontSize={20}
          fill="#ffffff"
        >
          {"Istanbul"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
