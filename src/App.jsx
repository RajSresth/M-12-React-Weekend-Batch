import Parent from "./Topic-1 JSX/Parent";

const App = () => {
 

  return <div className="app-component">
        <Parent/>   
  </div>;
};

export default App;

/**
 * ! Rules to write JSX
 * 1. Return a Single Parent Element
 * 2. Close All Tags
 * 3. Use camelCase for Attributes (ex: className Instead of class,  htmlFor Instead of for
 * 4. JavaScript Expressions in { }
 * 5. Inline Styles as Objects
 * 6. No if/else Directly — Use Ternary or &&
 * 7. Comments Inside
 */
