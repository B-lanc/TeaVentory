import PocketBase from 'pocketbase'
import type { TypedPocketBase } from '@/types/pocketbase-types'

const domain = import.meta.env.VITE_DOMAIN_NAME || 'localhost'
const port = domain === 'localhost' ? 8080 : 8443
const url = `http://${domain || 'localhost'}:${port}`
const pb = new PocketBase(url) as TypedPocketBase

export default pb
