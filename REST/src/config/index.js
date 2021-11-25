if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

module.exports = {
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT
};