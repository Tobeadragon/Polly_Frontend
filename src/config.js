const googleid = process.env.REACT_APP_GOOGLECLIENTID || "640190674721-6u63fj5osev01q9m5tkm96j9o91h88ur.apps.googleusercontent.com"
const backend = process.env.REACT_APP_BACKENDURL || "http://localhost:5000"
const frontend = process.env.REACT_APP_FRONTENDURL ||  "http://localhost:3000"

module.exports = {googleid, backend, frontend}