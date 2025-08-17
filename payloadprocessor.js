const Message = require("../models/Message");

async function processPayload(payload) {
  if (payload.messages) {
    // Insert new messages
    for (let msg of payload.messages) {
      await Message.updateOne(
        { msg_id: msg.id },
        {
          $set: {
            wa_id: payload.contacts?.[0]?.wa_id,
            msg_id: msg.id,
            meta_msg_id: msg.context?.id || null,
            from: msg.from,
            to: msg.to,
            type: msg.type,
            text: msg.text?.body,
            timestamp: new Date(Number(msg.timestamp) * 1000),
          },
        },
        { upsert: true }
      );
    }
  }

  if (payload.statuses) {
    // Update status
    for (let st of payload.statuses) {
      await Message.updateOne(
        { msg_id: st.id },
        { $set: { status: st.status } }
      );
    }
  }
}

module.exports = { processPayload };
