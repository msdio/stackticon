import LandingTitleImage from '../../assets/images/landing-image.png';
import LandingLabelImage from '../../assets/images/landing-label.png';

const LandingImage = () => (
  <img src={LandingTitleImage} alt='landing-image' width='406px' height='144px' />
);

const LandingLabel = ({ styles }: { styles?: Record<string, string> }) => (
  <img
    src={LandingLabelImage}
    alt='landing-label'
    width='312px'
    height='52px'
    style={{
      transform: 'translateX(-5px)',
      ...styles,
    }}
  />
);

export { LandingImage, LandingLabel };
