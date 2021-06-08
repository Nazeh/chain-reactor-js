import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewChannelData } from '../components/NewChannelData';
import { openChannel } from '../api';
import { StoreContext } from '../App';

export const ChannelPayment = () => {
  const { store } = useContext(StoreContext);
  const { newChannelConfig } = store;
  const { capacity, durationType, durationValue } = newChannelConfig;

  const [invoice, setInvoice] = useState();

  useEffect(() => {
    openChannel().then((response) => {
      setInvoice(response);
    });
  });

  return (
    <>
      <Link to="/new-channel/" className="back">
        Go back
      </Link>
      <div className="qr-code"></div>
      {invoice ? (
        <p>{invoice}</p>
      ) : (
        <NewChannelData
          capacity={capacity}
          durationType={durationType}
          durationValue={durationValue}
        />
      )}

      <button className={`submit-btn ${invoice ? '' : 'pending'}`} disabled>
        {invoice ? 'Payment Confirmed' : 'Awaiting Payment'}
      </button>
    </>
  );
};
