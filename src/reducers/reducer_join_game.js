export default function(state=[], action) {
  switch (action.type) {
    case 'JOIN_GAME':
      return action.payload;
    default:
      return state;
  }
}
