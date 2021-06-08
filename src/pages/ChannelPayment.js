import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NewChannelData } from '../components/NewChannelData';
import { openChannel } from '../api';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const ChannelPayment = () => {
  let query = useQuery();

  let capacity = Number(query.get('capacity'));
  const durationType = query.get('duration-type');
  const durationValue = query.get('duration-value');

  const [pending, setPending] = useState(true);
  let invoice;

  useEffect(() => {
    openChannel().then((response) => {
      invoice = response;
      setPending(false);
    });
  });

  return (
    <>
      <Link to="/new-channel/" className="back">
        Go back
      </Link>
      <div className="qr-code"></div>
      <NewChannelData
        capacity={capacity}
        durationType={durationType}
        durationValue={durationValue}
      />
      <p>{invoice}</p>

      <button className={`submit-btn ${pending ? 'pending' : ''}`} disabled>
        {pending ? 'Awaiting Payment' : 'Payment Confirmed'}
      </button>
    </>
  );
};
