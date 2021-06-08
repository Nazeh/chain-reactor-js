import { useState } from 'react';
import { Page } from '../layouts/Page';
import { NewChannelForm } from '../components/NewChannelForm';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const ConfigurePage = ({ initialView = 'channel' }) => {
  const [view, setView] = useState(initialView);

  return (
    <Page title="Configure">
      <RadioGroup.Root
        value={view}
        onValueChange={(e) => {
          setView(e.target.value);
        }}
      >
        <RadioGroup.Item value="channel">New Channel</RadioGroup.Item>
        <RadioGroup.Item value="invoice">Pay Invoice</RadioGroup.Item>
      </RadioGroup.Root>
      <input
        type="checkbox"
        checked={view === 0}
        onChange={(e) => {
          setView(0);
        }}
      ></input>
      <label>New Channel</label>
      <input
        type="checkbox"
        checked={view === 1}
        onChange={(e) => {
          setView(1);
        }}
      ></input>
      <label>Pay Invoice</label>
      {view === 'channel' ? <NewChannelForm /> : <p>somoething else</p>}
    </Page>
  );
};
