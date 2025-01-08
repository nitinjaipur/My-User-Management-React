import { lazy } from 'react';
const UserHomePage = lazy(() => import('./modules/user/UserHomePage'));
const UserDetailsPage = lazy(() => import('./modules/user/UserDetailsPage'));
const EditUserDetailsPage = lazy(() => import('./modules/user/EditUserDetailsPage'));
const UserSignUp = lazy(() => import('./modules/auth/userAuth/SignUp'));
const UserSignIn = lazy(() => import('./modules/auth/userAuth/SignIn'));

const USER_ROUTES = [
    {
        path: '/',
        component: UserHomePage
    },
    {
        path: '/user-details',
        component: UserDetailsPage
    },
    {
        path: '/edit-user',
        component: EditUserDetailsPage
    },
];

const ADMIN_ROUTES = [
    {
        path: '/',
        component: UserHomePage
    },
];

const authRoutes = [
    {
        path: '/',
        component: UserSignIn
    },
    {
        path: '/signup',
        component: UserSignUp
    },
];

const appRoutes = {
    user: USER_ROUTES,
    admin: ADMIN_ROUTES
};

export { authRoutes, appRoutes };