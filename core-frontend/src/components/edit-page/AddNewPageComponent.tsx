import { IGalleryComponent } from "../../model/GalleryComponent";
import { HotelPageComponentEnum, IHotelPageComponent } from "../../model/HotelPageComponent";
import { ILandingPageMediaComponent } from "../../model/LandingPageMediaComponent";
import { IMediaTextComponent } from "../../model/MediaTextComponent";
import { ITestimonialsComponent } from "../../model/Testimonials";

interface IProps{
    addNewComponent(component: IHotelPageComponent): void
}
interface GenericProps{
    id: string,
    heading: string,
    subHeading: string
}

function AddNewPageComponent(props:IProps){
    
    return <div className="component-container edit-component-container">
        <h3>Add new components</h3>
        <button onClick={ () => addTestimonialComponent(props.addNewComponent)} className="btn btn-primary btn-lg"> Add testimonial component</button>
        <button onClick={ () => addLandingPageComponent(props.addNewComponent)} className="btn btn-primary btn-lg"> Add landing page component</button>
                <button onClick={() =>addMediaTextComponent(props.addNewComponent)} className="btn btn-primary btn-lg"> Add media text component</button>
                <button onClick={() => addGalleryComponent(props.addNewComponent)} className="btn btn-primary btn-lg"> Add gallery component</button>
        </div>
}
function generateComponentId() {
    return 'ID_' + new Date().getTime();
}

function addMediaTextComponent(addComponentFn: (component: IHotelPageComponent) => void) {
    const landingPageMediaComponent: IMediaTextComponent = {
        id: generateComponentId(),
        type: HotelPageComponentEnum[HotelPageComponentEnum.media_text_component],
        mediaUrl: "",
        text: "",
        header: ""
    }

    addComponentFn(landingPageMediaComponent);
}
function    addGalleryComponent(addComponentFn: (component: IHotelPageComponent) => void) {
    const galleryComponent: IGalleryComponent = {
        id: generateComponentId(),
        type: HotelPageComponentEnum[HotelPageComponentEnum.gallery_component],
        imageUrls: [],
        maxImageHeight: 2000,
        imagesToDisplay: 2
    }

    addComponentFn(galleryComponent);
}
function generateGenericComponentProps(): GenericProps {
    return{id:  generateComponentId(),
    heading: '',
    subHeading: ''
            }
}
function addLandingPageComponent(addComponentFn: (component: IHotelPageComponent) => void) {
    const landingPageMediaComponent: ILandingPageMediaComponent = {
        ...generateGenericComponentProps(),
        type: HotelPageComponentEnum[HotelPageComponentEnum.landing_page_media_component],
        landingPageUrl: ''
    }

    addComponentFn(landingPageMediaComponent);
}
function addTestimonialComponent(addComponentFn: (component: IHotelPageComponent) => void) {
    const testimonials: ITestimonialsComponent = {
        id: generateComponentId(),
        testimonials: [],
        type: HotelPageComponentEnum[HotelPageComponentEnum.testimonial_component]
    }
    testimonials.testimonials.push({
        id: 'id',
        name: 'aron',
        testimonial: 'This goes pretty well',
        country: 'Colombia',
        rating: 10

    })
    addComponentFn(testimonials);
}

export default AddNewPageComponent;

