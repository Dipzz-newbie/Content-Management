
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const navigate = useNavigate();
    
    const validationUser = (token) => {
        if (!token || token === "") {
            navigate("/login");
        } else {
            navigate("/dashboard/contacts");
        }
    };
    
    const navigateByAuth = (token, authenticatedRoute = "/dashboard/contacts", unauthenticatedRoute = "/login") => {
        if (!token || token === "") {
            navigate(unauthenticatedRoute);
        } else {
            navigate(authenticatedRoute);
        }
    };
    
    const checkAuthOnMount = (token) => {
        validationUser(token);
    };
    
    return {
        validationUser,
        navigateByAuth,
        checkAuthOnMount
    };
};

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