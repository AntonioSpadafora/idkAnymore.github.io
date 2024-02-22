require(["esri/config", "esri/Map", "esri/views/MapView", "esri/widgets/BasemapToggle", "esri/widgets/Sketch", "esri/layers/GraphicsLayer", "esri/widgets/Home"], function ( //Object List
  esriConfig,
  Map,
  MapView,
  BasemapToggle,
  Sketch,
  GraphicsLayer,
  Home
) {
  esriConfig.apiKey = "AAPK7c3ab099ddf04351875579e5d8ef908aq2kscaWBERaIdF5X3s-rpiLhV9tVOpZ1XvJOz7zCsHIvM2es0lm-in3hEPO84GmA"; // API Key
 
  const sketchLayer = new GraphicsLayer();
  const map = new Map({
    basemap: "arcgis/topographic", // basemap styles service
    layers: [sketchLayer]
  });
  const view = new MapView({
    map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv" // Div element
  });
  const toggle = new BasemapToggle({
    view: view,
    nextBaseMap: "hybrid" // Alternate Map
  });
  view.ui.add(toggle, "bottom-right") 
  const sketch = new Sketch({
    view: view,
    layer: sketchLayer
  });
   view.ui.add(sketch, "top-right")
  const homtBtn = new Home({ // Home button
    view: view
  });
  view.ui.add(homtBtn, "top-left");
});
