import React from "react";
import PropTypes from "prop-types";
import './SectionHeader.scss'


interface IProps{
  header?: string,
  subHeader?: string
}
const SectionHeader : React.FC<IProps> = ({header,subHeader}) => {
  return (
    <div className="section-header-wrapper">
      <h1 className="section-header-text">{header}
      <div className="section-header-line"></div>
      </h1>
      
      { subHeader ? <h5 className="sub-header-text">{subHeader}</h5> : ""}
      
    </div>
  );
};
export default SectionHeader;
