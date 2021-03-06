import "module-alias/register";
import Express from "express";
import Routes from "./routes";
import Morgan from "morgan";

const app = Express();

app.enable("etag");
app.use(Morgan("dev"));
app.use(Routes);

const server = app.listen(process.env.PORT || 80, () => {
    const address = server.address();
    if (address instanceof Object && "port" in address)
        console.log("Listening on port:", address.port);
});