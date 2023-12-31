const express = require(`express`);
const dotenv = require(`dotenv`);
const morgan = require(`morgan`)
const bodyparser = require(`body-parser`)
const path = require(`path`)

const app = express();

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

// log requests0
app.use(morgan(`tiny`))

// parse request to body-parser
app.use(bodyparser.urlencoded({extended : true}))

// set view engine
app.set(`view engine`,`ejs`)

// load assets
app.use(`/css`,express.static(path.resolve(__dirname,`assets/css`)))
app.use(`/js`,express.static(path.resolve(__dirname,`assets/js`)))
app.use(`/img`,express.static(path.resolve(__dirname,`assets/img`)))

// load routers
app.use(`/`,require(`./server/routes/router`))

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
