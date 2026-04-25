import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("password:", password);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Signup Form</h2>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Enter fullname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Signup</button>
        <button type="reset">Cancel</button>
      </form>
    </div>
  );
};

export default Register;
