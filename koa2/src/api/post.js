class postTest {
  constructor() {}
  async posttest(ctx) {
    let { body } = ctx.request // 前端post传来数据存入这里
    console.log(body)
    console.log(ctx.request)
    ctx.body = {
      // 将存在{ body }里面的数据取出来，放在这里
      ...body
    }
  }
}

export default new postTest()
