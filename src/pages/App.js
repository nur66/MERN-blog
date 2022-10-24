import { BaseRoutes, store } from '../config';
import './App.css';
import { Provider } from 'react-redux';

// buat provider untuk membugkus seluruh aplikasi kita
// saat ini aplikasi kita hanya dibungkus oleh route
// tujuan kita membungkusnya dengan Provider adalah agar kita bisa menambahkan props sebuah store
// yang berisi state global kita

function App() {
  return (
    <Provider store={store}>
      <BaseRoutes />
    </Provider>
    // <BaseRoutes />
  );
}

export default App;
