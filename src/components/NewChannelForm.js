import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { NewChannelData } from './NewChannelData';
import { types } from '../store';
import { StoreContext } from '../App';

export const NewChannelForm = () => {
  // Add a default capacity
  // to make it easier to test the demo.
  const [capacity, setCapacity] = useState(100);
  const [durationValue, setDurationValue] = useState(20);
  const [durationType, setDurationType] = useState('Days');

  let history = useHistory();

  const canPay = Number(capacity) > 0;

  const { _, dispatch } = useContext(StoreContext);

  const handleClickPay = () => {
    if (canPay) {
      history.push('/new-channel/payment');
      dispatch({
        type: types.SET_NEW_CHANNEL_CONFIG,
        value: { capacity, durationType, durationValue },
      });
    }
  };

  return (
    <>
      <label>Capacity</label>
      <input
        type="number"
        value={capacity}
        onChange={(e) => {
          setCapacity(e.target.value);
        }}
      />
      <label>Select Channel Expiry</label>
      <input
        type="number"
        value={durationValue}
        onChange={(e) => {
          setDurationValue(e.target.value);
        }}
      />
      <select
        onChange={(e) => {
          setDurationType(e.target.value);
        }}
      >
        <option>Hours</option>
        <option>Days</option>
      </select>
      <NewChannelData
        capacity={capacity}
        durationType={durationType}
        durationValue={durationValue}
      />
      <button
        className="submit-btn"
        disabled={!canPay}
        onClick={handleClickPay}
      >
        Pay Now
      </button>
    </>
  );
};
