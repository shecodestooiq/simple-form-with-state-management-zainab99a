import './App.css';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import { MyProvider } from './store/Context';
function App() {
  return (
    <>
    <MyProvider>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
   </MyProvider>
    </>
  );
}

export default App;
