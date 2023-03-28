import React from "react";
import './HalfPageSectionHeader.scss'


interface IProps{
  header?: string,
  subHeader?: string
}
const HalfPageSectionHeader : React.FC<IProps> = ({header,subHeader}) => {
  return (
    <div className="half-page-section-header-wrapper">
      <h2 className="half-page-section-header">{header}
      </h2>
      { subHeader ? <h6 className="half-page-sub-header-text">{subHeader}</h6> : ""}
      
    </div>
  );
};
export default HalfPageSectionHeader;
