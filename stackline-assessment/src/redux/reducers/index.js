import {combineReducers} from "redux"
import bulletReducer from "./bulletReducer"



 const allReducers = combineReducers({
  nitrobullet: bulletReducer
})

export default allReducers;
