import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { NewChannelData } from './ChannelData';
import { types } from '../store';
import { StoreContext } from '../App';
import * as Label from '@radix-ui/react-label';

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
    <form className="form" onSubmit={handleClickPay}>
      <div className="form-inputs">
        <Label.Root className="capacity label">
          Capacity
          <div className="row">
            <input
              type="number"
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
            />
          </div>
        </Label.Root>
        <Label.Root className="expiry label">
          Select Channel Expiry
          <div className="row">
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
          </div>
        </Label.Root>

        <NewChannelData
          capacity={capacity}
          durationType={durationType}
          durationValue={durationValue}
        />
      </div>
      <button className="submit-btn" disabled={!canPay}>
        Pay Now
      </button>
    </form>
  );
};
