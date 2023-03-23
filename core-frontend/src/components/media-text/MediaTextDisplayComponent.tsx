import React from 'react';
import { IMediaTextComponent } from './../../model/MediaTextComponent';

interface IMediaTextProps {
  component: IMediaTextComponent;
}

const MediaTextDisplayComponent: React.FC<IMediaTextProps> = ({ component }) => {


  return (
    <div className="row">
      <div className="col-md-6">
        <img src={component.mediaUrl} alt="Media" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h3>{component.header}</h3>
        <p>{component.text}</p>
      </div>
    </div>
  );
}

export default MediaTextDisplayComponent;
