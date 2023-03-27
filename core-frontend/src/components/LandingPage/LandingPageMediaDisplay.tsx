import React from "react";
import { ILandingPageMediaComponent, ILandingPageMediaComponent as IState } from "../../model/LandingPageMediaComponent";
import './LandingPageMediaDisplay.scss'
interface IProps {
    component: ILandingPageMediaComponent
}


class LandingPageMediaDisplay extends React.Component<IProps, IState>{

    componentDidMount(): void {
        this.setState(this.props.component)
    }
    render(): React.ReactNode {
        const loaded = !!this.state?.landingPageUrl;

        return (
            <div className="img-wrapper d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url("' + this.state?.landingPageUrl + '")' }}>
                <div className="container text-center">
                    <h1 className="image-text">TEMP NAME NEED TO ADD TO MODEL</h1>
                </div>
            </div>)
    }
}

export default LandingPageMediaDisplay