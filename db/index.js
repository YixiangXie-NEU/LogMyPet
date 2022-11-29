import { MongoClient, ObjectId } from "mongodb";
import config from "../config.js";
// import passport from "passport";
// import LocalStrategy from "passport-local";

// const mongoURL = config.MONGO_URL || "mongodb://localhost:27017";
const mongoURL =
  config.MONGO_URL ||
  "mongodb+srv://dylantse:IHcuwrJ9F648zvYH@cluster0.vrljs4f.mongodb.net/?retryWrites=true&w=majority";
const DB_NAME = "logMyPetDB";
const PET_COLLECTION_NAME = "pets";
const USER_COLLECTION_NAME = "users";
const RECORD_COLLECTION_NAME = "records";
const CATEGORY_COLLECTION_NAME = "categories";
const PAGE_SIZE = 20;

// const strategy = new LocalStrategy(async function verify(
//   username,
//   password,
//   cb
// ) {
//   let client = new MongoClient(mongoURL);

//   const result = await client
//     .db(DB_NAME)
//     .collection(USER_COLLECTION_NAME)
//     .find({ username: username })
//     .toArray();

//   const user = result[0];
//   if (!user) return cb(null, false);
//   user.id = result[0]._id.toString();

//   if (password == result[0].password) {
//     return cb(null, user);
//   } else {
//     return cb(null, false);
//   }
// });

// passport.use(strategy);

// passport.serializeUser(function (user, cb) {
//   process.nextTick(function () {
//     cb(null, { id: user.id, username: user.username });
//   });
// });

// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

const getPets = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);
    const page = req.body.page || 0;
    const result = await petsCol
      .find({})
      .skip(PAGE_SIZE * page)
      .limit(PAGE_SIZE)
      .toArray();
    console.log(
      `Page ${page} of pets are retrieved. Example record[0]: ${result[0]}`
    );
    res.json(result);
  } catch (err) {
    console.log(`Error occurred while getting pets: ${err.message}`);
    res.status(500).json({ error: err.message });
  } finally {
    console.log("getPets: Closing db connection");
    client.close();
  }
};

const getOnePet = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);
    const result = await petsCol
      .find({ _id: ObjectId(req.params.id) })
      .toArray();
    console.log(`Pet ${req.params.id} is retrieved.`);
    res.json(result);
  } catch (err) {
    console.log(
      `Error occurred while getting pet ${req.params.id}: ${err.message}`
    );
    res.status(500).json({ error: err.message });
  } finally {
    console.log("getOnePet: Closing db connection");
    client.close();
  }
};

const createPet = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);
    const result = await petsCol.insertOne(req.body);
    console.log(`A new pet was inserted with the _id: ${result.insertedId}`);
    res.json(result);
  } catch (err) {
    console.log(`Error occurred while creating pet: ${err.message}`);
    res.status(500).json({ error: err.message });
  } finally {
    console.log("createPet: Closing db connection");
    client.close();
  }
};

const editPet = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);
    const result = await petsCol.updateOne(
      { _id: ObjectId(req.params.id) },
      {
        $set: req.body,
      }
    );
    console.log(`Pet ${req.params.id} is updated.`);
    res.json(result);
  } catch (err) {
    console.log(
      `Error occurred while getting pet ${req.params.id}: ${err.message}`
    );
    res.status(500).json({ error: err.message });
  } finally {
    console.log("editPet: Closing db connection");
    client.close();
  }
};

const deletePet = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);
    const result = await petsCol.deleteOne({ _id: ObjectId(req.params.id) });
    console.log(`Pet ${req.params.id} is deleted.`);
    res.json(result);
  } catch (err) {
    console.log(
      `Error occurred while deleting pet ${req.params.id}: ${err.message}`
    );
    res.status(500).json({ error: err.message });
  } finally {
    console.log("deletePet: Closing db connection");
    client.close();
  }
};

const userAuthStatus = async (req, res) => {
  res.json({
    isLoggedIn: !!req.session.user,
    user: req.session.user,
  });
};

const authenticate = async (req, res) => {
  const user = req.body;
  let client;
  try {
    client = new MongoClient(mongoURL);

    const result = await client
      .db(DB_NAME)
      .collection(USER_COLLECTION_NAME)
      .find({ username: user.username })
      .toArray();

    if (user.password == result[0].password) {
      // req.session.user = { user: user.username };
      res.json(result);
    }
  } catch (e) {
    console.log(e);
    // req.session.user = null;
    // res.json({
    //   isLoggedIn: false,
    //   err: "Incorrect username password combination",
    // });
  }
};

const createUser = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);

    const result = await client
      .db(DB_NAME)
      .collection(USER_COLLECTION_NAME)
      .find({ username: req.body.username })
      .toArray();

    if (result.length > 0) res.status(403).json({ error: "403" });
    else {
      await client
        .db(DB_NAME)
        .collection(USER_COLLECTION_NAME)
        .insertOne(req.body);
      console.log(`A new user was inserted with the _id: ${res.json(result)}`);
    }
  } catch (e) {
    console.log(e.message || "err ocurred while creating user");
    res.status(500).json({ error: e.message });
  }
};

const createRecord = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const result = await client
      .db(DB_NAME)
      .collection(RECORD_COLLECTION_NAME)
      .insertOne(req.body);
    console.log(`A new record was inserted with the _id: ${result.insertedId}`);
    res.json(result);
  } catch (err) {
    console.log(`Error occurred while creating record: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
};

const getCategories = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const categoriesCol = client
      .db(DB_NAME)
      .collection(CATEGORY_COLLECTION_NAME);
    const result = await categoriesCol.find({}).toArray();
    console.log("Retrieved categories");
    res.json(result);
  } catch (err) {
    console.log(`Error occurred while getting categories: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
};

export default {
  getPets,
  getOnePet,
  createPet,
  editPet,
  deletePet,
  userAuthStatus,
  createUser,
  createRecord,
  getCategories,
  authenticate,
};
