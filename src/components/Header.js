import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LangContext from "../context/LangContext";
import ThemeContext from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { handleLang, texts } = useContext(LangContext);
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <header className={theme} style={{ height: "10vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          height: "100%",
          margin: "auto",
        }}
      >
        <h1>
          useContext{" "}
          <small style={{ color: "grey" }}>(DarkTheme - Lang - Auth)</small>
        </h1>
        <section style={{ display: "flex", gap: "10px" }}>
          {!auth ? (
            <button
              onClick={handleAuth}
              style={{
                padding: "0 4px",
                border: "1px solid green",
                borderRadius: "4px",
              }}
            >
              {texts.btnLogin}
            </button>
          ) : (
            <button
              onClick={handleAuth}
              style={{
                padding: "0 4px",
                border: "1px solid red",
                borderRadius: "4px",
              }}
            >
              {texts.btnLogout}
            </button>
          )}
          <select name="lenguage" onChange={handleLang}>
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>{" "}
          <button
            onClick={handleTheme}
            style={{ border: "none", background: "transparent" }}
          >
            {theme === "light" ? (
              <FaSun size="25px" color="orange" />
            ) : (
              <FaMoon size="25px" color="white" />
            )}
          </button>{" "}
        </section>
      </div>
    </header>
  );
};

export default Header;
