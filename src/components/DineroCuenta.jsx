import React from 'react';
import { connect, useSelector } from 'react-redux';

const DineroCuenta = () => {
  const move_money = useSelector((state) => state.move_money);
  return <>Money: {move_money.dinero}</>;
};

const mapStateToProps = (state) => {
  return {
    move_money: state.move_money,
  };
};

export default connect(mapStateToProps)(DineroCuenta);
