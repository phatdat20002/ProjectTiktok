//fliesbabel ko tu dong chay nen phi cau hinh lai cho tu dong chay
const {override,useBabelRc} = require("customize-cra");

module.exports = override(
    useBabelRc()
);