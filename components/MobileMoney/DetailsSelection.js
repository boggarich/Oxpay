import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Container,
  Content,
  Card,
  CardItem,
  Icon,
  Col,
  Row,
  Grid,
  Picker,
  Item,
  InputGroup,
  Input,
  Button,
} from 'native-base';
import TransactConfirm from './TransactConfirm';

const DetailsSelection = (props, TransactConfirm) => {
  return (
    <View style={{ flex: 1 }}>
      <Container style={{ flex: 1 }}>
        <Content style={{ flex: 1 }}>
          <Card>
            <CardItem header>
              <Text>Select a network</Text>
            </CardItem>

            <CardItem style={{ justifyContent: 'center' }}>
              <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={props.selectedNetwork}
                onValueChange={props.onSelectedNetwork.bind(this)}>
                <Item label="MTN" value="MTN" />
                <Item label="AirtelTigo" value="AirtelTigo" />
                <Item label="Vofafone" value="Vodafone" />
              </Picker>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold' }}>Enter phone number</Text>
            </CardItem>

            <CardItem style={{ justifyContent: 'center' }}>
              <InputGroup borderType="underline">
                <Input
                  placeholder="xxx - xxxx- xxx"
                  defaultValue={props.phoneNumber}
                  onChangeText={props.getPhoneNumber.bind(this)}
                />
              </InputGroup>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold' }}>Amount</Text>
            </CardItem>

            <CardItem style={{ justifyContent: 'center' }}>
              <InputGroup borderType="underline">
                <Input
                  placeholder="0.00"
                  defaultValue={props.momoAmount}
                  onChangeText={props.getMomoAmount.bind(this)}
                />
              </InputGroup>
            </CardItem>
          </Card>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginVertical: 30,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#2b1e34',
                color: '#fff',
                marginHorizontal: 10,
              }}
              onPress={() => props.navigation.push('TransactConfirm')}>
              Widthdraw
            </Text>
            <Text
              style={{
                marginVertical: 30,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#2b1e34',
                color: '#fff',
                marginHorizontal: 10,
              }}
              onPress={() => props.navigation.push('TransactConfirm')}>
              Send To Wallet
            </Text>
          </View>
        </Content>
      </Container>
    </View>
  );
};

DetailsSelection.navigationOptions = ({ navigation }) => {
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
  };
};

const mapStateToProps = state => {
  return {
    selectedNetwork: state.selectedNetwork,
    phoneNumber: state.phoneNumber,
    momoAmount: state.momoAmount,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectedNetwork: (value: string) => {
      const action = {
        type: 'CHANGE_NETWORK',
        payload: value,
      };
      dispatch(action);
    },

    getPhoneNumber: (phoneNumber: string) => {
      const action = {
        type: 'GET_PHONE_NUMBER',
        payload: phoneNumber,
      };
      dispatch(action);
    },

    getMomoAmount: (money: string) => {
      const action = {
        type: 'GET_MOMO_AMOUNT',
        payload: money,
      };
      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsSelection);
