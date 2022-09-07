const mongosse = require("mongoose");
const URI =
  "mongodb+srv://admin:03300210@cluster-teste.igkczc8.mongodb.net/ourAppDB?retryWrites=true&w=majority";

mongosse
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));
