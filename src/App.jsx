import LoginPage from "./pages/LoginPage.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>

      <LoginPage />
    </>
  );
}

export default App;