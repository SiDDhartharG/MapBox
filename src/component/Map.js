/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../CSS/Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactLogo from '../img/layer-group-solid.svg';
import StreetImg from '../img/street.jpg';
import DarkImg from '../img/dark.jpg';
import LightImg from '../img/light.jpg';
import TerrainImg from '../img/terrain.jpg';
mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY

const Map = () => {
    const [lng, setLng] = useState(5);
    const [lat, setLat] = useState(34);
    const [zoom, setZoom] = useState(1.5);

    //LAYERS
    const [layer, setLayer] = useState('street')
    const d3 = 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
    const dark = 'mapbox://styles/mapbox/dark-v10'
    const light = 'mapbox://styles/mapbox/light-v10'
    const terrain = 'mapbox://styles/mapbox/satellite-v9'
    const street = 'mapbox://styles/mapbox/streets-v11'


    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            // eslint-disable-next-line no-eval
            style: eval(layer),
            attributionControl: false,
            center: [lng, lat],
            zoom: zoom
        });
        console.log(map);

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        map.addControl(new mapboxgl.FullscreenControl())
        map.addControl(new mapboxgl.GeolocateControl())

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        // Clean up on unmount
        return () => map.remove();
    }, [layer]); // eslint-disable-line react-hooks/exhaustive-deps


    return (

        <div>

            <div class="dropdown">
                <button class="dropbtn"><img src={ReactLogo} alt="React Logo" style={{ width: '15px', height: '15px', background: 'white' }} /></button>
                <div class="dropdown-content">
                    <div onClick={() => setLayer('street')}><img src={StreetImg} alt='' style={{ borderRadius: '5px', marginRight: '10px', width: '35px', height: '35px' }} />Street</div>
                    <div onClick={() => setLayer('light')}><img src={LightImg} alt='' style={{ borderRadius: '5px', marginRight: '10px', width: '35px', height: '35px' }} />Light</div>
                    <div onClick={() => setLayer('dark')}><img src={DarkImg} alt='' style={{ borderRadius: '5px', marginRight: '10px', width: '35px', height: '35px' }} />Dark</div>
                    <div onClick={() => setLayer('terrain')}><img src={TerrainImg} alt='' style={{ borderRadius: '5px', marginRight: '10px', width: '35px', height: '35px' }} />Terrain</div>
                </div>
            </div>
            <div class="dButton" onClick={() => setLayer('d3')} >
                3d
            </div>
            <div className='map-container' id='map'></div>

        </div>
    );
};

export default Map;