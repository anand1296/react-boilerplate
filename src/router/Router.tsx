import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../components/global/Layout/Layout'
import { Provider, useSelector } from 'react-redux'
import appStore, { RootState } from '../utils/store/app.store'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import Home from '../pages/Home/Home'

const appRoutes = createBrowserRouter([
    {
        element: (
            <Provider store={appStore}>
                <Layout />
            </Provider>
        ),
        errorElement: <PageNotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
])

const AppRouter = () => {
    return <RouterProvider router={appRoutes} />
}

export default AppRouter
