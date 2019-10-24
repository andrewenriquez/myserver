var db = require("../db");

var deviceSchema = new db.Schema({
    zip:           {type: Number},
    airQuality:    {type: Number}
});

var Device = db.model("Device", deviceSchema);

module.exports = Device;
