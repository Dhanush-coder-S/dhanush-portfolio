import { Suspense } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/router.jsx'
import Loading from "./components/Loading.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Suspense>
  </StrictMode>,
)
