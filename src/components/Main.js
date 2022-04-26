import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LangContext from "../context/LangContext";
import ThemeContext from "../context/ThemeContext";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LangContext);
  const { auth } = useContext(AuthContext);

  return (
    <main
      className={theme}
      style={{ display: "grid", placeItems: "center", height: "90vh" }}
    >
      <section
        style={{
          width: "80%",
          margin: "auto",
        }}
      >
        <h2 style={{ fontSize: "40px", paddingBottom: "40px" }}>
          {texts.mainTitle}
        </h2>
        <p>{texts.mainText}</p>
        {!auth ? (
          <p style={{ color: "red", fontSize: "25px" }}>{texts.msgGuest}</p>
        ) : (
          <p style={{ color: "green", fontSize: "25px" }}>{texts.msgUser}</p>
        )}
      </section>
    </main>
  );
};

export default Main;
