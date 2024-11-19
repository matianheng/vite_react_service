import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import AppRoutes from "./router/routes.tsx";
import history from "./router/navigation.ts"; // 导入封装的 history
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <HistoryRouter history={history}>
          <AppRoutes />
        </HistoryRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
