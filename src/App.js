import './App.css';
import DineroCuenta from './components/DineroCuenta';
import MovimientoCuenta from './components/MovimientoCuenta';
import money from './img/bitcoin.png';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <div className='App container'>
        <div className='row'>
          <div className='col-12'>
            <div className='card mt-5' style={{ maxWidth: '450px' }}>
              <div className='row no-gutters'>
                <div className='col-4'>
                  <img src={money} alt='money' className='card-img pt-4 p-2' />
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    <div className='card-title h3 text-center'>
                      <DineroCuenta />
                    </div>
                    <MovimientoCuenta />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
