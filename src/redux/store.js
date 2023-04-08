import { combineReducers, legacy_createStore } from "redux";
import { Authreducer } from "./auth/reducer";
import { crud_reducer } from "./crud/reducer";

const rootReducer = combineReducers({
    // blogs : crud_reducer,
    user : Authreducer,
})

export const store = legacy_createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
