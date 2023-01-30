import counterReducer from "./counterReducer"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    ChangeNumber: counterReducer,
    // you can simply add as much reducer as you want in here
    // and then rootReducer to the store which containes all reducers

})


export default rootReducer;

