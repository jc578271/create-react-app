import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
import store from './store';

const App = (props: any) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes {...props}/>
        </BrowserRouter>
      </Provider>
      
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))