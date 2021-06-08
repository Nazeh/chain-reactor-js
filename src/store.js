export const initialValue = {
  newChannelConfig: {
    capacity: 42,
    durationType: 'Days',
    durationValue: 10,
  },
  invoiceConfig: {
    invoice: '',
    amount: 0,
    total: 0,
  },
};

export const types = {
  SET_NEW_CHANNEL_CONFIG: 'SET_NEW_CHANNEL_CONFIG',
  SET_INVOICE: 'SET_INVOICE',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_NEW_CHANNEL_CONFIG:
      return { ...state, newChannelConfig: action.value };
    case types.SET_INVOICE:
      return { ...state, invoiceConfig: action.value };
  }
};
