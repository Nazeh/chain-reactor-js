import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NewChannelData } from './NewChannelData';

export const NewChannelForm = () => {
  const [capacity, setCapacity] = useState('');
  const [durationValue, setDurationValue] = useState(20);
  const [durationType, setDurationType] = useState('Days');

  let history = useHistory();

  const canPay = Number(capacity) > 0;

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
        onClick={() => {
          if (canPay) {
            history.push(
              `/new-channel/payment?capacity=${capacity}&duration-value=${durationValue}&duration-type=${durationType}`,
            );
          }
        }}
      >
        Pay Now
      </button>
    </>
  );
};
