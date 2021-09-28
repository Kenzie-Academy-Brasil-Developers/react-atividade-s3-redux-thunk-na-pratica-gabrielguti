import Input from "./components/input";
import List from "./components/list";

function App() {
  return (
    <div>
      <div className="infoData">
        <div className="comments">
          <List />
        </div>
        <div className="inputsCamp">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
