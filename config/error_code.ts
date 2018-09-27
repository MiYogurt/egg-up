// 1 服务器错误 2 用户错误
// 00 模块号
// 00 具体错误代码

const Ok = body => ({ errno: 0, message: '请求成功', body });

// ----------
const ValidatorError = (message, body) => ({ errno: 20001, message, body });

// ----------

export { ValidatorError, Ok };
