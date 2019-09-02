import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

const Paypal = () => {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Paypal page coming soon!</Text>
    </View>
  );
}

Paypal.navigationOptions = ({ navigation }) => {
  return {
      title: navigation.getParam('headerTitle'),
      headerStyle: {
      backgroundColor: navigation.getParam('headerColor'),
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      color: '#fff',
      fontWeight: 'bold',
      },
  }
}

const mapStateToProps = (state) => {
  return {
  stateofapp: state
  }
}


export default connect(mapStateToProps)(Paypal);