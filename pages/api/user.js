import db from "@/utils/db";
import userItem from "@/data/users.json";
import User from "@/models/user";
const handler = async (req, res) => {
  await db.connect();

  await User.insertMany(userItem);

  res.send("user Added!");
};

export default handler;
