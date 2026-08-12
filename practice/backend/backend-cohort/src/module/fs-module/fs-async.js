import fs from "node:fs";

// fs.writeFile("async.txt", "Hello async", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file written successfully");
// });

// fs.readFile("async.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("data: ", data);
// });

fs.readFile("a.txt", "utf-8", (err, data) => {
  fs.writeFile("b.txt", data, (err, data) => {
    fs.appendFile("b.txt", "\ndone", (err, data) => {
      fs.unlink("a.txt", (err) => {
        console.log("a.txt deleted");
      });
    });
  });
});
