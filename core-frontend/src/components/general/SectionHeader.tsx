import React from "react";
import PropTypes from "prop-types";
import './SectionHeader.scss'


interface IProps{
  text: string
}
const SectionHeader : React.FC<IProps> = ({text}) => {
  return (
    <div className="section-header">
      <h1 className="section-header__text">{text}</h1>
      <div className="section-header__line"></div>
    </div>
  );
};

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionHeader;
