let mongoose=require('mongoose');
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'fcc-Mail'; 
class Database {
    constructor(){
        this._connect()
    }
  _connect(){
      mongoose.connect(`mongodb://${server}/${database}`)
      .then(()=>{
          console.log('Database connection successful')
      })
      .catch(err=>{
          console.error('database connection error')
      })
  }
}
module.exports=new Database();