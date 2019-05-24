const { ADMIN_PASS: adminPass } = process.env;

exports.login = ctx => {
  const { password } = ctx.request.body;
  if (adminPass === password) {
    ctx.body = {
      success: true
    };

    ctx.session.logged = true;
  } else {
    ctx.body = {
      success: false
    };
    ctx.status = 401; // Unauthorized
  }
};

exports.check = ctx => {
  ctx.body = {
    // ''일 때도 false 반환
    logged: !!ctx.session.logged
  };
};

exports.logout = ctx => {
  ctx.session = null;
  ctx.status = 204; // No Content
};
