import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";

import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import config from "./config.js";
import indexRouter from "./api/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = config.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "frontend/build")));

app.use(morgan("tiny"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  session({
    secret: "test",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 10 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});

export default app;
