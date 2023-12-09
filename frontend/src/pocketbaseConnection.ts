import PocketBase from 'pocketbase'

console.log(import.meta.env.VITE_DOMAIN_NAME)
const url = `http://${import.meta.env.VITE_DOMAIN_NAME || "localhost"}:8090`
const pb = new PocketBase(url)

export default pb
