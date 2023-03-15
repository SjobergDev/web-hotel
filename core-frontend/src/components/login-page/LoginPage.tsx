import React from "react";
import './../../App.scss';
import { Navigate } from "react-router-dom";
import CustomAxiosHttp from "../../services/CustomAxiosHttp";

interface IState {
    username: string,
    password: string,
    redirect: boolean
}
interface IProps {

}

class LoginPage extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);

    }
    render(): React.ReactNode {
        
        if(this.state.redirect){
            return <Navigate to="/edit-page"/>
        }
        
        return (

            <div className="container">
                <form className="form-group">
                    <h3>Login to your account</h3>
                    <div className="form-group">
                        <label htmlFor="username">Name:</label>
                        <input className="form-control" type="text" id="username" name="username" placeholder="Your cool username" value={this.state.username} onChange={this.handleChange.bind(this)} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" id="password" name="password" placeholder="name@example.com" value={this.state.password} onChange={this.handleChange.bind(this)} />

                    </div>
                </form>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit" onClick={this.handleSubmit2.bind(this)}>Login</button>
                </div>
            </div>
        )
    }
    handleSubmit2(event: any) {
        let url = 'http://localhost:8080/api/user/login';
        let username = this.state.username;
        let password = this.state.password;
        CustomAxiosHttp.loginWithBasicAuth(username,password).then(res => {
            this.setState({"redirect": true})
        }
            )
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

export default LoginPage;