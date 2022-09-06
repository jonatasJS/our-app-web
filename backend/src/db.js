const mongosse = require("mongoose");
const URI =
  "mongodb+srv://admin:03300210@cluster-teste.igkczc8.mongodb.net/ourAppDB?retryWrites=true&w=majority";

const connectDB = async () => {
  let data = null;
  const res = await mongosse.connect(URI, {}, async (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database connected");
      data = await res?.collection("UserTotalItens");
      console.log(res);
      console.log(data);
    }
  });

  return {};
};

module.exports = connectDB;
