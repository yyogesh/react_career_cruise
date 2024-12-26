import { RouteObject } from "react-router-dom";
import { ROUTES } from "../config/constant";
import { lazy, LazyExoticComponent } from "react";

const Home: LazyExoticComponent<React.FC> = lazy(() => import('../pages/Home'));
const Login: LazyExoticComponent<React.FC> = lazy(() => import('../pages/Login'));
const Register: LazyExoticComponent<React.FC> = lazy(() => import('../pages/Register'));
const ForgotPassword: LazyExoticComponent<React.FC> = lazy(() => import('../pages/ForgotPassword'));
const ResetPassword: LazyExoticComponent<React.FC> = lazy(() => import('../pages/ResetPassword'));
const Profile: LazyExoticComponent<React.FC> = lazy(() => import('../pages/Profile'));
const Jobs: LazyExoticComponent<React.FC> = lazy(() => import('../pages/Jobs/Index'));
const DashboardLayout: LazyExoticComponent<React.FC> = lazy(() => import('../components/layout/Dashboard/DashboardLayout'));
const Dashboard: LazyExoticComponent<React.FC> = lazy(() => import('../pages/Dashboard/Index'));

export const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <Home />
    },
    {
        path: ROUTES.LOGIN,
        element: <Login />,
    },
    {
        path: ROUTES.REGISTER,
        element: <Register />,
    },
    {
        path: ROUTES.FORGOT_PASSWORD,
        element: <ForgotPassword />,
    },
    {
        path: ROUTES.RESET_PASSWORD,
        element: <ResetPassword />,
    },
    {
        path: ROUTES.PROFILE,
        element: <Profile />,
    },
    {
        path: ROUTES.JOBS,
        element: <Jobs />,
    },
    {
        path: ROUTES.DASHBOARD,
        element: <DashboardLayout />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
        ]
    }
]