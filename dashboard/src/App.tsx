// import {BrowserRouter, Switch, Route} from "react-router-dom"
// import Home from "./pages/Home";
import {store} from "helpers/redux/store"
import {Provider} from "react-redux"
import SiderDemo from "./pages/Layout"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <SiderDemo />
      </div>
    </Provider>
  )
}

export default App
