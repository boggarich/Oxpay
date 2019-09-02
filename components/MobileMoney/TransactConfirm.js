import React from 'react';
import {View, Text, ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { Container, Content, Card, CardItem, Icon, Col, Row, Spinner, Grid, Picker, Item, InputGroup, Input, Button } from 'native-base';

class TransactConfirm extends React.Component {
  constructor(props){
    super(props);
    props.widthdrawMomo();
  }
    render(){
      return (
        <View style={{ flex: 1 }}>
              <Container style={{ flex: 1 }}>
                  <Content  style={{ flex: 1, justifyContent: "center", alignContent: 'center', alignItems: 'center'}}>  
                    <ActivityIndicator size="large" color="#352540" />
                  </Content>
              </Container>
        </View>
      );
    }
}
const mapStateToProps = (state) => {
  return {
    loadingMomoTransact: state.loadingMomoTransact,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    widthdrawMomo: ()=> {
      const action = {
        type: 'WIDTHDRAW_MOMO',
      }
      dispatch(action);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactConfirm);