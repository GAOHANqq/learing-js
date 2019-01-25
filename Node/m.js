const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/goudan',
  {useNewUrlParser: true});

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, default: 'goudan'},
  password: {type: String, required: true, ref: ''},
  userinfo: {
    personalized: {type: Number},
    shuzetime: {type: Date}
  },
  a: {type: [ {b: {type: Number}} ]},
  age: {type: Number}
});
/*

{
  username: '',
  password: '',
  a: [ {b: 234}, {b: 66} ]
}

* */
// 创建表 数据的集合 document.getbyclass [ {} ]
const user = mongoose.model('user', userSchema);

// 增
// 数据库操作 model.xxx()
/*user.create({
  username: '大锤',
  password: '456',
  userinfo: {
    shuzetime: new Date()
  }
});*/
// 1. 回调
/*user.create({
  username: '大锤',
  password: '123',
  userinfo: {
    shuzetime: new Date()
  }
}, function (err, data) {
  console.log(err, data);
});*/
// 2. es6 promise
/*user.create({
  username: '大锤',
  password: '123',
  userinfo: {
    shuzetime: new Date()
  }
}).then(function (data) {
  // 成功
}).catch(function (err) {
  // 失败
});*/

// 3. async 当函数前面加上async关键字之后, 这个函数会变成同步函数
/*async function f() {
  // await 等待
  const data = await user.create({
    username: 'abc',
    password: '123',
    userinfo: {
      shuzetime: new Date()
    }
  });

  console.log(data);
}
f();*/


/*async function f() {
  await new Promise(function (a) {
    setTimeout(function () {
      console.log(1);
      a()
    }, 5000)
  });
  await new Promise(function (a) {
    setTimeout(function () {
      console.log(2);
      a()
    }, 2000)
  });
  // 2个同时执行
  console.log(3);
}
f();*/

/*Promise.all([
  new Promise(function (a) {
    setTimeout(function () {
      console.log(2);
      a()
    }, 2000)
  }),
  new Promise(function (a) {
    setTimeout(function () {
      console.log(1);
      a()
    }, 5000)
  })
]).then(function () {
  console.log(3);
});*/


// 删
// 删除一条数据靠前的
/*user.deleteOne({username: '大锤'}, function (err, data) {
  console.log(err);
  console.log(data);
});*/
// 删除所有匹配的数据
// user.deleteMany();

// 改
// 1.条件判断 修改哪条数据 2. 吧什么值修改成什么
// updateOne, updateMany
/*user.updateOne({username: '大锤'}, {$set: {password: '789'}}, function (err, data) {
  console.log(err);
  console.log(data);
  console.log(data);
});*/
// $set 添加 修改
/*user.updateOne({username: '大锤'}, {$set: {userinfo: {personalized: 666}}}, function (err, data) {
  console.log(err);
  console.log(data);
});*/

/*
*
{
  username: '',
  password: '',
  a: [ {b: 234}, {b: 66} ]
}
* */

// 往数组里添加一条数据  往数组a 里添加添加 一条数据   数据值: {b:111}
/*user.updateOne({username: 'goudan'}, {$push: {a: {b: 111}}}, function () {

});*/
// 从数组里删除符合条件的数据  删除数组a里 对象为{b:111}的数据
/*user.updateOne({username: 'goudan'}, {$pull: {a: {b: 111}}},function () {

});*/
// 更新数组里的数据 更新数组a 下标为1的数据  把这条数据的属性b 改为222
/*user.updateOne({username: 'goudan'}, {$set: {'a.0.b': 333}}, function () {
  // var arr = [];
  // a[0].b = 333
});*/

// 查找

// 某一个
/*user.findOne({_id: '大锤'}, function (err, data) {
  console.log(data);
});*/
// 查找所有
/*user.find(function (err, data) {
  console.log(data);
});*/
// 根据id查找
/*user.findById('5c2f55038ffa03111c24992f', function (err, data) {
  console.log(data);
});*/
