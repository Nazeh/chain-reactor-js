import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { InvoiceData } from './InvoiceData';
import { types } from '../store';
import { StoreContext } from '../App';
import * as Label from '@radix-ui/react-label';
import { parseInvoice } from '../ln';

export const InvoiceForm = () => {
  const [invoiceValue, setInvoiceValue] = useState(0);
  const [invoiceString, setInvoiceString] = useState(0);

  let history = useHistory();

  const canPay = invoiceValue > 0;

  const { _, dispatch } = useContext(StoreContext);

  const handleClickPay = () => {
    if (canPay) {
      history.push('/invoice/payment');
      dispatch({
        type: types.SET_INVOICE,
        value: { invoice: invoiceString, amount: invoiceValue },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleClickPay}>
      <div className="form-inputs">
        <Label.Root className="ln-invoice label">
          Paste Lightning Invoice
          <div className="row">
            <input
              type="text"
              onChange={(e) => {
                const invoiceString = e.target.value;
                setInvoiceString(invoiceString);
                setInvoiceValue(parseInvoice(invoiceString));
              }}
            />
          </div>
        </Label.Root>

        <InvoiceData amount={invoiceValue} total={invoiceValue} />
      </div>
      <button className="submit-btn" disabled={!canPay}>
        Pay Now
      </button>
    </form>
  );
};
