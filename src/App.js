import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import Map from './component/Map';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkZGhhcnRoLTEiLCJhIjoiY2tvMmdsZDBzMDFxODJvbXVuNTVpeHNjZiJ9.Hgm2J4nq_2Te8jkCYQlRNA';

function App() {

  return (
    <Map />
  );
}

export default App;
