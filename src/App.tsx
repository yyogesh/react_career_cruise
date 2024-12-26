import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import { routes } from "./routes/routes"
import { Suspense } from "react"
import Loader from "./components/common/Loader/Loader"

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
}

function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          <Suspense fallback={
            <div className="min-h-[50vh] flex items-center justify-center">
              <Loader size="large" />
            </div>
          }>
            <AppRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
