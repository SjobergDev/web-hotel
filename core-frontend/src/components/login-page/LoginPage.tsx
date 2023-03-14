import React from "react";
import axios from 'axios';
import './../../App.scss';
import { Buffer } from "buffer";
import { Navigate } from "react-router-dom";

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
        const base64encodedData = Buffer.from(`${username}:${password}`).toString('base64');
        fetch(url, {
            cache: 'no-cache', headers: new Headers({
                'Authorization': 'Basic ' + base64encodedData,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true'
            })
        })
            .then(res => res.json()).then(res => {
                console.log(res);
                debugger;
                localStorage.setItem("user", JSON.stringify(res));
                
                this.setState({"redirect": true})

            }
            );




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