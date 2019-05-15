const Post = require('models/post');
const {
  ObjectId
} = require('mongoose').Types;
const Joi = require('joi');

exports.checkObjectId = (ctx, next) => {
  const {
    id
  } = ctx.params;

  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return null;
  }

  return next();
}


/* 포스트 작성
  POST /api/posts
  { title, body, tags }
*/

exports.write = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required()
  });

  // 첫 번째는 파라미터는 검증할 객체, 두번재는 스키마
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const {
    title,
    body,
    tags
  } = ctx.request.body;

  const post = new Post({
    title,
    body,
    tags
  });

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
}

/* 포스트 목록 조회
   GET /api/posts
*/

exports.list = async (ctx) => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(e, 500);
  }
}

/* 특정 포스트 조회
   GET /api/posts/:id
*/
exports.read = async (ctx) => {
  const {
    id
  } = ctx.params;

  try {
    const post = await Post.findById(id).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
}

/* 특정 포스트 제거
   DELETE /api/posts/:id
*/

exports.remove = async (ctx) => {
  const {
    id
  } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }
}


/* 포스트 수정 (특정 필드 변경)
  PATCH /api/posts/:id
  { title, body }
*/

exports.update = async (ctx) => {
  const {
    id
  } = ctx.params;

  try {

    // 3번째 인자는 option객체 new true해주지 않으면 이전 객체가 반환 되어짐

    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true
    }).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
}