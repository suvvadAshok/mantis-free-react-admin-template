import PropTypes from 'prop-types';
import Logo from './Logo';

const LogoSection = () => {
  return <Logo />;
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
