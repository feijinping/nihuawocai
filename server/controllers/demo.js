var mysql = require("mysql");
const { mysql: config } = require('../config')
module.exports=ctx=>{
  const DB = require('knex')({
    client: 'mysql',
    connection: {
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.pass,
      database: config.db,
      charset: config.char,
      multipleStatements: true
    }
  })
  DB.raw("select * from cSessionInfo").then(res => {
    console.log('数据库初始化成功！')
    process.exit(0)
  }, err => {
    throw new Error(err)
  })
  ctx.state.data = {
    msg:"hello nihao"
  }
}