import { useState } from "react";

const Home = () => {
  const [login, setLogin] = useState(false);

  return login ? (
    <div>
      <h2>Welcome to Home Page</h2>
      <button onClick={() => setLogin(false)}>Logout</button>
    </div>
  ) : (
    <div>
      <h2>Please Login...!</h2>
      <button onClick={() => setLogin(true)}>Login</button>
    </div>
  );
};

export default Home;
