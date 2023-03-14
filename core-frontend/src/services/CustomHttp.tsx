class CustomHttpService{
  
    public static get(url:string): Promise<Response>{
       return fetch(url, {
            cache: 'no-cache', credentials: 'include', headers: this.getHeaders()
        })
    }
    public static post(url:string, body: any){
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(body),
            credentials: 'include',
            headers: this.getHeaders()
        }).catch(e =>{
            console.error(e);
        })
    }

    private static getHeaders(): Headers{
        return new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true'
        })
    }
}

export default CustomHttpService;