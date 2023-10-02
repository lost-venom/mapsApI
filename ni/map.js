// map.js
mapboxgl.accessToken = 'pk.eyJ1IjoibWp2YWxlbnp1ZWxhIiwiYSI6ImNrb2Fmdm9zZDBpM28ybnFtYTQ2Z2MwMnYifQ.ZY3jTw0-6tjUSOOJXJHsdw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-75.5917, 6.2442],
    zoom: 9
});

// Agregar el geocodificador
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        zoom:14,
        pleaceholder: 'Ingresa un lugar a buscar',
        mapboxgl: mapboxgl

        
    })
);

// Configurar el geolocalizador
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

// Configurar el control de direcciones
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        language: 'es',
        unit: 'metric',
    }),
    'top-left'
);


// Agregar barra de navegación
document.getElementById('listing-group').addEventListener('change', function (e) {
    const handler = e.target.id;
    if (e.target.checked) {
        map[handler].enable();
    } else {
        map[handler].disable();
    }
});
