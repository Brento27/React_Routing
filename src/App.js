import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import AddEmployeePage from './pages/AddEmployeePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddEmployeePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
