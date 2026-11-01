import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Loading = lazy(() => import("../components/Loading"));
const RootLayout = lazy(() => import("../components/RootLayout"));
const MyDetails = lazy(() => import("../components/MyDetails"));
const About = lazy(() => import("../components/About"));
const Projects = lazy(() => import("../components/Projects"));
const TechnicalSkills = lazy(() => import("../components/TechnicalSkills"));
const Education = lazy(() => import("../components/Education"));
const Contact = lazy(() => import("../components/Contact"));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <MyDetails />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/skills',
                element: <TechnicalSkills />
            },
            {
                path: '/education',
                element: <Education />
            },
            {
                path: '/contact',
                element: <Contact />
            }

        ]
    }
]);
