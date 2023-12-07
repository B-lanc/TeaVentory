import PocketBase from 'pocketbase'

//TODO: somehow properly implement production env, where the url is the backend url
const url = `localhost:8090`
const pb = new PocketBase(url)

export default pb
