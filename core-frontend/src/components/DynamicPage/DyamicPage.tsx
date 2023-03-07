import React from "react";

interface IProps{
    id: string
}

interface IState{

}

class DynamicPage extends React.Component<IProps,IState>{

    render() {
        return <h1>{this.props.id}</h1>
    }

}

export default DynamicPage;