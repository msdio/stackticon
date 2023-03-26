import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Stacks from 'components/stacks';
import { tetromino1, tetromino2, tetromino3, tetromino4 } from 'constants/animations';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getCreatedImageUrl } from 'services/firebase/storage';
import type { BgColorOption } from 'types/backgroundColors';
import { htmlToPng } from 'utils/imageConverter';

const Tetrominos = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-112px, -96px);
`;

const Tetromino = styled.div`
  width: 96px;
  height: 112px;
  position: absolute;
  transition: all ease 0.3s;
  background: url('data:image/svg+xml;utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 684"%3E%3Cpath fill="%23010101" d="M305.7 0L0 170.9v342.3L305.7 684 612 513.2V170.9L305.7 0z"/%3E%3Cpath fill="%23fff" d="M305.7 80.1l-233.6 131 233.6 131 234.2-131-234.2-131"/%3E%3C/svg%3E')
    no-repeat top center;
`;

const TetrominoBox1 = styled(Tetromino)`
  animation: ${tetromino1} 1.5s ease-out infinite;
`;
const TetrominoBox2 = styled(Tetromino)`
  animation: ${tetromino2} 1.5s ease-out infinite;
`;
const TetrominoBox3 = styled(Tetromino)`
  animation: ${tetromino3} 1.5s ease-out infinite;
  z-index: 2;
`;
const TetrominoBox4 = styled(Tetromino)`
  animation: ${tetromino4} 1.5s ease-out infinite;
`;

const Loading = () => {
  const { color } = useParams();
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);
  const { state } = useLocation();

  const navigateToResult = (resultUrl: string) => {
    navigate('/result', { state: resultUrl });
  };

  const makeResult = async () => {
    const imageRef = await htmlToPng(targetRef);
    const resultUrl = imageRef && (await getCreatedImageUrl(imageRef));
    if (resultUrl) {
      navigateToResult(resultUrl);
      return;
    }
    navigate('/');
    throw new Error('이미지를 만드는 데 실패했습니다 다시 시도해주세요');
  };

  useEffect(() => {
    makeResult();
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Tetrominos>
          <TetrominoBox1 />
          <TetrominoBox2 />
          <TetrominoBox3 />
          <TetrominoBox4 />
        </Tetrominos>
        <Typography
          variant='h4'
          sx={{
            transform: 'translateY(100px)',
          }}
        >
          Making Image...
        </Typography>
      </div>
      <Stacks ref={targetRef} selecteds={state} color={color as BgColorOption} />
    </div>
  );
};

export default Loading;
