import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RagistrationPage"));

import "./App.css";

// import { selectError, selectLoading } from "./redux/contacts/contactsSlice";
import Layout from "/src/Layout";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;