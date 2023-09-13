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
      <Route index element={<UsersForm />} />
      <Route path="listFilledForms" element={< FilledFormList />} />
      <Route path=":userName/details" element={<DetailsFormData />} />
    </Routes>
  )
}