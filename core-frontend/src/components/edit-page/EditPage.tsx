import React from "react";
import CustomHttpService from "../../services/CustomHttp";

interface IState {
    name: string,
    landingPageUrl: string,
    username: string
}
interface IProps {

}
class EditPage extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            username: '',
            name: '',
            landingPageUrl: ''
        };

        
        this.handleChange.bind(this);
    }

    render() {

        return (
        <div className="container"><h1>Hello {this?.state?.username}</h1>
            <h3> Edit {this?.state?.name}</h3>
            <input name="landingPageUrl" onChange={this.handleChange.bind(this)} className="form-control" type="text" value={this?.state?.landingPageUrl}></input>
            <button onClick={this.handleSave.bind(this)}>Save</button>
        </div>)
    }
    componentDidMount(){
        this.loadUserPage();
    }
    loadUserPage() {

        let user = JSON.parse(localStorage.getItem("user") + "");
        const username = user.username;
        let url = 'http://localhost:8080/api/hotel-pages/by-user/' + username;

     
        CustomHttpService.get(url).then(res => res.json()).then(res => {

                console.log(res);
                if (res?.length && res.length > 0) {
                    const page = res[0];
                    this.setState(
                        res[0]
                    );
                }
            }
            ).catch(e => {
                console.error(e);
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
    handleSave(evt: any){
        CustomHttpService.post("http://localhost:8080/api/hotel-pages/",this.state);
    }
}

export default EditPage