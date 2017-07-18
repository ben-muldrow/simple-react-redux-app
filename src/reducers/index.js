import { combineReducers } from 'redux';
import GamesReducer from './reducer_games';
import JoinGameReducer from './reducer_join_game';

const PickupApp = combineReducers({
  games: GamesReducer,
  joinGame: JoinGameReducer
});

export default PickupApp;
