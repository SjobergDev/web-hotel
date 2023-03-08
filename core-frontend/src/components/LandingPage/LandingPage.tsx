import { DynamicPageModel } from "../DynamicPage/DyamicPage"
import './LandingPage.scss'

function LandingPage(props: { pageModel: DynamicPageModel }) {

    return (
    <div className="img-wrapper d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url("' + props.pageModel.landingPageUrl + '")' }}>
        <div>
            <h1 className="image-text">{props.pageModel.name}</h1>
        </div>
    </div>)

}

export default LandingPage