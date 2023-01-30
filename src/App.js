import "./App.css";
import Counter from "./reactRedux/counter";
import store from "./reactRedux/store";
import { Provider } from "react-redux";
store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <div>
      {/* Counter with react-redux */}
       <Provider store={store}>
        <Counter />
      </Provider> 
      

    </div>
  );
}

export default App;
