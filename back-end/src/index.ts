import * as Koa from 'koa';
import * as Router from 'koa-router';

const port = 3001
const app = new Koa();
const router = new Router();

router.get('/*', async (ctx) => {
    ctx.body = 'OK';
});

app.use(router.routes());
app.listen(port);

console.log(`Server running on port ${port}`);
