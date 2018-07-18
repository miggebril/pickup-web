const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    action.payload.then(
      res => {
        action.payload = res;
        store.dispatch(action);
      },
      error => {
        action.error = true;
        action.payload = error.response.body;
        store.dispatch(action);
      }
    );
  }

  return;
};

function isPromise(data) {
  return data && typeof data.then === 'function';
}

export {
  promiseMiddleware
};