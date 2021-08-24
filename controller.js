const xlsx = require("xlsx");

module.exports = {
  saveFile(files, result) {
    console.log(files.body.message);
    if (files.files.file) {
      const file = files.files.file;
      const fileName = file.name;

      file.mv(`./uploads/${fileName}`, (err) => {
        if (err) {
          result(err, null);
        } else {
          const data = xlsx.readFile(`uploads/${fileName}`);

          const workSheet = data.Sheets["Sheet1"];

          const arrayData = xlsx.utils.sheet_to_json(workSheet);
          result(null, arrayData);
          //   result(null, { message: "Success" });
        }
      });
    } else {
      result({ error: "Please select a file to upload" }, null);
    }
  },
  readFile(result) {
    const data = xlsx.readFile("uploads/phones.xlsx");

    const workSheet = data.Sheets["Sheet1"];

    const arrayData = xlsx.utils.sheet_to_json(workSheet);
    result(null, arrayData);
  },
};
