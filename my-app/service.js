const WebSocket = require("ws");
const pty = require("node-pty");

const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", (ws) => {
  const shell = pty.spawn("bash", [], {
    name: "xterm-color",
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env,
  });
  shell.on("data", (data) => ws.send(data));
  ws.on("message", (data) => shell.write(data));
  ws.on("close", () => shell.destroy());
});
