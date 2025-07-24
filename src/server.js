const app = require('./app');
const sequelize = require('./config/db'); // Adjust path if needed
const {DEVELOPMENT_ENV} = require("./config/env")

// models 
const User = require('./models/user.model');

// Server port
const PORT = DEVELOPMENT_ENV.port || 5000;


sequelize.sync({ force: false }) 
    .then(() => {
    console.log("All models synced with DB");
})
.catch((err) => {
        console.error("Error syncing models:", err);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
