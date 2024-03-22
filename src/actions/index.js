// TODO: add and export your own actions
// export function fetchCars() {
//   return {
//     type: FETCH_CARS,
//     payload: initialStateCars
//   };
// }

export function fetchCars() {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/my-awesome-garage/cars')
    .then(response => response.json());

  return {
        type: 'FETCH_CARS',
        payload: promise
      };
}

export function createCar(body, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/my-awesome-garage/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);
  return {
    type: 'CAR_CREATED',
    payload: request
  };
}
