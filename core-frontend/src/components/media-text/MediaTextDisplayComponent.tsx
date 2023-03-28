import React from 'react';
import SectionHeader from '../general/SectionHeader';
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
        <h3>TODO fix half page header</h3>
        <p>{component.text}</p>
      </div>
    </div>
  );
}

export default MediaTextDisplayComponent;
