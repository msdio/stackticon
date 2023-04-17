import { Box, Button, Typography } from '@mui/material';
import BackgroundCircle from 'components/BackgroundCircle';
import DraggableIcon from 'components/draggable-icon';
import Input from 'components/input';
import { JavascriptIcon, NodeJSIcon, ReactIcon, SpringIcon } from 'constants/icons';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LandingImage from '../../assets/images/landing-image.png';
import LandingLabel from '../../assets/images/landing-label.png';

const Landing = ({ isMobile }: { isMobile: boolean }) => {
  const [skills, setSkills] = useState<string[]>([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const changeSkillSet = (inputSkills: string[]) => {
    setSkills(inputSkills);
  };

  const submitSkills = () => {
    if (!buttonClicked && skills.length > 0) {
      navigate('/backgrounds', { state: skills });
      setButtonClicked(true);
    }
  };

  return (
    <Box
      ref={containerRef}
      width={'100vw !important'}
      height='95vh'
      display='flex'
      flexDirection='column'
      alignItems='center'
      position='relative'
      paddingTop='150px'
      gap={isMobile ? '10px' : '61px'}
      bgcolor='#f9f9f9'
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        zIndex='3'
        sx={{
          scale: isMobile ? '0.7' : '1',
        }}
      >
        <img src={LandingImage} alt='landing-image' width='406px' height='144px' />
        <img
          src={LandingLabel}
          alt='landing-label'
          width='312px'
          height='52px'
          style={{
            marginTop: '57px',
            transform: 'translateX(-5px)',
          }}
        />
        <Typography fontSize='24px' fontWeight='400' color='cg.4' marginTop='24px'>
          make skill sets for your project
        </Typography>
      </Box>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
          zIndex: '5',
          scale: isMobile ? '0.7' : '1',
        }}
      >
        <Input handler={changeSkillSet} />
        <Button
          variant='contained'
          color='success'
          size='large'
          onClick={submitSkills}
          sx={{
            zIndex: 50,
            backgroundColor: skills.length > 0 ? 'p.1' : 'info.main',
            width: '175px',
            height: '60px',
            borderRadius: '12px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          Create {isMobile ? '' : 'Set'}
        </Button>
      </div>

      <DraggableIcon constraints={containerRef} icon={<ReactIcon />} bottom='10%' right='5%' />
      <DraggableIcon constraints={containerRef} icon={<NodeJSIcon />} top='20%' right='20%' />
      <DraggableIcon constraints={containerRef} icon={<JavascriptIcon />} top='30%' left='13%' />
      <DraggableIcon constraints={containerRef} icon={<SpringIcon />} bottom='17%' left='25%' />

      <Box position='absolute' left='-170px' top='-209px' zIndex='1'>
        <BackgroundCircle />
      </Box>
      <Box position='absolute' right='-49px' bottom='-289px' zIndex='1'>
        <BackgroundCircle />
      </Box>
    </Box>
  );
};

export default Landing;
