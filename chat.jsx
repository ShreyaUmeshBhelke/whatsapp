<div className={`p-2 my-1 rounded-lg max-w-xs ${
    msg.from === "me" ? "bg-green-200 ml-auto" : "bg-gray-200"
}`}>
  <p>{msg.text}</p>
  <span className="text-xs text-gray-500">
    {new Date(msg.timestamp).toLocaleTimeString()} ✔✔
  </span>
</div>
