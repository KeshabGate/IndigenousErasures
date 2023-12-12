document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map and set its view to show all markers
    var map = L.map('map').fitBounds([
        [36.0104, -84.2696], // Oak Ridge, Tennessee
        [-23.135, -134.962], // Gambier Islands
        [-9.6457, 160.1562], // Solomon Islands
        [34.5199, -105.8701], // New Mexico
        [34.0489, -111.0937], // Arizona
        [66.0833, -119.3333]  // Port Radium, Canada
    ]);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Adding new markers
    function addMarker(lat, lon, title, url) {
        L.marker([lat, lon]).addTo(map).on('click', function() {
            window.location.href = url;
        }).bindPopup(title);
    }

    // Update these URLs and titles as needed
    addMarker(36.0104, -84.2696, 'Oak Ridge', 'oak-ridge.html');
    addMarker(-23.135, -134.962, 'Gambier Islands', 'gambier-islands.html');
    addMarker(-9.6457, 160.1562, 'Solomon Islands', 'solomon-islands.html');
    addMarker(34.5199, -105.8701, 'New Mexico', 'new-mexico.html');
    addMarker(34.0489, -111.0937, 'Arizona', 'arizona.html');
    addMarker(66.0833, -119.3333, 'Port Radium', 'port-radium.html');
});
