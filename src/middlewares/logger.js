export const logger = store => next => action => {
  console.log("logger -> dispatching", action);
  let result = next(action);
  console.log("logger -> next state", store.getState());
  return result;
};
