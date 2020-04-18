export const LOCAL_VERSION = "http://localhost:9000";
export const PRODUCTION_VERSION = "https://products-react-js.herokuapp.com";

export const END_POINT = process.env.NODE_ENV === "development" ? LOCAL_VERSION : PRODUCTION_VERSION;

export const PRODUCTS_API = END_POINT + "/api/products";
export const PRODUCTS_API_SEARCH = END_POINT + "/api/products/search";

export const USERS_API = END_POINT + "/api/users";

export const NEWS_API = "http://newsapi.org/v2/top-headlines";