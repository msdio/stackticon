import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface PositionProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const MotionDiv = styled(motion.div)<PositionProps>`
  width: 70px;
  height: 70px;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0), 0 10px 20px rgba(0, 0, 0, 0);
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  z-index: 2;
`;

interface DraggableIconProps {
  constraints: React.RefObject<HTMLDivElement>;
  icon: React.ReactNode;
}

const DraggableIcon = ({
  constraints,
  icon,
  top,
  bottom,
  left,
  right,
}: DraggableIconProps & PositionProps) => {
  return (
    <MotionDiv
      drag
      dragElastic={2}
      dragConstraints={constraints}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      {icon}
    </MotionDiv>
  );
};

export default DraggableIcon;
