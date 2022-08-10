import { Provider } from 'react-redux';
import './App.css';
// import First from './First';
// import Second from './Second';
import MyRoutes from './MyRoutes';
import store from './redux/store';
// import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
    <Provider store={store}>
    {/* <First/>
    <Second/> */}
    {/* <Navbar/> */}
    <MyRoutes/>
    </Provider>
    </>
  );
}

export default App;
