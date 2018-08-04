import { GAME_INFO_REQUEST, GAME_INFO_SUCCESS, GAME_INFO_FAIL  } from '../constants/actionTypes';
import { CALL_API } from '../middleware/api';

export const gameActions = {
	getGameInfo,
	getGameFeed
}

function getGameFeed() {
	return {
		[CALL_API] : {
			endpoint : '/games',
			isAuthenticated : true,
			types : [GAME_INFO_REQUEST, GAME_INFO_SUCCESS, GAME_INFO_FAIL]
		}
	}
}

function getGameInfo(gameId) {
	return {
		[CALL_API]: {
			endpoint : '/games/gameId?:gameId=' + gameId,
			isAuthenticated : true,
			types : [GAME_INFO_REQUEST, GAME_INFO_SUCCESS, GAME_INFO_FAIL]
		}
	};
};

