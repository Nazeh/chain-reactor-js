import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewChannelData } from '../components/NewChannelData';
import { openChannel } from '../api';
import { StoreContext } from '../App';
import QRCode from 'qrcode.react';
import { Page } from '../layouts/Page';
import { createInvoice } from '../ln';
import '../styles/Payment.css';

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
    <Page title="Configure">
      <div className="payment-page">
        <Link to="/new-channel/" className="back">
          Go back
        </Link>
        {invoice ? (
          <>
            <div className="qr-code">
              <QRCode size={256} value={invoice} />
            </div>
            <p className="invoice">{invoice}</p>
          </>
        ) : (
          <>
            <div className="qr-code">
              <QRCode size={350} value={createInvoice(newChannelConfig)} />
            </div>
            <NewChannelData
              capacity={capacity}
              durationType={durationType}
              durationValue={durationValue}
            />
          </>
        )}
      </div>

      <button className={`submit-btn ${invoice ? '' : 'pending'}`} disabled>
        {invoice ? 'Payment Confirmed' : 'Awaiting Payment'}
      </button>
    </Page>
  );
};
