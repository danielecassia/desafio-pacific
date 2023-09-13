import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import { UsersForm } from "../pages/UsersForm";
import { FilledFormList } from "../pages/FilledFormList";
import { DetailsFormData } from "../pages/DetailsFormData";

const router = createBrowserRouter([
  { path: "*", Component: Root },
])

export default function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return (
    <Routes>
      <Route index element={<FilledFormList />} />
      <Route path="fillForm" element={<UsersForm />} />
      <Route path=":id/details" element={<DetailsFormData />} />
    </Routes>
  )
}