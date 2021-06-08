import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewChannelData } from '../components/ChannelData';
import { openChannel } from '../api';
import { StoreContext } from '../App';
import QRCode from 'qrcode.react';
import { Page } from '../layouts/Page';
import { createInvoice } from '../ln';
import '../styles/Payment.css';
import { InvoiceData } from '../components/InvoiceData';

export const InvoicePayment = () => {
  const { store } = useContext(StoreContext);
  const { invoiceConfig } = store;
  const { amount, total, invoice } = invoiceConfig;

  const [sent, setSent] = useState(false);

  useEffect(() => {
    openChannel().then((response) => {
      setSent(true);
    });
  });

  return (
    <Page title="Configure">
      <div className="payment-page">
        <Link to="/new-channel/" className="back">
          Go back
        </Link>

        <div className="qr-code">
          <QRCode size={350} value={invoice} />
        </div>
        <InvoiceData amount={amount} total={total} />
      </div>

      <button className={`submit-btn ${sent ? '' : 'pending'}`} disabled>
        {sent ? 'Payment Sent' : 'Processing Payment'}
      </button>
    </Page>
  );
};
