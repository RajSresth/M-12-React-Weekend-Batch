const Child = (props) => {
  const { username, age, city, pincode, email,src } = props;

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent: "space-between", gap: "20px",boxShadow: "0px 0px 4px 1px lightgrey", maxWidth: "550px", padding: "0px 25px"}}>
      <img
        src={src}
        alt=""
        style={{ width: "100px", height: "100px" }}
      />

      <div style={{paddingLeft: "20px"}}>
        <h2>Hello from react component</h2>
        <h3>Username: {username}</h3>
        <h3>Email: {email}</h3>
        <h3>Age: {age}</h3>
        <h3>City: {city}</h3>
        <h3>Pin: {pincode}</h3>
      </div>
    </div>
  );
};

export default Child;
