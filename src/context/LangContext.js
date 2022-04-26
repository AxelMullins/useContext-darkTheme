import { createContext, useState } from "react";
const LangContext = createContext();

//

const translations = {
  es: {
    haederTitle: "Mi aplicación",
    themeLight: "Claro",
    themeDark: "Oscuro",
    btnLogin: "Iniciar Sesión",
    btnLogout: "Cerrar Sesión",
    mainTitle: "Bienvenid@",
    mainText: "En este proyecto vamos a usar useContext",
    msgUser: "Hola usuari@",
    msgGuest: "Hola invitad@, debes iniciar sesión",
  },
  en: {
    haederTitle: "My aplication",
    themeLight: "Light",
    themeDark: "Dark",
    btnLogin: "Login",
    btnLogout: "Logout",
    mainTitle: "Welcome",
    mainText: "In this project we will use useContext",
    msgUser: "Hello user",
    msgGuest: "Hello guest, you must log in",
  },
};

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("es");
  const [texts, setTexts] = useState(translations[lang]);

  const handleLang = (e) => {
    // Aca si me interesa el valor dado por el usuario ya que es un select
    if (e.target.value === "es") {
      setLang("es");
      setTexts(translations.es);
    } else {
      setLang("en");
      setTexts(translations.en);
    }
  };

  const data = { handleLang, texts };

  return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};

// Exports
export { LangProvider };
export default LangContext;
