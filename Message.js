const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  wa_id: String,                // user id
  msg_id: { type: String, unique: true },  // from webhook payload
  meta_msg_id: String,          // reference id for status updates
  from: String,                 
  to: String,
  type: String,                 
  text: String,                 
  timestamp: Date,              
  status: { type: String, default: "sent" } // sent | delivered | read
});

module.exports = mongoose.model("Message", messageSchema);
