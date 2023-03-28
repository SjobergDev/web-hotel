import React, { useState } from 'react';
import { IGalleryComponent } from './../../model/GalleryComponent';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './GalleryComponentDisplay.scss'
import SectionHeader from '../general/SectionHeader';
import SectionSubeader from '../general/SectionSubheader';

interface IPropsGallery {
    component: IGalleryComponent;
}
const GalleryComponentDisplay: React.FC<IPropsGallery> = ({ component }) => {
    const [startIndex, setStartIndex] = useState(0);

    const handlePrevClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (startIndex + 1 < component.imageUrls.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const visibleImageUrls = component.imageUrls.slice(startIndex, startIndex + component.imagesToDisplay);

    console.log(visibleImageUrls)
    return (

            <Row>
                <SectionHeader header={component.heading} subHeader={component.subHeading}></SectionHeader>
                {visibleImageUrls.map((imageUrl, index) => (
                    <Col xs={12} md={6} key={index}>
                        <div key={index} className='carousel-image m-1' style={{ maxHeight: component.maxImageHeight }}>
                            <img
                                src={imageUrl}
                                alt=""
                                className="img-fluid"
                            />
                        </div>

                    </Col>
                ))}
                <Col className="d-flex justify-content-center align-items-center">
                    {startIndex > 0 && (
                        <Button variant="primary" onClick={handlePrevClick}>
                            Prev
                        </Button>
                    )}
                </Col>

                <Col className="d-flex justify-content-center align-items-center">
                    {startIndex + component.imagesToDisplay < component.imageUrls.length && (
                        <Button variant="primary" onClick={handleNextClick}>
                            Next
                        </Button>
                    )}
                </Col>

            </Row>
    );
};

export default GalleryComponentDisplay;
