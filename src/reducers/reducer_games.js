export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_GAME':
      console.log("heard add game dispatch");
      console.log([...state, action.payload]);
      return [...state, action.payload];
    case 'REMOVE_GAME':
      return state.filter(game => game !== action.payload);
    default:
      console.log("default state");
      return state;
  }
}
