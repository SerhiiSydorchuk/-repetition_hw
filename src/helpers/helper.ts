export const retrieveLocalStorage =  <T> (key:string)=>{
    let object = localStorage.getItem(key) || '';
    if(!object){
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;
}
