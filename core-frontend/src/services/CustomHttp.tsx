
class CustomHttpService{
  
    public static get<T>(url:string): Promise<T>{
       return fetch(url, {
            cache: 'no-cache', credentials: 'include', headers: this.getHeaders()
        }).then(response =>{
            if (!response.ok) {
                throw new Error(response.statusText)
              }

            return response.json();
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