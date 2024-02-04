const MainRouter = require("express").Router();
const ContactRouter = require("./contact");

MainRouter.get("/contacts", async (req, res, next) => {
  try {
    res.status(200).json({
      message: `server ready at PORT ${process.env.PORT}`,
    });
  } catch (error) {
    next(error);
  }
});

MainRouter.use("/contact", ContactRouter);

module.exports = MainRouter;
