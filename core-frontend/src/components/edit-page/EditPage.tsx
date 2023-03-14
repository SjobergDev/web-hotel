import React from "react";

interface IState{
    name: string,
    landingPageUrl: string,
    username: string
}
interface IProps{

}
class EditPage extends React.Component<IProps,IState>{

    constructor(props: IProps){
        super(props);
        this.setState({
            username: '',
            name: '',
            landingPageUrl: ''
        })
        
        this.loadUserPage();
    }

    render(){
        
        return <div className="container"><h1>edit my paaaaage {this?.state?.username}</h1>
        {this?.state?.landingPageUrl}</div>
    }

    loadUserPage(){
        
        let user = JSON.parse(localStorage.getItem("user") + "");
        const username = user.username;
        let url = 'http://localhost:8080/api/hotel-pages/by-user/' + username;
        
        fetch(url, {
            cache: 'no-cache', credentials: 'include', headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true'
            })
        })
            .then(res => res.json()).then(res => {
                
                console.log(res);
                if(res?.length && res.length > 0){
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
}

export default EditPage