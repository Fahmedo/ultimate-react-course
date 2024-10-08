const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

export default function customerReducer(state = initialStateCustomer, action) {
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

export function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: {
      nationalID,
      fullName,
      createdAt: new Date().toString(),
    },
  };
}
