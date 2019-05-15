require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');
const mongoose = require('mongoose');

const {
  PORT: port = 4000,
  MONGO_URI: mongoURI
} = process.env;

mongoose.connect(mongoURI, {
  useNewUrlParser: true
}).then(() => console.log('dbconnected'));

const app = new Koa();
const router = new Router();

//라우터 설정만 함 적용은 아니다.
router.use('/api', api.routes());


// 라우터 적용전에 bodyparser적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());



app.listen(port, () => {
  console.log(`listening to port ${port}`);
});