import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

const TotalMoney = (props) => {
  return (
    <Text  style={{fontWeight: 'bold', fontSize: 25, paddingVertical: 20}}>GHs {props.totalMoney}</Text>
  );
}

const mapStateToProps = (state) => {
  return {
    totalMoney: state.totalMoney,
  }
}

export default connect(mapStateToProps)(TotalMoney);