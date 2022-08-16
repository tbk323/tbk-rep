import Mock from 'mockjs'

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-400'
});

Mock.mock('/api/user', {
    'list|20': [{
        id: "@id()",//得到随机的id
        nickname: "@cname()",//名字
        created_at: "@date()",//随机生成日期
        avatar: "@image('200x200')",//头像
        status: "@natural(0,1)",//状态
        mobile: `13${"@natural(111111111, 999999999)"}`
    }]
})
