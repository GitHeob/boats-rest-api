const app = require ('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(window.location.href + `it's alive on ${PORT}`)
);