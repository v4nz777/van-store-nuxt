export default () => {


    const saveToLocalStorage = (key:string, value:any)=> {
        if(value === null || value === undefined)return
        const stringedValue = JSON.stringify(value)
        localStorage.setItem(key,stringedValue)
    }
    
    const getFromStorage = (key:string) => {
        if(process.browser){
            const storedItem = localStorage.getItem(key)
            if(storedItem === undefined||storedItem === null)return null
            try {
                return JSON.parse(storedItem)
            }catch(error){
                console.log(`Cannot parse key ${key}:`, error)
                return null
            }
            
        }
    }

    return { saveToLocalStorage, getFromStorage}
}