import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home/Home.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store/index.ts';
import '../firebase.config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>,
);
