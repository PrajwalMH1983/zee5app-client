//by default when you will provide the path of reducers
// in imp statement then it will refer the index.js internally

import { combineReducers } from "redux";
import auth from "../../app/auth/reducers/authReducer";
export default combineReducers({
  auth,
});

//combineReducers : function from redux
//export : Is as good as public in nature
//default : by default it will be exported with the same name
