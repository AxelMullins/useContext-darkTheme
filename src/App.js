import "./app.css";
import Home from "./components/Home";
import { AuthProvider } from "./context/AuthContext";
import { LangProvider } from "./context/LangContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AuthProvider>
          <Home />
        </AuthProvider>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
