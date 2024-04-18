import "./App.css";
import UsersAPI from "./components/usersAPI";
import FetchApiData from "./components/fetchApiData";
import axios from "axios";

function App() {
  return (
    <div>
      <UsersAPI></UsersAPI>
      <FetchApiData></FetchApiData>
    </div>
  );
}

export default App;
