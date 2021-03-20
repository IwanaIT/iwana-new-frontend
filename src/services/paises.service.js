const ID_TOKEN_KEY = "paises";

export const getPaises = () => {
    return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const savePaises = token => {
    window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyPaises = () => {
    window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getPaises, savePaises, destroyPaises };