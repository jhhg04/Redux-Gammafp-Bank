import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deposit_money_action,
  withdraw_money_action,
} from '../redux/actions/moveMoneyAction';

const MovimientoCuenta = () => {
  const dispatch = useDispatch();
  return (
    <div className='trans'>
      <button
        className='btn btn-success m-2'
        onClick={() => {
          dispatch(deposit_money_action(10));
        }}
      >
        <span>+</span> Deposit $10
      </button>
      <button
        className='btn btn-danger m-2'
        onClick={() => {
          dispatch(withdraw_money_action(10));
        }}
      >
        <span>-</span>Withdraw $10
      </button>
    </div>
  );
};

export default MovimientoCuenta;
