const initialStateCars = [
  { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
  { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
  { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
  { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
];

export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_CARS":
      return action.payload;
    case "CAR_CREATED":
      return [ action.payload ];
    default:
      return state;
  }
}
