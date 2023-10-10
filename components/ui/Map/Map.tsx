"use client";
import React, { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import StadiaMaps from "ol/source/StadiaMaps.js";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Circle as CircleStyle, Fill, Icon, Stroke, Style } from "ol/style.js";
import { fromLonLat } from "ol/proj.js";

function MapComponent() {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          // source: new OSM()
          source: new StadiaMaps({
            layer: "stamen_watercolor",
            apiKey: "",
            retina: true
          })
        }),
        new TileLayer({
          source: new StadiaMaps({
            layer: "stamen_terrain_labels",
            apiKey: "",
            retina: true
          })
        })
      ],
      view: new View({
        center: [0, 0],
        // projection: "EPSG:4326",
        zoom: 2
        //extent: [-572513.341856, 5211017.966314, 916327.095083, 6636950.728974],
        // minZoom: 2
        //maxZoom: 13
      })
    });
    const marker = new Feature({
      type: "icon",
      geometry: new Point(fromLonLat([-3.70256, 40.4165]))
    });

    const marker2 = new Feature({
      type: "icon",
      geometry: new Point(fromLonLat([50, 40]))
    });

    /*     const styles = {
      icon: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "./icon.png"
        })
      })
    }; */

    /*     const maerkerSource = new VectorSource({
      features: [marker, marker2]
    }); */

    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker, marker2]
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "public/icon.png"
        })
      })
      /*   style: function (feature) {
        return styles[feature.get("type") as keyof typeof styles];
      } */
    });

    map.addLayer(markerLayer);

    return () => {
      map.dispose();
    };
  }, []);

  return <div id="map" style={{ height: "100%", width: "100%" }}></div>;
}

export default MapComponent;
