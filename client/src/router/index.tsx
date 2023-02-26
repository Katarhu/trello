import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "@constants";
import { ErrorPage, BoardsPage, BoardPage } from "@pages";
import App from "../App";

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.BOARDS,
        element: <BoardsPage />,
      },
      {
        path: ROUTES.BOARD_ID(),
        element: <BoardPage />,
      },
      {
        path: ROUTES.NON_EXISTING,
        element: <Navigate to={ROUTES.BOARDS} />,
      },
    ],
  },
]);
