import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:8077'

const responseBody = res => res.body;

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),

  post: url =>
  	superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Players = {
	all: page =>
		requests.get(`/users`).then(responseBody),

	new: page => 
		requests.post(`/users`).then(responseBody)
};

const Games = {
  all: page =>
    requests.get(`/games?limit=10`)
};

export default {
  Games,
  Players
};