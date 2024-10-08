import { createStore, combineReducers } from 'redux';

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};
const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit': {
      return { ...state, balance: state.balance + action.payload };
    }
    case 'account/withdrawal': {
      return { ...state, balance: state.balance - action.payload };
    }
    case 'account/requestLoan': {
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: state.loan + action.payload,
        loanPurpose: action.payload,
      };
    }
    case 'account/payLoan': {
      return { ...state, loan: 0, loanPurpose: '' };
    }
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer': {
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    }
    case 'customer/nameUpdate': {
      return {
        ...state,
        fullName: action.fullName,
      };
    }
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

function deposite(amount) {
  return {
    type: 'account/deposit',
    payload: amount,
  };
}
function withdraw(amount) {
  return {
    type: 'accunte/withdraw',
    payload: amount,
  };
}

function createCustomer(nationalID, fullName) {
  return {
    type: 'customer/createCustomer',
    payload: {
      nationalID,
      fullName,
      createdAt: new Date().toString(),
    },
  };
}
store.dispatch(deposite(5000));
store.dispatch(createCustomer('1234567', 'Ahmed Olaitan'));
console.log(store.getState());
