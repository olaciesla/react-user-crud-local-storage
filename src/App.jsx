import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";
function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
