export const LOCAL_VERSION = "http://localhost:9000";
export const PRODUCTION_VERSION = "https://products-react-js.herokuapp.com";

export const END_POINT = process.env.NODE_ENV === "development" ? LOCAL_VERSION : PRODUCTION_VERSION;

export const PRODUCTS_API = END_POINT + "/api/products";
export const PRODUCTS_API_SEARCH = END_POINT + "/api/products/search";

export const USERS_API = END_POINT + "/api/table";
export const USERS_API_SEARCH = END_POINT + "/api/table/search";

export const SIGN_IN_API = USERS_API + "/sign-in";
export const SIGN_UP_API = USERS_API + "/sign-up";