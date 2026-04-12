import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb://parth_db_user:jYpj2ZUlIZZmfpO4@ac-ycqg65j-shard-00-00.lelnkg5.mongodb.net:27017,ac-ycqg65j-shard-00-01.lelnkg5.mongodb.net:27017,ac-ycqg65j-shard-00-02.lelnkg5.mongodb.net:27017/auth-demo?ssl=true&replicaSet=atlas-dzxmtk-shard-0&authSource=admin&appName=Cluster0",
  );

  return client;
}
