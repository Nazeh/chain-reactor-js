import './styles/App.css';
import { ConfigurePage } from './pages/Configure';
import { ChannelPayment } from './pages/ChannelPayment';
import { Menu } from './layouts/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/menu">
            <Menu title="Menu"></Menu>
          </Route>
          <Route path="/new-channel/payment">
            <ChannelPayment></ChannelPayment>
          </Route>
          <Route path="/new-channel">
            <ConfigurePage view="new-channel"></ConfigurePage>
          </Route>
          <Route path="/pay-invoice">
            <ConfigurePage view="pay-invoice"></ConfigurePage>
          </Route>
          <Route path="/">
            <ConfigurePage view="new-channel"></ConfigurePage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
