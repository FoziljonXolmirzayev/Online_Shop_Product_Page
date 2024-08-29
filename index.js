const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reviewsRoute = require("./routes/reviews");
const authRoutes = require("./routes/auth");
const { authenticationChecker } = require("./middlewares/auth");
const blogRoute = require("./routes/blog");
const commentRoute = require("./routes/comments");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./constants/swagger");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const mainRoute = require("./routes/products");
const projectRoute = require("./routes/project");

const PORT = 7000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", authenticationChecker, mainRoute);
app.use("/reviews", reviewsRoute);
app.use("/auth", authRoutes);
app.use("/blog", blogRoute);
app.use("/comment", commentRoute);
app.use("/project", projectRoute);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT);
mongoose
  .connect("mongodb://localhost:27017/president-shop")
  .then(() => {
    console.log("Am i connected ?");
  })
  .catch(console.log());

// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: "onlyone",
//     fields: () => ({
//       message: {
//         type: GraphQLString,
//         resolve: () => "Hi backend",
//       },
//     }),
//   }),
// });
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );
