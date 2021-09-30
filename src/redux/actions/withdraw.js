export const WITHDRAW_MONEY = 'WITHDRAW_MONEY';

export const withdraw = () => {
  return {
    type: 'WITHDRAW_MONEY',
    payload: -10,
  };
};
