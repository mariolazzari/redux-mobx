import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  compose,
  createStore
} from "redux";

const makeLouder = string => string.toUpperCase();
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

// combine all three fxs
const combined = compose(makeLouder, repeatThreeTimes, embolden);

// create store
const calculatorReducer = (state = { value: 1 }, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, value: state.value + action.payload.amount };

    default:
      return state;
  }
};

// combine reducers
const reducer = combineReducers({ calculator: calculatorReducer });

// create store
const store = createStore(reducer);
console.log("store keys:", Object.keys(store));
//  get state
console.log("getState:", store.getState());
// dispatch action
const first = store.getState();
store.dispatch({ type: "ADD", payload: { amount: 2 }, meta: {} });
const second = store.getState();
console.log("first state", first);
console.log("second state", second);

// subscribe
const unsubscribe = store.subscribe(() =>
  console.log("Store changed:", store.getState())
);
store.dispatch({ type: "ADD", payload: { amount: 2 }, meta: {} });
unsubscribe();
store.dispatch({ type: "ADD", payload: { amount: 2 }, meta: {} });

// bind action
const addAction = amount => ({ type: "ADD", payload: { amount } });
store.dispatch(addAction(1000));
console.log("Add action done:", store.getState());
const dispatchAdd = bindActionCreators(addAction, store.dispatch);
dispatchAdd(1000);
console.log("dispatchAdd done:", store.getState());

// apply middleware
const logger = ({ getState }) => {
  return next => action => {
    console.log("MIDDLEWARE", getState(), action);
    const value = next(action);
    return value;
  };
};

const secondStore = createStore(reducer, {}, applyMiddleware(logger));
console.log(secondStore.getState());

// exports
export { combined };
