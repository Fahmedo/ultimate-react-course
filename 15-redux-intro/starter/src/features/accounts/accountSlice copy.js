const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit': {
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    }
    case 'account/withdrawal': {
      return { ...state, balance: state.balance - action.payload };
    }
    case 'account/requestLoan': {
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: state.loan + action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.amount,
      };
    }
    case 'account/payLoan': {
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: '',
      };
    }
    case 'account/convertCurrency': {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
}

export function deposite(amount, currency) {
  if (currency === 'USD')
    return {
      type: 'account/deposit',
      payload: amount,
    };
  return async function (dispatch, getstate) {
    dispatch({ type: 'account/convertCurrency' });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const convertedAmount = data.rates.USD;
    dispatch({
      type: 'account/deposit',
      payload: convertedAmount,
    });
  };
}
export function withdrawal(amount) {
  return {
    type: 'account/withdrawal',
    payload: amount,
  };
}

export function requestLoan(amount, loanPurpose) {
  return {
    type: 'account/requestLoan',
    payload: { amount, loanPurpose },
  };
}
export function payLoan() {
  return {
    type: 'account/payLoan',
  };
}
