const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("Welcome to the File Upload Server!");
});

app.post("/upload", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let uploadedFile = req.files.file;

  uploadedFile.mv(
    `/var/www/apache-defender-app/server/uploads/${uploadedFile.name}`,
    (err) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.send("File uploaded successfully!");
    },
  );
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://server.mogiro.site:${PORT}`);
});
