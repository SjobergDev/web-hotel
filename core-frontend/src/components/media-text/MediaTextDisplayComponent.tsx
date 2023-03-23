import React from 'react';
import { IMediaTextComponent } from './../../model/MediaTextComponent';

interface IMediaTextProps {
  component: IMediaTextComponent;
}

const MediaTextDisplayComponent: React.FC<IMediaTextProps> = ({ component }) => {
  const { mediaUrl, text } = component;

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={mediaUrl} alt="Media" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default MediaTextDisplayComponent;
