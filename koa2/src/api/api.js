import Client from 'mysql-pro'

const client = new Client({
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    database: 'mydb1',
    user: 'root',
    password: '12345678'
  }
})

class MysqlTest {
  constructor() {}
  async Mysql(ctx) {
    const data = await client.query('select * from users') // mysql的用法
    console.log(data)
    ctx.body = {
      code: 200,
      data
    }
  }
}

export default new MysqlTest()
