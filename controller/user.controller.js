const User = require("../models/Users");

exports.createUser = async (req, res) => {
  const user = req.body;

  try {
    const result = await User.create(user);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  const user = req.body;
  const filter = { email: user.email };
  const update = { $set: user };
  const options = { upsert: true, new: true };

  try {
    const result = await User.findOneAndUpdate(filter, update, options);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.makeUserAdmin = async (req, res) => {
  const { email } = req.body;
  const { decodedEmail } = req;

  try {
    if (decodedEmail) {
      const requesterAccount = await User.findOne({ email: decodedEmail });
      if (requesterAccount.role === "admin") {
        const result = await User.updateOne({ email }, { role: "admin" });
        res.json(result);
      } else {
        res
          .status(403)
          .json({ message: "You do not have permission to make a user admin" });
      }
    } else {
      res
        .status(401)
        .json({ message: "You are not authorized to perform this action" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUserAdminStatus = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await usersCollection.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isAdmin = user.role === "admin";
    res.json({ admin: isAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
