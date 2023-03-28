import React from 'react';
import HalfPageSectionHeader from '../general/HalfPageSectionHeader';
import { IMediaTextComponent } from './../../model/MediaTextComponent';

interface IMediaTextProps {
  component: IMediaTextComponent;
}

const MediaTextDisplayComponent: React.FC<IMediaTextProps> = ({ component }) => {


  return (
    <div className="row">
      <div className="col-md-6">
        <img src={component.mediaUrl} style={{maxHeight: component.mediaMaxHeight}} alt="Media" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <HalfPageSectionHeader header={component.header} subHeader={component.subHeading}/>
        <p>{component.text}</p>
      </div>
    </div>
  );
}

export default MediaTextDisplayComponent;
