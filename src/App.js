import './App.css';
import Todo from './Components/Todo.jsx';


function App() {
  return (
    <div className="App " style={{backgroundColor:"#232A32"}}>
    <h1 className="text-light" style={{ backgroundColor: "#FD4250", padding: "10px" }}>React App</h1>
      <Todo/>
    </div>
  );
}

export default App;
