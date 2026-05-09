import { Outlet } from "react-router-dom";
import Header from "./Topic-8 React Routing/components/Header.jsx";
const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
