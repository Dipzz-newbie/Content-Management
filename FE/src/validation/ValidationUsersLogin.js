
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthRedirect = (token, options = {}) => {
    const navigate = useNavigate();
    const {
        authenticatedRoute = "/dashboard/contacts",
        unauthenticatedRoute = "/login",
        checkOnMount = true
    } = options;
    
    useEffect(() => {
        if (checkOnMount) {
            if (!token || token === "") {
                navigate(unauthenticatedRoute);
            } else {
                navigate(authenticatedRoute);
            }
        }
    }, [token, authenticatedRoute, unauthenticatedRoute, checkOnMount, navigate]);
};