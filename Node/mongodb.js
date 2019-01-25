const mongoose = require('mongoose');

// 连接mongodb数据
// 1. 连接地址

// goudan  数据库名字随意的规定
mongoose.connect('mongodb://localhost:27017/goudan', {useNewUrlParser: true});

mongoose.connection.once('open', function () {
  console.log('连接成功');
});
mongoose.connection.once('error', function () {
  console.log('连接失败');
});

// 设计数据库 ();

// required 必填  * 不允许为空
// ref 表关联
const userSchema = new mongoose.Schema({
  username: {type: String, required: true, default: 'goudan'},
  password: {type: String, required: true, ref: ''},
  userinfo: {
    personalized: {type: Number},
    shuzetime: {type: Date}
  },
});
// Schema 规定数据格式
const articleSchema = new mongoose.Schema({
  title: {type: String},
  author: { ref: 'user', type: mongoose.Schema.Types.ObjectId },
  pinglun: [   {type: String}   ]
});
// 发布文章 肯定是已经注册了的用户(数据库里用户信息是已经存在了的)
// 保存文章数据 不需要重复去保存用户数据
// ref: 'user' 查询数据的时候去哪里进行查询
// 保存的数据是 id

// 建表
const user = mongoose.model('user', userSchema);
const article = mongoose.model('article', articleSchema);

// 保存数据
/*user.create({
  password: '123'
});*/

// 登陆

user.find(function (err, data) {
  console.log(data);
  article.create({
    title: '文章1',
    author: data[0]._id
  })
});

// exec = 执行前面的操作
article.find().populate('author', 'username').exec(function (err, data) {
  console.log(data);
});







// 定义
suser = {
  username: {type: String},
  pwd: {type: String},
  info: {
    gexingqianming: {},
    zaixianzhuagntai: {}
  }
};

var node /*数据库*/ = {
  user: [  ],
  article: []
};
// 添加数据的时候必须按照一定的格式进行添加
node.user.push({
  user: 'goudan'
});



