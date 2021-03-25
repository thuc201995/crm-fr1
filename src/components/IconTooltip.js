import React from 'react';
import PropTypes from 'utils/propTypes';
import propTypes from '../utils/propTypes';
import { UncontrolledTooltip } from 'reactstrap';
const IconTooltip = ({ icon: Icon, id, tooltip, size, ...props }) => {
  return (
    <>
      <Icon cursor="pointer" size={size} id={id} {...props} />
      <UncontrolledTooltip placement="auto" target={id}>
        {tooltip}
      </UncontrolledTooltip>
    </>
  );
};

IconTooltip.propsType = {
  icon: PropTypes.component.isRequired,
  id: propTypes.string.isRequired,
  tooltip: propTypes.string.isRequired,
  size: propTypes.string,
};
IconTooltip.defaultProps = {
  size: '1.25em',
};
export default IconTooltip;
