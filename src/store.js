export const initialValue = {
  newChannelConfig: {
    capacity: 42,
    durationType: 'Days',
    durationValue: 10,
  },
};

export const types = {
  SET_NEW_CHANNEL_CONFIG: 'SET_NEW_CHANNEL_CONFIG',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_NEW_CHANNEL_CONFIG:
      return { ...state, newChannelConfig: action.value };
  }
};
