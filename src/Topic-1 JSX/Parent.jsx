import Child from "./Child";

const Parent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Child
        username="Chombu Singh"
        email="chombu@gmail.com"
        age={26}
        city="Rohini"
        pincode={110042}
        src="https://avatars.githubusercontent.com/u/122066418?v=4"
      />

      <Child
        username="Sarvesh Kumar"
        email="sarvesh1999@gmail.com"
        age={27}
        city="Tilak Nagar"
        pincode={110018}
        src="https://avatars.githubusercontent.com/u/128676130?v=4"
      />
    </div>
  );
};

export default Parent;
