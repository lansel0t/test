import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import { reducer as formReducer} from 'redux-form';



let reducers = combineReducers({
    auth: authReducer,
    allusers: usersReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;  

export default store;
