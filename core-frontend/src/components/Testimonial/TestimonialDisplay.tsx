import React from 'react';
import { ITestimonial, ITestimonialsComponent } from '../../model/Testimonials';
import Flag from 'react-world-flags';
import './TestimonialDisplay.scss';

interface IProps {
  component: ITestimonialsComponent
}

const TestimonialDisplay: React.FC<IProps> = ({ component }) => {
  return (
    <div className='container' >
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {component.testimonials.map((testimonial) => (


        <div key={testimonial.id} className="col">
          <div className="card h-100 shadow">

            <div className="card-body">
              <div className='text-center'>

                <div className='d-flex justify-content-center'>
                  <div className='flag-icon '>

                    <Flag code={"COL"} />
                  </div>
                </div>
                <h3 className="me-1">{testimonial.rating}/10</h3>
              </div>
              <p className="card-text">{testimonial.testimonial}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <div className="fw-bold">{testimonial.name}</div>

            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TestimonialDisplay;