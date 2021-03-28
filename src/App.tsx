import { Provider } from "react-redux";
import { Orders } from "./containers/orders";
import { store } from "./ducks/stores";

function App() {
  return (
    <Provider store={store}>
      <Orders></Orders>
    </Provider>
  );
}

export default App;
