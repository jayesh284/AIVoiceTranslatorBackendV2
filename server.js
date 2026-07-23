const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
      success: true,
          message: "AI Voice Translator Backend V2 is Live!"
            });
            });

            const PORT = process.env.PORT || 10000;

            app.listen(PORT, () => {
              console.log(`Server running on port ${PORT}`);
              });