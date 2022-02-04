import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import PrivateRoute from "./privateRouter/PrivateRouter";
import ItemListContainer from "./home/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux"
import generateStore from "./redux/store"
import ItemDetailContainer from "./detallesDePlato/ItemDetailContainer";
import ItemSearchContainer from "./buscadorDePlatos/ItemSearchContainer";

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <PrivateRoute>
              <ItemListContainer />
            </PrivateRoute>
          }
          />
          <Route exact path="/busquedaDePlatos" element={
            <PrivateRoute>
              <ItemSearchContainer />
            </PrivateRoute>
          }
          />
          
        <Route exact path="/item/:id" element={
          <PrivateRoute>
            <ItemDetailContainer />
          </PrivateRoute>
        }
        />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  )
};

export default App;
