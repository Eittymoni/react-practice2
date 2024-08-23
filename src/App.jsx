import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Layout from "./components/root/Layout"



function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<HomePage/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
    </Route>
  ))

  return (
    <>
   <RouterProvider router = {router}/>
  
    </>
  )
}

export default App
