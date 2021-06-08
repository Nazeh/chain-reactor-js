import './styles/App.css';
import { ConfigurePage } from './pages/Configure';
import { ChannelPayment } from './pages/ChannelPayment';
import { MenuPage } from './pages/MenuPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useReducer, createContext } from 'react';
import { initialValue, reducer } from './store';

export const StoreContext = createContext(initialValue);

export const App = () => {
  const [store, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="app">
      <StoreContext.Provider value={{ store, dispatch }}>
        <Router>
          <Switch>
            <Route path="/menu">
              <MenuPage></MenuPage>
            </Route>
            <Route path="/new-channel/payment">
              <ChannelPayment></ChannelPayment>
            </Route>
            <Route path="/new-channel">
              <ConfigurePage></ConfigurePage>
            </Route>
            <Route path="/pay-invoice">
              <ConfigurePage view="invoice"></ConfigurePage>
            </Route>
            <Route path="/">
              <ConfigurePage></ConfigurePage>
            </Route>
          </Switch>
        </Router>
      </StoreContext.Provider>
    </div>
  );
};
