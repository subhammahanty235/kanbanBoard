import logo from './logo.svg';
import './App.css';
import JasonData from './data.json'
import Header from './components/Header';
import KanbanBoard from './pages/KanbanBoard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, filterData } from './redux/actions/ticketActions'
function App() {
  const dispatch = useDispatch();
  
  // dispatch(filterData(group, order, rawData));
  useEffect(() => {
    dispatch(fetchData())
    
  }, [dispatch])
  const rawData = useSelector((state) => state?.tickets.rawdata);
  useEffect(() => {
    dispatch(filterData("status", "priority", rawData))
  }, [dispatch , rawData])
  return (
    <div className="App">
      <Header />
      <KanbanBoard />
    </div>
  );
}

export default App;
