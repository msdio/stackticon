import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { getSimpleIconInfo } from 'utils/simpleIconInfo';

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
  const { title, svg, hex } = getSimpleIconInfo(stackName);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        borderRadius='15%'
        margin='5px'
        bgcolor='white'
        alignItems='center'
        p='10px'
        width='70px'
        height='70px'
      >
        <DropdownSvg dangerouslySetInnerHTML={{ __html: svg }} hex={'#' + hex}></DropdownSvg>
      </Box>
      <p style={{ margin: '0', textAlign: 'center' }}>{title}</p>
    </div>
  );
};

export default Stack;
