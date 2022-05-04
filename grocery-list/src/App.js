import "./index.css";
import {Groceries} from './Components/Groceries'
import {Displaygroceries} from './Components/DisplayGroceries'
export default function App() {
  return (
    <div className="App">
      <Groceries/>
      <Displaygroceries />
    </div>
  );
}
