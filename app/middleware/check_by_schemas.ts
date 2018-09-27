export default function checkBySchemas(name: string, where?: any) {
  return async (ctx, next) => {
    await ctx.verify(name, where);
    return next();
  };
}
