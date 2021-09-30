import { DEPOSIT_MONEY, WITHDRAW_MONEY } from '../actions/moveMoneyAction';

const default_dinero_cuenta = {
  dinero: 0,
};

const move_money = (state = default_dinero_cuenta, action) => {
  switch (action.type) {
    case DEPOSIT_MONEY: {
      return {
        ...state,
        dinero: state.dinero + action.payload,
      };
    }

    case WITHDRAW_MONEY: {
      return {
        ...state,
        dinero: state.dinero - action.payload,
      };
    }

    default:
      return state;
  }
};

export default move_money;
