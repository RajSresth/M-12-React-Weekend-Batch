import { Outlet } from "react-router-dom";
import Header from "./Topic-8 React Routing/components/Header.jsx";


const App = () => {
  const user = {
    message: "Hello React",
    username: "Shresth Rajput"
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Outlet context={user}/>
      </main>
    </div>
  );
};

export default App;
