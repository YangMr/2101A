interface storTypes {
    set(key:string, value : string) : void;
    get(key:string) : string;
    remove(key:string) : void;
}

class Storages implements storTypes {
    set(key:string,value:string){
        localStorage.setItem(key,JSON.stringify(value));
    }
    get(key:string):any{
        let value = localStorage.getItem(key)
        if(value != null){
            return JSON.parse(value)
        }
        return null;
    }
    remove(key:string){
        localStorage.removeItem(key)
    }
}

let storage = new Storages();

export default storage