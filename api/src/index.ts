import { app } from "./app";

import { port } from "./variables"

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);