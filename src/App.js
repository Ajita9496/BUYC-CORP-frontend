import Header from "./components/Header";
import { Container } from "react-bootstrap";
import "./index.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserListScreen from "./screens/UserListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import CategoryWiseProduct from "./screens/CategoryWiseProduct";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import "./StylesUI.css";
import AccScreen from "./screens/AccScreen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Header />
          <main className="py-3">
            <Container fluid style={{ paddingRight: "5%", paddingLeft: "5%" }}>
              <Routes>
                <Route path="/admin/userlist" element={<UserListScreen />} />

                <Route
                  path="/admin/productlist"
                  exact
                  element={<ProductListScreen />}
                />
                <Route
                  path="/admin/productlist/:pageNumber"
                  exact
                  element={<ProductListScreen />}
                />

                <Route
                  path="/admin/product/:id/edit"
                  element={<ProductEditScreen />}
                />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/accessories" element={<AccScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/product/:id" element={<ProductScreen />} />

                <Route path="/search/:keyword" element={<HomeScreen />} />
                <Route path="/page/:pageNumber" element={<HomeScreen />} />
                <Route
                  path="/search/:keyword/page/:pageNumber"
                  exact
                  element={<HomeScreen />}
                />

                <Route
                  path="/category/:category/:brand"
                  element={<CategoryWiseProduct />}
                />
              </Routes>
            </Container>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
