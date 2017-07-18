export function joinGame(game) {
  return {
    type: 'JOIN_GAME',
    payload: game
  };
}

export function killGame(game) {
  return {
    type: 'REMOVE_GAME',
    payload: game
  }
}

export function addGame(game) {
  return {
    type: 'ADD_GAME',
    payload: game
  }
}
