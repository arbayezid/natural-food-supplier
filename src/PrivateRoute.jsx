import React, { useContext } from 'react';
import { AuthContext } from './components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <Spinner animation="border" variant="primary" />
    }
    
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;