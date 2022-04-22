import ptp from "pdf-to-printer";
import express from "express";
import printer from "@thiagoelg/node-printer";
import pdfium from "node-pdfium";
import fs from "fs";
// const printer = require("@thiagoelg/node-printer");

const app = express();
const port = 3000;

const printQueue = () => {
  let printersInfo = printer.getPrinter("CUSTOM VKP80III");
  console.log("printer info : ", printersInfo);
};

const startPrint = () => {
  ptp.print("assets/prd.pdf").then().catch(console.error);

  // setTimeout(() => {
  //   printQueue();
  // }, 500);
};

app.get("/", (req, res) => {
  console.log("launch print ", new Date());
  startPrint();
  res.send("printed");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
