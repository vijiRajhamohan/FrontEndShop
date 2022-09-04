export function Adminprivateroute({ children }) {
    const auth = window.localStorage.getItem("adminToken");
    return auth ? children : window.location = "/admin"
}

export function Userprivateroute({ children }) {
    const auth = window.localStorage.getItem("accessToken");
    return auth ? children : window.location = "/login"
}