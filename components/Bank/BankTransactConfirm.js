import React from 'react';
import {View, Text } from 'react-native';
import {connect} from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { Container, Content, Card, CardItem, Icon, Col, Row, Spinner, Grid, Picker, Item, InputGroup, Input, Button } from 'native-base';

const BankTransactConfirm = (props) => {
    return (
      <View style={{ flex: 1 }}>
            <Container style={{ flex: 1 }}>
                <Content  style={{ flex: 1, justifyContent: "center", alignContent: 'center', alignItems: 'center'}}>  
                  <Icon name='ios-checkmark-circle' style={{color:'#00C497'}}/>
                </Content>
            </Container>
      </View>
    );
}

const mapStateToProps = (state) => {
  return {
  selectedNetwork: state.selectedNetwork
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  onSelectedNetwork: (value: string)=> {
    const action = {
      type: 'CHANGE_NETWORK',
      payload: value
    }
    dispatch(action);
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankTransactConfirm);