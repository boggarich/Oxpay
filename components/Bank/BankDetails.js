import React from 'react';
import {View, Text } from 'react-native';
import {connect} from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { List, CheckBox, ListItem, Container, Content, Card, CardItem, Icon, Col, Row, Grid, Picker, Item, InputGroup, Input, Button } from 'native-base';
import BankTransactConfirm from './BankTransactConfirm';


const BankDetails = (props) => {
  if (props.bankIsLinked == false){
    return (
      <View style={{ flex: 1 }}>
            <Container style={{ flex: 1 }}>
                <Content  style={{ flex: 1 }}>
                    <Card>
                        <CardItem header>                        
                            <Text>Select a Bank</Text>
                        </CardItem>

                        <CardItem style={{justifyContent: 'center'}}>                        
                          <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={props.selectedBank}
                                onValueChange={props.onSelectedBank.bind(this)}>
                                <Item label="Ecobank" value="Ecobank" />
                                <Item label="GCB" value="GCB" />
                                <Item label="Cal Bank" value="CalBank" />
                          </Picker>

                        </CardItem>
                   </Card>

                    <Card>
                        <CardItem header>                        
                            <Text style={{fontWeight: 'bold'}}>Routing Number</Text>
                        </CardItem>

                        <CardItem style={{alignContent: 'center'}}>                        
                          <Item regular>
                            <Input placeholder='Routing number'
                            defaultValue = {props.routingNumber}
                            onChangeText = {props.getRoutingNumber.bind(this)}
                            />
                          </Item>
                        </CardItem>
                   </Card>

                   <Card>
                        <CardItem header>                        
                            <Text style={{fontWeight: 'bold'}}>Account Number</Text>
                        </CardItem>

                        <CardItem style={{alignContent: 'center'}}>                        
                          <Item regular>
                            <Input placeholder='Account Number'
                              defaultValue = {props.accountNumber}
                              onChangeText = {props.getAccountNumber}
                            />
                          </Item>
                        </CardItem>
                   </Card>

                   <View>
                          <List>
                            <ListItem>
                                <CheckBox onPress = {props.getCheckingChecked.bind(this)} checked={props.checkingChecked} />
                                <Text style={{paddingHorizontal: 5}}>Checking</Text>
                            </ListItem>
                            <ListItem>
                                <CheckBox onPress = {props.getSavingsChecked.bind(this)} checked={props.savingsChecked} />
                                <Text style={{paddingHorizontal: 5}}>Savings</Text>
                            </ListItem>
                          </List>
                   </View>

                  <View style={{justifyContent: 'center', alignItems: "center", flexDirection:'row'}}>
                   <Text  style={{marginVertical: 30, padding: 10, borderRadius: 10, backgroundColor: '#2b1e34', color: '#fff', marginHorizontal: 10}} onPress = {()=>props.navigation.push('BankTransactConfirm')}>Link Bank</Text>

                  </View>
                </Content>
            </Container>
      </View>
    );
  } else{
    return (
      <View style={{ flex: 1 }}>
            <Container style={{ flex: 1 }}>
                <Content  style={{ flex: 1 }}>
                    <Card>
                        <CardItem header>                        
                            <Text>Credit Card Details</Text>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
      </View>
    );
  }
}



BankDetails.navigationOptions = ({ navigation }) => {
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
   selectedBank: state.selectedBank,
   checkingChecked: state.checkingChecked,
   savingsChecked: state.savingsChecked,
   routingNumber: state.routingNumber,
   accountNumber: state.accountNumber,
   bankIsLinked: state.bankIsLinked,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectedBank: (value: string)=> {
      const action = {
        type: 'CHANGE_BANK',
        payload: value
      }
      dispatch(action);
    },

    getSavingsChecked: () => {
      const action = {
        type: 'SAVINGS_CHECKBOX',
      }
      dispatch(action);
    },

    getCheckingChecked: () => {
      const action = {
        type: 'CHECKING_CHECKBOX',
      }
      dispatch(action);
    },

    getRoutingNumber: (routingnumber: string) => {
      const action = {
        type: 'ROUTING_NUMBER',
        payload: routingnumber,
      }
      dispatch(action);
    },

    getAccountNumber: (accountnumber: string) => {
      const action = {
        type: 'ACCOUNT_NUMBER',
        payload: accountnumber,
      }
      dispatch(action);
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankDetails);