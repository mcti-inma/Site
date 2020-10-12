import "leaflet/dist/leaflet.css"
import $L from "leaflet";
 
const createMap = (divId, options) => {
  let map = $L.map(divId, options);
  //this.map = map;
  return map;
};

const createTileLayer = async (map, url, options) => {
  let tileLayer = await $L.tileLayer(url, options);
  tileLayer.addTo(map);
  return tileLayer;
};
 
export default { createMap, createTileLayer, $L };