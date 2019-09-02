import React from 'react';
import { Button, View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import {connect} from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { Container, Content, Card, CardItem, Icon, Col, Row, Grid  } from 'native-base';
import DetailsSelection from './MobileMoney/DetailsSelection';
import TransactConfirm from './MobileMoney/TransactConfirm';
import BankDetails from './Bank/BankDetails';
import BankTransactConfirm from './Bank/BankTransactConfirm';
import CreditCardDetails from './CreditCard/CreditCardDetails';
import CardTransactConfirm from './CreditCard/CardTransactConfirm';
import Paypal from './Paypal/Paypal';
import Splash from './splash';
import TotalMoney from './MobileMoney/TotalMoney';


class Home extends React.Component {
  state = {
    animatePress: new Animated.Value(1),
  }

  static navigationOptions = {
    title: 'Oxpay',
      headerStyle: {
      backgroundColor: '#f4511e',
    },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

animateInMomo(){
  Animated.timing(this.state.animatePress, {
    toValue: 0.9,
    duration: 500
  }).start()
}

animateOutMomo(){
  Animated.timing(this.state.animatePress, {
    toValue: 1,
    duration: 500
  }).start()
}


  render() {
    return (
      <View style={{ flex: 1 }}>
            <Container style={{ flex: 1 }}>
                <Content  style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
                    <Card>
                        <CardItem header style = {{backgroundColor: '#e1e1e1'}}>                        
                            <Text style={{fontWeight: 'bold', opacity: 0.8}}>Money</Text>
                        </CardItem>

                        <CardItem style={{justifyContent: 'center'}}>                        
                          <TotalMoney />
                        </CardItem>

                        <CardItem header>                        
                            <Text style={{opacity: 0.2, fontSize: 12}}>Total money accumulated from Mobile money, Bank, Credit Card transactions.</Text>
                        </CardItem>
                   </Card>

                    <Card>
                        <CardItem header>                        
                            <Text style={{fontWeight: 'bold', fontSize: 20, opacity: 0.8,}}>Transact</Text>
                        </CardItem>

                        <CardItem style={{justifyContent: 'center'}}>                        
                          <Grid>
                            <Row>

                            <TouchableWithoutFeedback 
                            onPressIn = {()=>this.animateInMomo()}
                            onPressOut = {()=>this.animateOutMomo()}
                            onPress={() => this.props.navigation.navigate('DetailsSelection', {
                                    headerColor: '#352540',
                                    headerTitle: 'Mobile Money',
                                  })}
                            >
                            <Animated.View style={{flex: 1, transform: [{scale: this.state.animatePress}]}}>
                                <Col style={{ height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2b1e34', borderRadius: 10, margin: 5}}>
                                  
                                  <Text style={{ color: '#bfaac3'}}>Mobile Money</Text>
                                  
                                </Col>
                            </Animated.View>
                            </TouchableWithoutFeedback>
                              
                            <TouchableWithoutFeedback 
                            onPressIn = {()=>this.animateInMomo()}
                            onPressOut = {()=>this.animateOutMomo()}
                            onPress={() => this.props.navigation.navigate('BankDetails', {
                                    headerColor: '#352540',
                                    headerTitle: 'Bank',
                                  })}
                            >
                            <Animated.View style={{flex: 1, transform: [{scale: this.state.animatePress}]}}>
                                <Col style={{ height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: '#352540', borderRadius: 10, margin: 5}}>
                                  
                                  <Text style={{ color: '#bfaac3'}}>Bank</Text>
                                  
                                </Col>
                            </Animated.View>
                            </TouchableWithoutFeedback>
                            </Row>

                              <Row>
                            <TouchableWithoutFeedback 
                            onPressIn = {()=>this.animateInMomo()}
                            onPressOut = {()=>this.animateOutMomo()}
                            onPress={() => this.props.navigation.navigate('CreditCardDetails', {
                                    headerColor: '#352540',
                                    headerTitle: 'Credit Card',
                                  })}
                            >
                            <Animated.View style={{flex: 1, transform: [{scale: this.state.animatePress}]}}>
                                <Col style={{ height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: '#352540', borderRadius: 10, margin: 5}}>
                                  
                                  <Text style={{ color: '#bfaac3'}}>Credit Card</Text>
                                  
                                </Col>
                            </Animated.View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback 
                            onPressIn = {()=>this.animateInMomo()}
                            onPressOut = {()=>this.animateOutMomo()}
                            onPress={() => this.props.navigation.navigate('Paypal', {
                                    headerColor: '#352540',
                                    headerTitle: 'Paypal',
                                  })}
                            >
                            <Animated.View style={{flex: 1, transform: [{scale: this.state.animatePress}]}}>
                                <Col style={{ height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2b1e34', borderRadius: 10, margin: 5}}>
                                  
                                  <Text style={{ color: '#bfaac3'}}>Paypal</Text>
                                  
                                </Col>
                            </Animated.View>
                            </TouchableWithoutFeedback>
                                </Row>
                          </Grid>
                        </CardItem>

                        <CardItem header>                        
                            
                        </CardItem>
                   </Card>

                    <View style={{marginVertical: 20, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{fontSize: 10, opacity: 0.3}}>Oxpay - 2019</Text>
                    </View>
                </Content>
            </Container>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    DetailsSelection: DetailsSelection,
    TransactConfirm: TransactConfirm,
    BankDetails: BankDetails,
    BankTransactConfirm: BankTransactConfirm,
    CreditCardDetails: CreditCardDetails,
    CardTransactConfirm: CardTransactConfirm,
    Paypal: Paypal,
    Splash: Splash,
  },
  {
    initialRouteName: 'Splash',
  }
);

const AppContainer = createAppContainer(RootStack);

export class App extends React.Component {
  render (){
    return <AppContainer />
  }
}
