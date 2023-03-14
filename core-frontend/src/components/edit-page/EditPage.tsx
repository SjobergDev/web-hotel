import React from "react";

interface IState{

}
interface IProps{

}
class EditPage extends React.Component<IProps,IState>{

    render(){
        let user = JSON.parse(localStorage.getItem("user")+ "");
        return <h1>edit my paaaaage {user.username} </h1>
    }
}

export default EditPage