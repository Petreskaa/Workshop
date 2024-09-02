import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskList } from './features/Task/TaskList';
import { Provider } from 'react-redux';
import { taskStore } from './redux/store';
import { TaskDetails } from './features/Task/taskDetails';

function App() {
  return (
    <div className="App">
        <Router>
          <Provider store={taskStore}>
          <Routes>
              <Route path="/" element={<TaskList />}/>
              <Route path="/task/:id" element={<TaskDetails />}/>
              <Route path="*" element={<>Error Route</>} />
            
          </Routes>
          </Provider>
        </Router>
    </div>
  );
}

export default App;
