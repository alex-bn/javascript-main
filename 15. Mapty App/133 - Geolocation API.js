// Geolocation API -> it takes 2 functions, 1st the success one and 2nd the error one:

if (navigator.geolocation)
  // if it exists then do all of this
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // const lat = position.coords.latitude; // or even better, use destructuring and that will create the variable called latitude based on the latitude property of the position object
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`); //// damn!!!!!
    },
    function () {
      alert('Could not get your position');
    }
  );
