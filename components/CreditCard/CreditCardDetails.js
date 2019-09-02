import React from 'react';
import {View, Text } from 'react-native';
import {connect} from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { Container, Content, Card, CardItem, Icon, Col, Row, Grid, Picker, Item, InputGroup, Input, Button } from 'native-base';
import CardTransactConfirm from './CardTransactConfirm'

const CreditCardDetails = (props) => {
  if(props.cardIsLinked == false) {
    return (
      <View style={{ flex: 1 }}>
              <Container style={{ flex: 1 }}>
                  <Content  style={{ flex: 1 }}>
                      <Card>
                          <CardItem header>                        
                              <Text>Card Type</Text>
                          </CardItem>

                          <CardItem style={{justifyContent: 'center'}}>                        
                            <Picker
                                  iosHeader="Select one"
                                  mode="dropdown"
                                  selectedValue={props.cardType}
                                  onValueChange={props.getCardType.bind(this)}>
                                  <Item label="Visa" value="Visa" />
                                  <Item label="MasterCard" value="MasterCard" />
                            </Picker>
                          </CardItem>
                    </Card>

                      <Card>
                          <CardItem header>                        
                              <Text style={{fontWeight: 'bold'}}>Debit or credit card number</Text>
                          </CardItem>

                          <CardItem style={{justifyContent: 'center'}}>                        
                            <Item regular>
                              <Input placeholder='xxxx - xxxx- xxxx - xxxx'
                              defaultValue = {props.creditCardNumber}
                              onChangeText = {props.getCreditCardNumber}
                              />
                            </Item>
                          </CardItem>
                    </Card>

                    <Card>
                          <CardItem header>                        
                              <Text style={{fontWeight: 'bold'}}>Expiration date</Text>
                          </CardItem>
                        
                          <CardItem style={{justifyContent: 'center'}}>                        
                            <Item regular>
                              <Input placeholder='mm/yy'
                              defaultValue = {props.cardExpirationDate}                                                    onChangeText = {props.setExpirationDate}
                              maxLength = {5}
                              />
                            </Item>
                          </CardItem>
                    </Card>

                    <Card>
                          <CardItem header>                        
                              <Text style={{fontWeight: 'bold'}}>Security Code</Text>
                          </CardItem>
                        
                          <CardItem style={{justifyContent: 'center'}}>                        
                            <Item regular>
                              <Input placeholder='Enter security code'
                              defaultValue = {props.securityCode}
                              maxLength = {3}
                              onChangeText = {props.getSecurityCode}
                              />
                            </Item>
                          </CardItem>
                    </Card>

                    <View style={{justifyContent: 'center', alignItems: "center", flexDirection:'row'}}>
                    <Text style={{marginVertical: 30, padding: 10, borderRadius: 10, backgroundColor: '#2b1e34', color: '#fff', marginHorizontal: 10}} onPress = {()=>props.navigation.push('CardTransactConfirm')}>Link Card</Text>
                    </View>
                  </Content>
              </Container>
        </View>
    );
  }else {
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

CreditCardDetails.navigationOptions = ({ navigation }) => {
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
    cardType: state.cardType,
    cardExpirationDate: state.cardExpirationDate,
    creditCardNumber: state.creditCardNumber,
    securityCode: state.securityCode,
    cardIsLinked: state.cardIsLinked,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCardType: (value: string) => {
      const action = {
        type: 'GET_CARD_TYPE',
        payload: value,
      }
      dispatch(action);
    },

    setExpirationDate: (date: string) => {
        let dateTemp = date;
        if (dateTemp[0] !== '1' && dateTemp[0] !== '0') {
          dateTemp = '';
        }
        if (dateTemp.length === 2) {
          if (parseInt(dateTemp.substring(0, 2)) > 12) {
            dateTemp = dateTemp[0];
          } else if (parseInt(dateTemp.substring(0,2)) > 0 && parseInt(dateTemp.substring(0,2)) <= 12) {
            dateTemp += '/';
          } else {
            dateTemp = dateTemp[0];
          }
        }

        const action = {
          type: 'GET_EXPIRATION_DATE',
          payload: dateTemp,
        }
        dispatch(action);
    },

    getCreditCardNumber: (cardnumber) => {
      const action = {
        type: 'GET_CARD_NUMBER',
        payload: cardnumber,
      }
      dispatch(action);
    },

    getSecurityCode: (securitycode: string) => {
      const action = {
        type: 'GET_SECURITY_CODE',
        payload: securitycode,
      }
      dispatch(action);
    },

    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardDetails);