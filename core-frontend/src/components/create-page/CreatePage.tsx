import React from "react";
import axios from 'axios';
import './../../App.scss'

interface IProps {

}

interface IState {
    name: string,
    landingPageUrl: string
}

class CreatePage extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = { name: '', landingPageUrl: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(): React.ReactNode {
        return <form className="form-group" onSubmit={this.handleSubmit}>
            <h3>Create hotel page</h3>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" id="name" name="name" placeholder="name@example.com" value={this.state.name} onChange={this.handleChange} />

            </div>
            <div className="form-group">
                <label htmlFor="landingPageUrl">Landing page url:</label>
                <input className="form-control" type="text" id="landingPageUrl" name="landingPageUrl" placeholder="name@example.com" value={this.state.landingPageUrl} onChange={this.handleChange} />

            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    }

    handleSubmit(event: any) {
        axios.post("api/hotel-pages/", this.state).then(result => {
            console.log(result)
        }).catch(e => {
        });


    }

    handleChange(evt: any) {
        const value = evt.target.value;
        this.setState({
            ...this.state,

            [evt.target.name]: value
        }
        );
    }
}

export default CreatePage;