import React from 'react';
import {createStore} from 'redux';
import {AsyncStorage} from 'react-native';
import update from "react-addons-update";
import * as firebase from 'firebase';


const initialState = {
  selectedBank: 'Ecobank',
  selectedNetwork: 'MTN',
  phoneNumber: {},
  momoAmount: {},
  checkingChecked: false,
  savingsChecked: false,
  routingNumber: {},
  accountNumber: {},
  cardType: 'Visa',
  cardExpirationDate: '',
  creditCardNumber: '',
  securityCode: '',
  bankIsLinked: false,
  cardIsLinked: false,
  loadingMomoTransact: true,
  momoDetails: {},
  totalMoney: '900',
  passcode: '',
}

const getPasscode = (userAuth) => {
  let code = userAuth;
  AsyncStorage.setItem('user', code);
 
}

const savePasscode = async (userAuth) => {
  if(await AsyncStorage.getItem('user') == null){
  getPasscode(userAuth);
  }
  try {
    let user = await AsyncStorage.getItem('user');
    alert(user);
  }
 catch(error){
    return error;
  }
}


//Reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_NETWORK':
      return update(state, {
          selectedNetwork: {
          $set: action.payload
          }
      });

     case 'CHANGE_BANK':
      return update(state, {
          selectedBank: {
          $set: action.payload
          }
      });
    
    case 'GET_PHONE_NUMBER':
    return update(state, {
        phoneNumber: {
        $set: action.payload
        }
    });

    case 'GET_MOMO_AMOUNT':
    return update(state, {
        momoAmount: {
        $set: action.payload
        }
    });

    case 'SAVINGS_CHECKBOX':
     return update(state, {
       checkingChecked: {
         $set: false
       },

       savingsChecked: {
         $set: true
       }
    });

    case 'CHECKING_CHECKBOX':
     return update(state, {
       savingsChecked: {
         $set: false
       },

       checkingChecked: {
         $set: true
       }
    });

  case 'ROUTING_NUMBER':
    return update(state, {
      routingNumber: {
        $set: action.payload
      }
    });

  case 'ACCOUNT_NUMBER': 
  return update(state, {
    accountNumber: {
      $set: action.payload
    }
  });

  case 'GET_EXPIRATION_DATE':
  return update(state, {
    cardExpirationDate: {
      $set: action.payload
    }
  });

  case 'GET_CARD_TYPE':
  return update(state, {
    cardType: {
      $set: action.payload
    }
  });

  case 'GET_CARD_NUMBER':
  return update(state, {
    creditCardNumber: {
      $set: action.payload
    }
  });

  case 'GET_SECURITY_CODE':
  return update(state, {
    securityCode: {
      $set: action.payload
    }
  });

  case 'WIDTHDRAW_MOMO': 
  firebase.database().ref('momoTransactions/001').set({momoDetails: {
    selectedNetwork: state.selectedNetwork,
    phoneNumber: state.phoneNumber,
    momoAmount: state.momoAmount,
  }})
  .then(()=> console.log("INSERTED MoMo details")).catch((error) => console.log(error))
  return (state);

  case 'NUMERIC_ONE':
  if(state.passcode.length < 6){
  return update(state, {
    passcode: {
      $set: state.passcode + action.payload
    }
  });
  }else {
    return state;
  }

  case 'NUMERIC_TWO':
  if(state.passcode.length < 6){
  return update(state, {
    passcode: {
      $set: state.passcode + action.payload,
    }
  });
  } else {
    return state;
  }

  case 'NUMERIC_THREE':
  if(state.passcode.length < 6){
  return update(state, {
    passcode: {
      $set: state.passcode + action.payload,
    }
  });
  }else {
    return state;
  }

  case 'NUMERIC_FOUR':
  if(state.passcode.length < 6){
  return update(state, {
    passcode: {
      $set: state.passcode + action.payload,
    }
  });
  }else {
    return state;
  }

  case 'NUMERIC_FIVE':
  if(state.passcode.length < 6){
  return update(state, {
    passcode: {
      $set: state.passcode + action.payload,
    }
  });
  }else {
    return state;
  }

  case 'NUMERIC_SIX':
  if(state.passcode.length < 6){
  return update(state, {
    passcode: {
      $set: state.passcode + action.payload,
    }
  });
  }else {
    return state;
  }

  case 'NUMERIC_SEVEN':
  if(state.passcode.length < 6){
  return update(state, {
    passcode: {
      $set: state.passcode + action.payload,
    }
  });
  }else {
    return state;
  }

  case 'NUMERIC_EIGHT':
  if(state.passcode.length < 6){
  return update(state, {
    passcode: {
      $set: state.passcode + action.payload,
    }
  });
  }else {
    return state;
  }

  case 'NUMERIC_NINE':
  if(state.passcode.length < 6){
  return update(state, {
    passcode: {
      $set: state.passcode + action.payload,
    }
  });
  }else{
    return state;
  }

  case 'NUMERIC_ZERO':
  if(state.passcode.length < 6){
  return update(state, {
    passcode: {
      $set: state.passcode + action.payload,
    }
  });
  } else {
    return state;
  }

  case 'BACKSPACE':
  if(state.passcode.length > 0){
    return update(state, {
      passcode: {
        $set: state.passcode.slice(0, -1),
      }
    })
  }else{
    return state;
  }

  case 'ENTER_PRESS':
  savePasscode(state.passcode);
  return state;
  

  default: return state;
  }
}

const store = createStore(reducer);

export default store;