import "./App.css"
import Body from "./Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import ProductStore from "./pages/ProductStore"
import DefaultPage from "./pages/DefaultPage"
const routes = createBrowserRouter([
  {
    element: <Body />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <ProductStore />,
        path: "/store",
      },
      {
        element: <DefaultPage />,
        path: "/otherpage",
      },
    ],
  },
])

function App() {
  return (
    <div className="App font-inter">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
