const express = require("express");
const { validateToken, generateToken } = require("../config/token");
const validateUser = require("../middleware/auth");
const usersRouter = express.Router();
const { Users } = require("../models");

usersRouter.put("/:id", (req, res) => {
  const userId = req.params.id;

  Users.findByPk(userId).then((user) => {
    user
      .update(req.body, {
        returning: true,
      })
      .then((response) => res.send(response));
  });
});

// usersRouter.get("/:id", (req, res) => {
//   Users.findByPk(req.params.id).then((user) => {
//     res.send(user);
//   });
// });

usersRouter.post("/register", (req, res, next) => {
  Users.create(req.body)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((error) => {
      next(error);
    });
});

usersRouter.post("/login", async (req, res, next) => {
  try{
  const { email, password } = req.body;
  
  const user = await Users.findOne({ where: { email }});
  const validatePassword = await user.validatePassword(password)
  
  if(validatePassword){
    const userData = {
      email,
      name: user.name,
      lastname: user.lastname
    }
    const token = await generateToken(userData)
    res.cookie("token", token).send(userData)
  }else{
    return res.sendStatus(401)
  }

}catch(error){
  console.error(error)
  res.sendStatus(404)
}
});

usersRouter.post("/logout", validateUser, (req, res) => {
  res.clearCookie("token").sendStatus(204);
});

usersRouter.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

module.exports = usersRouter;
