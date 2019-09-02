import React from 'react';
import store from './store/createStore';
import {App} from './components/main';
import {Provider} from 'react-redux';
import * as firebase from 'firebase';

export default class Root extends React.Component{
  componentDidMount(){
    var firebaseConfig = {
    apiKey: "AIzaSyBK5WJmerTPREPBW_WSZ-_wlfbbewGT5MI",
    authDomain: "oxpay-efc16.firebaseapp.com",
    databaseURL: "https://oxpay-efc16.firebaseio.com",
    projectId: "oxpay-efc16",
    storageBucket: "",
    messagingSenderId: "243168624089",
    appId: "1:243168624089:web:880a5239df95c846"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
  }
}

	renderApp(){
		return (
      <Provider store = {store}>
		  	<App/>
      </Provider>
		);
	}

	render(){
		return this.renderApp();
	}
}