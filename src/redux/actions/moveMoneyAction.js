export const DEPOSIT_MONEY = 'DEPOSIT_MONEY';
export const WITHDRAW_MONEY = 'WITHDRAW_MONEY';

export const deposit_money_action = (cant) => {
  return {
    type: DEPOSIT_MONEY,
    payload: cant,
  };
};

export const withdraw_money_action = (cant) => {
  return {
    type: WITHDRAW_MONEY,
    payload: cant,
  };
};
