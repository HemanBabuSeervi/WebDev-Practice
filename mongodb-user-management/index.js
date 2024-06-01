const express = require('express');
const app = express();

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

port = 3000;
app.listen(port, () => { console.log("On port :"+port); });
