 
        // Check if the Geolocation API is available in the browser
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                // Get the user's latitude and longitude
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Create a map using the Google Maps API
                const map = new google.maps.Map(document.getElementById('map'), {
                    center: { lat: latitude, lng: longitude },
                    zoom: 17
                });

                // Create a marker at the user's current location
                const marker = new google.maps.Marker({
                    position: { lat: latitude, lng: longitude },
                    map: map,
                    title: 'Your Location'
                });
            });
        } else {
            // Handle the case when geolocation is not available
            alert("Geolocation is not supported in this browser.");
        }
    