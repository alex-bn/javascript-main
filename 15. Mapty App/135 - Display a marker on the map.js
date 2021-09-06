if (navigator.geolocation)
  // if it exists then do all of this
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // const lat = position.coords.latitude; // or even better, use destructuring and that will create the variable called latitude based on the latitude property of the position object
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`); //// damn!!!!!

      const coords = [latitude, longitude];

      // FOM THE LEAFLET LIBRARY -> in case the if condition is true, the following should happen:
      const map = L.map('map').setView(coords, 13);
      // console.log(map);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

      // FOM THE LEAFLET LIBRARY, the on() method is very similar to the addEventListener() method
      map.on('click', function (mapEvent) {
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup', // takes the name of a css class
            })
          )
          .setPopupContent('workout') // Popup methods inherited from Layer
          .openPopup();
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
