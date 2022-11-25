

export const setLocalStorage = (key: string, value:any) => {
    localStorage.setItem(key, value);
}
export const getLocalStorage = (key:string) => {
        const result = localStorage.getItem(key);
    return !!result && JSON.parse(result);
}

export const RemoveLocalStorage = (key: string) => {

    localStorage.removeItem(key);
}