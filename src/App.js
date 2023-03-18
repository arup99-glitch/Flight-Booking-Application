import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import Book from './Components/Book';
import Table from './Components/Table';
import store from './Redux/store';

function App() {
  return (
   <Provider store={store}>
    <Header></Header>
    <section>
      <Book></Book>
      <Table></Table>
    </section>
   </Provider>
     
      
  );
}

export default App;
