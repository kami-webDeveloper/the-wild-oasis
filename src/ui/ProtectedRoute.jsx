/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isGettingUser, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isGettingUser) navigate("/login");
  }, [navigate, isGettingUser, isAuthenticated]);

  if (isGettingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
