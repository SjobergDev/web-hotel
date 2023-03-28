import React from "react";
import { IGalleryComponent, IGalleryComponent as IState } from "../../model/GalleryComponent";
import GeneralValuesEditComponent from "../edit-page/GeneralValuesEditComponent";

interface IProps {
  component: IGalleryComponent;
  handleEdit: (editedComponent: IGalleryComponent) => void;
}

class GalleryComponentEdit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { ...props.component };
  }

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    const name = evt.target.name;
    const { imageUrls } = this.state;

    if (name.startsWith("imageUrl")) {
      const index = parseInt(name.substring("imageUrl".length), 10);
      if (index >= 0 && index < imageUrls.length) {
        const newUrls = [...imageUrls];
        newUrls[index] = value;
        this.setState({ imageUrls: newUrls });
      }
    } else if (name === "maxImageHeight") {
      this.setState({ maxImageHeight: parseInt(value, 10) });
    }else if (name === "imagesToDisplay") {
        this.setState({ imagesToDisplay: parseInt(value, 10) });
      }else{
        this.setState({
          ...this.state,
          [name]: value
        })
      }
  };

  addImageUrl = () => {
    this.setState({
      imageUrls: [...this.state.imageUrls, ""],
    });
  };

  removeImageUrl = (index: number) => {
    const { imageUrls } = this.state;
    if (index >= 0 && index < imageUrls.length) {
      const newUrls = [...imageUrls];
      newUrls.splice(index, 1);
      this.setState({ imageUrls: newUrls });
    }
  };

  handleSave = () => {
    this.props.handleEdit(this.state);
  };

  render() {
    const { imageUrls, maxImageHeight } = this.state;

    return (
      <div>
        <h1>Edit the gallery</h1>
        <GeneralValuesEditComponent component={{...this.state}} handleChange={this.handleChange.bind(this)}></GeneralValuesEditComponent>
        {imageUrls.map((url, index) => (
          <div key={`imageUrl${index}`}>
           <label>Image url {index + 1}</label>
            <input
              className="form-control"
              type="text"
              id={`imageUrl${index}`}
              name={`imageUrl${index}`}
              placeholder={`Insert URL for image ${index + 1}`}
              value={url}
              onChange={this.handleChange}
            />
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => this.removeImageUrl(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button className="btn btn-success" type="button" onClick={this.addImageUrl}>
          Add image URL
        </button>
        <br />
        <label>
          Max image height:
          <input
            className="form-control"
            type="number"
            name="maxImageHeight"
            value={maxImageHeight ?? ""}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Images to display:
          <input
            className="form-control"
            type="number"
            name="imagesToDisplay"
            value={this.state.imagesToDisplay ?? ""}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className="btn btn-success" type="button" onClick={this.handleSave}>
          Save changes
        </button>
      </div>
    );
  }
}

export default GalleryComponentEdit;
