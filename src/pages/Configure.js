import { useState } from 'react';
import { Page } from '../layouts/Page';
import { NewChannelForm } from '../components/NewChannelForm';

export const ConfigurePage = ({ initialView = 0 }) => {
  const [view, setView] = useState(initialView);

  return (
    <Page title="Configure">
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
      {view === 0 ? <NewChannelForm /> : <p>somoething else</p>}
    </Page>
  );
};
