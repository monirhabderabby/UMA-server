const csv = require("csvtojson");
const Result = require("../models/result/result");
exports.importResult = async (req, res, next) => {
    try {
        csv()
            .fromFile(req.file.path)
            .then(async res => {
                await Result.insertMany(res);
            });

        res.status(200).json({
            success: true,
            message: "File uploaded successfully",
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};
