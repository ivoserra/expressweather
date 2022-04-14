import {Low, JSONFile} from 'lowdb'

const adapter = new JSONFile('db.json')
const db = new Low(adapter)


// reads data from our storage file (if one exists)
// the data that was read will go into 'db.data'
await db.read()

db.data = db.data || {}
db.data.requests= db.data.requests || []
// db.data.responses= db.data.responses || []



export default db