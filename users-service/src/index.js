const app = require('./app');

const start = async () => {
  if (!process.env.START_PORT) throw new Error('START_PORT must be defined');
  // if (!process.env.DB_USERNAME) throw new Error("DB_USERNAME must be defined");
  // if (!process.env.DB_PASSWORD) throw new Error("DB_PASSWORD must be defined");
  // const res = await connectToDb();
  // if (res) console.log("Connected to DB!");
};

app.listen(process.env.START_PORT, () => {
  console.log(`Listening on port adadasdsdas${process.env.START_PORT}!!!`);
});

start();
