function handle_incoming_request(req, res) {
  console.log("INCOMING REQUEST: " + req.method + " " + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify)
}