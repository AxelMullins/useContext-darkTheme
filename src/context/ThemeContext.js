// Utilizo createContext() para crear un nuevo contexto, en este caso se llama "ThemeContext".
// Lo esporto por defecto
import { createContext, useState } from "react";

const ThemeContext = createContext();
// Creamos nuestro proveedor. Va a ser el contenedor de todos los componentes que lo necesiten consumir.
// Tenemos que hacer uso de la propiedad especial "children"
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    // Aca siempre va a ser el opuesto ya que es un btn
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Creamos un objeto que le vamos a pasar al "value" del "Provider"
  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
