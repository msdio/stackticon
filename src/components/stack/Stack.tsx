import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import { getIconDetail } from 'utils/allIconInfo';

const DropdownSvg = styled.div<{ hex: string }>`
  width: 50px;
  height: 50px;
  object-fit: cover;

  svg {
    width: 50px;
    height: 50px;
  }

  path {
    fill: ${(props) => props.hex};
  }
`;

interface StackProps {
  stackName: string;
}

const Stack = ({ stackName }: StackProps) => {
  const { title, svg, hex } = getIconDetail(stackName);

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Box
        borderRadius='12px'
        margin='5px'
        bgcolor='white'
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='70px'
        height='70px'
        border='1px solid #e1e1e1'
      >
        <DropdownSvg dangerouslySetInnerHTML={{ __html: svg }} hex={'#' + hex}></DropdownSvg>
      </Box>
      <Typography textAlign='center'>{title}</Typography>
    </Box>
  );
};

export default Stack;
