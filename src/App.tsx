import { useContext } from "react";
import { AuthContext } from "./context/auth";
import { ScreenLogin } from "./pages/ScreenLogin";
import { ScreenTasks } from "./pages/ScreenTasks";
import "./styles/GlobalStyles.scss"

function App() {
  const { user } = useContext(AuthContext)

  return (
    <>
      {!!user ? <ScreenTasks/> : <ScreenLogin/>}
    </>
  );
}

export default App;
