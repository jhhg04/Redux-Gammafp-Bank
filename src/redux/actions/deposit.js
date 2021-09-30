export const DEPOSIT_MONEY = 'DEPOSIT_MONEY';

export const deposit = () => {
  return {
    type: 'DEPOSIT_MONEY',
    payload: 10,
  };
};
