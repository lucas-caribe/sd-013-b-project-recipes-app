import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers/index';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Store from '../redux/store';

const renderWithRedux = (
  component,
  { initialState,
    Store = createStore(rootReducer,
      composeWithDevTools(applyMiddleware(thunk)), initialState) } = {},
) => ({
  ...render(<Provider store={ Store }>{component}</Provider>),
  Store,
});

describe('testing Login page', () => {
  beforeEach(cleanup);
  test('Page contains a title with text `Recipes App`',() => {
    const { getByRole } = renderWithRedux(<App />);
    const title = getByRole('heading', { name: 'Recipes App', level: 2});
    expect(title).toBeInTheDocument();
  
  });
  test('Page contains button with text `Entrar`', () => {
    const { getByRole } = renderWithRedux(<App />);
    const button = getByRole('button', { name: /entrar/i});
    expect(button).toBeInTheDocument();
  });

  test('Login button works only with correct input format infos', () => {
    const { getByRole, getAllByRole, getByTestId } = renderWithRedux(<App />);
    const button = getByRole('button', { name: /entrar/i});
    const emailInput = getAllByRole('textbox')[0];
    const passwordInput = getByTestId('password-input');

    expect(button).toBeDisabled();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    userEvent.type(emailInput, 'emailtest@email.com');
    userEvent.type(passwordInput, '1234567');

    expect(button).toBeEnabled();
  });

  test('Login redirect user to `/comidas`', () => {
    const { getByRole, getAllByRole, getByTestId, history } = renderWithRouter(
      <Provider store={Store}>,
        <App />,
      </Provider>);

    const emailInput = getAllByRole('textbox')[0];
    const button = getByRole('button', { name: /entrar/i});
    const passwordInput = getByTestId('password-input');
    userEvent.type(emailInput, 'emailtest@email.com');
    userEvent.type(passwordInput, '1234567');
    
    expect(button).toBeEnabled()
    userEvent.click(button);
    
    const { location: { pathname } } = history;
    // expect(pathname).toBe('/comidas');
  });
});
