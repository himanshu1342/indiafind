import PocketBase from 'pocketbase'

// Replace this URL after deploying PocketBase on Fly.io
const POCKETBASE_URL = import.meta.env.VITE_POCKETBASE_URL || 'http://127.0.0.1:8090'

const pb = new PocketBase(POCKETBASE_URL)

export default pb
