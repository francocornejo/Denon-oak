import {Application, Router, Context } from "https://deno.land/x/oak/mod.ts"

const app = new Application();
const router = new Router();

router.get("/", (ctx: Context) => {
    ctx.response.status = 200
    ctx.response.body = `
    <!DOCTYPE html>
        <html>
            <head><title>Servidor con OAK!</title></head>
            <body style="background-color:#006378">
                <h1 style="color:#979797">Mi primer servidor con OAK</h1>
                <h3 style="color:#979797">Y renderizado por Templates Strings</h3>
            </body>
        </html>
    `
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
console.log("Servidor escuchando en el puerto 3000 con DENON");