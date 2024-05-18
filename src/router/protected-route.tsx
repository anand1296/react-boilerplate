import { Outlet } from 'react-router'

const ProtectedRoute = () => {
    // const userDetails = useSelector((state: RootState) => state.user);

    return (
        // Boolean(useSelector((state: RootState) => state.user)) ? <Outlet/> : <Navigate to={'login'}/>
        // userDetails || getUserFromToken() ? <Outlet/> : <Navigate to={'login'}/>
        // isAuthenticated() ? <Outlet /> : <Navigate to={'login'} />
        <Outlet />
    )
}

export default ProtectedRoute
