import axios from "axios";
import { Buffer } from "buffer";

axios.interceptors.request.use(config => {
    console.log("Request sent - method: " + config.method + ", url: " + config.url);
    return config;
});
axios.interceptors.response.use(config => {
    console.log("Response received - statuscode: " + config.status + ", data: ", config.data);
    return config;
});


class CustomAxiosHttp{
  
    
    public static get<T>(url:string): Promise<T>{
        return axios.get(url,{withCredentials: true, headers: this.getAxiosHeaders()}).then(res =>{
            return res.data;
        });
    }
      
    public static post(url:string, data: any){
        return axios.post(url,data,{withCredentials: true, headers: this.getAxiosHeaders()});
    }

    public static loginWithBasicAuth(username:string,password:string){
        const url = 'http://localhost:8080/api/user/login';
        const base64encodedData = Buffer.from(`${username}:${password}`).toString('base64');
        const headers: any = this.getAxiosHeaders() ;
        headers.Authorization = 'Basic ' + base64encodedData;
        const config = {withCredentials: true, headers: headers}
        return axios.get(url,config).then(res =>{
            debugger;
            localStorage.setItem("user", JSON.stringify(res.data));
            return res;
        })
    }



    private static getAxiosHeaders(){
        return {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true'
        }
    }

}

export default CustomAxiosHttp;