import styled from '@emotion/styled';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CustomContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: blue;
`;

const BackgroundColors = () => {
  const [colorSelected, setColorSelected] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const submitSkills = () => {
    if (!colorSelected && state) {
      setColorSelected(true);
      navigate('/loading', { state });
    }
  };

  return <CustomContainer></CustomContainer>;
};

export default BackgroundColors;
