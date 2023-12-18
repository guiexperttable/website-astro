const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "pb34a2k3_astro",
  // Password optional, prompted if none given
  password: "Gui2023!#",
  host: "web145.alfahosting-server.de",
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "/gui.expert/",
  include: ["**/*"],
  exclude: ["**/*.png", "**/*.gif", "**/*.jpg", "**/*.jpeg"],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: false,
};


ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));