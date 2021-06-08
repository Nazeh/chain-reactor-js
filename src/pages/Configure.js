import { useState } from 'react';
import { Page } from '../layouts/Page';
import { NewChannelForm } from '../components/NewChannelForm';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Label from '@radix-ui/react-label';
import '../styles/Configure.css';

export const ConfigurePage = ({ initialView = 'channel' }) => {
  const [view, setView] = useState(initialView);

  return (
    <Page title="Configure">
      <RadioGroup.Root
        className="view-switch"
        value={view}
        onValueChange={(e) => {
          setView(e.target.value);
        }}
      >
        <Label.Root>
          <RadioGroup.Item value="channel"></RadioGroup.Item>
          New Channel
        </Label.Root>
        <Label.Root>
          <RadioGroup.Item value="invoice"></RadioGroup.Item>
          Pay Invoice
        </Label.Root>
      </RadioGroup.Root>
      {view === 'channel' ? <NewChannelForm /> : <p>WIP</p>}
    </Page>
  );
};
