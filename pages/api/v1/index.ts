import { NextApiRequest, NextApiResponse } from "next";
import dotenv from 'dotenv';
dotenv.config();

import { Db, MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://jonatask:03300210@nextrocket-db.hljyc.mongodb.net/?retryWrites=true&w=majority";
const MONGODB_DB = process.env.DB_NAME || "tudo";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  console.log("mongodb.ts => connectToDatabase()");
  console.log("mongodb.ts => MONGODB_URI: " + MONGODB_URI);
  console.log("mongodb.ts => MONGODB_DB: " + MONGODB_DB);
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Connect to cluster
  let client = new MongoClient(MONGODB_URI, {
    
  });
  console.log("mongodb.ts => client: ");
  client.connect((err, client) => {
    if (err) {
      console.log("mongodb.ts => client.connect() => err: " + err);
    } else {
      console.log("mongodb.ts => client.connect() => client: " + client);
    }
  });
  // console.log(client);
  await client.connect();
  let db = client.db("tudo");
  console.log("mongodb.ts => db: " + db);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      // get all the data
      const { db } = await connectToDatabase();
      const data = await db.collection("Item").find({}).toArray();
      res.status(200).json(data);
    }

    case "POST": {
      // create a new data
      const { db } = await connectToDatabase();
      const data = await db.collection("Item").insertOne(req.body);
      res.status(200).json(data);
    }
  }
}
