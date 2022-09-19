export function getReportsData() {
  const fs = require("fs");

  let rawdata = fs.readFileSync("data1.json");
  let reportData = JSON.parse(rawdata);
//   console.log(reportData);
  return reportData;
}
