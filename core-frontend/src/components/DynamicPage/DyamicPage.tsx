import React from "react";
import axios from 'axios';

interface IProps {
    id: string
}

interface IState {
    name: string,
    landingPageUrl: string
}

class DynamicPage extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            name: '',
            landingPageUrl: ''
        }
        this.initPageData();
    }

    initPageData() {
        axios.get("http://localhost:8080/api/hotel-pages/" + this.props.id).then(result => {
            this.setState(result.data);
        }).catch(e => {
            debugger
        })
    }
    render() {
        return <div><h1> {this.state.name}</h1>
        <img src={this.state.landingPageUrl}></img></div>
    }

}

export default DynamicPage;