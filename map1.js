// Initialize and add the map
function initMap() {
    // The location to center the map on
    const location = { lat: 40.7128, lng: -74.0060 }; // New York City as an example

    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
    });

    // The marker, positioned at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
