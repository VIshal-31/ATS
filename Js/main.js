

function initMap() {
    const map = new google.maps.Map(document.getElementById('mapsection'), {
        center: { lat: 0, lng: 0 }, // Set your desired map center coordinates
        zoom: 4, // Adjust the zoom level
        disableDefaultUI: true, // Hide map controls
        zoomControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP, // Change map type as needed
        styles: [ // Add custom map styles if desired
            // Your map style goes here
        ],
    });
}

// toggle button
document.addEventListener('DOMContentLoaded', function() {
    const openDrawerButton = document.getElementById('openDrawerButton');
    const closeDrawerButton = document.getElementById('closeDrawerButton');
    const drawer = document.getElementById('drawer');

    openDrawerButton.addEventListener('click', function() {
        drawer.style.right = '0';
        drawer.classList.remove('closed');
    });

    closeDrawerButton.addEventListener('click', function() {
        drawer.style.right = '-300px';
        drawer.classList.add('closed');
    });
});

