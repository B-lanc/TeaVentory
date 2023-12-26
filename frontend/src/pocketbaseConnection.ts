import PocketBase from 'pocketbase'
import type { TypedPocketBase } from '@/types/pocketbase-types'

const domain = import.meta.env.VITE_DOMAIN_NAME || 'localhost'
let url = ''
if (domain === "localhost"){
    url = "http://localhost:8080"
} else {
    url = "https://${domain}:8443"
}
const pb = new PocketBase(url) as TypedPocketBase

export default pb
