import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Cookies from "js-cookie";
import DefaultLayout from "./layouts/DefaultLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePage from "./pages/HomePage";
import JobVacancyPage from "./pages/JobVacancyPage";
import JobVacancyDetailPage from "./pages/JobVacancyDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import TablePage from "./pages/TablePage";
import FormDataPage from "./pages/FormDataPage";
import ProfilePage from "./pages/ProfilePage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import NotFoundPage from "./pages/NotFoundPage";

const LoginRoute = (props) => {
  if (Cookies.get("token") === undefined) {
    return props.children;
  } else if (Cookies.get("token") !== undefined) {
    return <Navigate to={"/"} />;
  }
};

const DashboardRoute = (props) => {
  if (Cookies.get("token") !== undefined) {
    return props.children;
  } else if (Cookies.get("token") === undefined) {
    return <Navigate to={"/"} />;
  }
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <DefaultLayout>
                  <HomePage />
                </DefaultLayout>
              }
            />
            <Route
              path="/job-vacancy"
              element={
                <DefaultLayout>
                  <JobVacancyPage />
                </DefaultLayout>
              }
            />
            <Route
              path="/job-vacancy/:id"
              element={
                <DefaultLayout>
                  <JobVacancyDetailPage />
                </DefaultLayout>
              }
            />
            <Route
              path="/dashboard"
              element={
                <DashboardRoute>
                  <DashboardLayout>
                    <DashboardPage />
                  </DashboardLayout>
                </DashboardRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <DashboardRoute>
                  <DashboardLayout>
                    <TablePage />
                  </DashboardLayout>
                </DashboardRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                <DashboardRoute>
                  <DashboardLayout>
                    <FormDataPage />
                  </DashboardLayout>
                </DashboardRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/edit/:id"
              element={
                <DashboardRoute>
                  <DashboardLayout>
                    <FormDataPage />
                  </DashboardLayout>
                </DashboardRoute>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <DashboardRoute>
                  <DashboardLayout>
                    <ProfilePage />
                  </DashboardLayout>
                </DashboardRoute>
              }
            />
            <Route
              path="/dashboard/change-password"
              element={
                <DashboardRoute>
                  <DashboardLayout>
                    <ChangePasswordPage />
                  </DashboardLayout>
                </DashboardRoute>
              }
            />
            <Route
              path="/login"
              element={
                <LoginRoute>
                  <DefaultLayout>
                    <LoginPage />
                  </DefaultLayout>
                </LoginRoute>
              }
            />
            <Route
              path="/register"
              element={
                <LoginRoute>
                  <DefaultLayout>
                    <RegisterPage />
                  </DefaultLayout>
                </LoginRoute>
              }
            />
            <Route
              path="*"
              element={
                <DefaultLayout>
                  <NotFoundPage />
                </DefaultLayout>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
