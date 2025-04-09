import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRoueter";
import 'animate.css';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
