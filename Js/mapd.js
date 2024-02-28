
         
        // Initialize the map
        function initMap() {

            
            // Define the locations (from and to)
            var fromLocation = new google.maps.LatLng(18.449316, 73.825538); // Replace with your from location
            var toLocation = new google.maps.LatLng(18.429316, 73.825538); // Replace with your to location

            // Create a map using the Google Maps API
            var map = new google.maps.Map(document.getElementById('map'), {
                center: fromLocation,
                zoom: 10
            });

            // Create directions service
            var directionsService = new google.maps.DirectionsService();

            // Create directions display
            var directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(map);

            // Create request object
            var request = {
                origin: fromLocation,
                destination: toLocation,
                travelMode: 'DRIVING' // You can change the mode (e.g., WALKING, BICYCLING)
            };

            // Calculate directions and display the route
            directionsService.route(request, function(response, status) {
                if (status == 'OK') {
                    directionsDisplay.setDirections(response);
                }   
            });
        }

       
    

   