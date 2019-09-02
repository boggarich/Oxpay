import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableWithoutFeedback, TouchableOpacity, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {Grid, Row, Col, Container, Content, Card, CardItem, Item, Input} from 'native-base';
import Home from './main';

class Splash extends React.Component {


  render(){
       return (
      <View style={{ flex: 1 ,justifyContent: 'center'}}>
      <Container style={{flex: 1}}>
        <Content style={{justifyContent: 'center', alignContent: 'center'}}>
          <View style={{fontSize: 30, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <TextInput 
            editable = {false}
            style = {{fontSize: 30}}
            maxLength = {6}
            defaultValue = {this.props.passcode}
            />
          </View>
        </Content>
      </Container>
            <Container style={{ flex:3}}>
                <Content  style={{ flex: 1, backgroundColor: '#f3f3f3',  justifyContent: "center", paddingHorizontal: 40 }}>  
                          <Grid>
                            <Row style = {{justifyContent: 'center'}}>
                                <Col onPress = {this.props.onOne} style={styles.numericCol}>
                                  
                                  <Text style={styles.numericKeys}>1</Text>
                                </Col>
                                <Col style={styles.numericCol}>
                                  
                                  <Text style={styles.numericKeys} onPress={this.props.onTwo}>2</Text>
                                </Col>
                                <Col style={styles.numericCol}>
                                  
                                  <Text style={styles.numericKeys} onPress = {this.props.onThree}>3</Text>
                                </Col>
                            </Row>



                            <Row style = {{justifyContent: 'center'}}>
                                <Col style={styles.numericCol}>
                                  
                                  <Text style={styles.numericKeys} onPress = {this.props.onFour}>4</Text>
                                </Col>
                                <Col style={styles.numericCol}>
                                  
                                  <Text style={styles.numericKeys}onPress = {this.props.onFive}>5</Text>
                                </Col>
                                <Col style={styles.numericCol}>
                                  
                                  <Text style={styles.numericKeys} onPress = {this.props.onSix}>6</Text>
                                </Col>
                            </Row>


                                
                            <Row style = {{justifyContent: 'center'}}>
                                <Col style={styles.numericCol}>
                                  
                                  <Text style={styles.numericKeys} onPress = {this.props.onSeven}>7</Text>
                                </Col>
                                <Col style={styles.numericCol}>
                                  
                                  <Text style={styles.numericKeys} onPress = {this.props.onEight}>8</Text>
                                </Col>
                                <Col style={styles.numericCol}>
                                  
                                  <Text style={styles.numericKeys} onPress = {this.props.onNine}>9</Text>
                                </Col>
                            </Row>




                            <Row style = {{justifyContent: 'center'}}>
                                <Col style={styles.numericCol}>
                              <TouchableWithoutFeedback onPress = {this.props.onBackspace}
                              onPressIn = {this.props.onBackspacePressIn}>
                              <View style={{flex: 1, justifyContent: 'center'}}>
                                <Image style = {{height: 30, width: 30}} source = {require('../assets/images/backspace-arrow.png')}/>
                              </View>
                              </TouchableWithoutFeedback>

                                </Col>
                                <Col style={styles.numericCol}>
                                  
                                  <Text style={styles.numericKeys} onPress = {this.props.onZero}>0</Text>
                                </Col>

                                <Col style={styles.numericCol}>
                               <TouchableOpacity onPress = {this.props.onEnterPress}>
                               <View style={{flex: 1, justifyContent: 'center'}}>
                                <Image style = {{height: 30, width: 30}} source = {require('../assets/images/check-mark.png')} />
                              </View>
                                </TouchableOpacity>
                                </Col>
                                
                            </Row>
                          </Grid>
                </Content>
            </Container>
      </View>
    );
  }
}

Splash.navigationOptions = ({ navigation }) => {
  return {
      title: "Enter your Oxpay passcode",
      headerStyle: {
      backgroundColor: '#352540'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      alignSelf: "center",
      color: '#fff',
      fontSize: 16,
      }
  }
}

const mapStateToProps = (state) => {
  return {
    passcode: state.passcode,
    userAuth: state.userAuth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOne: ()=> {
      const action = {
        type: 'NUMERIC_ONE',
        payload: '1'
      }
      dispatch(action);
    },

    onTwo: () => {
      const action = {
        type: 'NUMERIC_TWO',
        payload: '2'
      }
      dispatch(action);
    },

    onThree: () => {
      const action = {
        type: 'NUMERIC_TWO',
        payload: '3'
      }
      dispatch(action);
    },

    onFour: () => {
      const action = {
        type: 'NUMERIC_TWO',
        payload: '4'
      }
      dispatch(action);
    },

    onFive: () => {
      const action = {
        type: 'NUMERIC_TWO',
        payload: '5'
      }
      dispatch(action);
    },

    onSix: () => {
      const action = {
        type: 'NUMERIC_TWO',
        payload: '6'
      }
      dispatch(action);
    },

    onSeven: () => {
      const action = {
        type: 'NUMERIC_TWO',
        payload: '7'
      }
      dispatch(action);
    },

    onEight: () => {
      const action = {
        type: 'NUMERIC_TWO',
        payload: '8'
      }
      dispatch(action);
    },

    onNine: () => {
      const action = {
        type: 'NUMERIC_TWO',
        payload: '9'
      }
      dispatch(action);
    },

    onZero: () => {
      const action = {
        type: 'NUMERIC_TWO',
        payload: '0'
      }
      dispatch(action);
    },

    onBackspace: () => {
      const action = {
        type: 'BACKSPACE',
      }
      dispatch(action);
    },

    onBackspacePressIn: () => {
      const action = {
        type: 'BACKSPACE_PRESSIN',
      }
      dispatch(action);
    },

    onEnterPress: () => {
      const action = {
        type: 'ENTER_PRESS',
      }
      dispatch(action);
    },

  }
}
      

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

const styles = StyleSheet.create({
  numericKeys: {
    opacity: 0.7, 
    fontSize: 24,
    fontWeight: 'bold'
  },
  numericCol: {
    height: 70, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10, 
    margin: 5,
  }
})