import {createStore} from "redux";

const initState={
  toggle:false
}

function configureStore (){
  return createStore();
}

export default configureStore;