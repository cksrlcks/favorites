import rootReducer from "./reducer/rootReducer";
import { createStore } from "redux";
import { loadState, saveState } from "./reducer/localStorage";
import throttle from "lodash.throttle";
const persitedState = loadState();
const store = createStore(
    rootReducer,
    persitedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
    throttle(() => {
        saveState({
            state: store.getState()
        });
    }, 1000)
);

export default store;
