import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Details from './pages/Details'
import Guide from './pages/Guide'
import NotFound from './pages/NotFound'
import Pets from './pages/Pets'

// layouts
import RootLayout from './layouts/RootLayout'
import PetsLayout from './layouts/PetsLayout'
import PetsError from './pages/PetsError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Guide />} />
      <Route path="pets" element={<PetsLayout />} errorElement={<PetsError />}>
        <Route
          index
          element={<Pets />}
        // errorElement={<CareersError />}
        />
        <Route
          path=":id"
          element={<Details />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
