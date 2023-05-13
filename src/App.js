import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Components/store';
import ComponentA from './Components/ComponentA';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ComponentA/>
   </Provider>
    </div>
  );
}

export default App;
