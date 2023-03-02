"use strict";
exports.__esModule = true;
var glide = require("glide");
var humanize_plus_1 = require("humanize-plus");
exports["default"] = glide
    .columnNamed("Abbreviate Number")
    .withCategory("Number")
    .withReleased("direct")
    .withDescription("Converts an integer into its most compact representation.")
    .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")
    .withStringResult()
    .withRequiredNumberParam("number")
    .withNumberParam("decimals", "Decimal Places")
    .withTest({ number: 123456789 }, "123M")
    .withTest({ number: 123456789, decimals: 2 }, "123.46M")
    .run(function (_a) {
    var number = _a.number, decimals = _a.decimals;
    return humanize_plus_1["default"].compactInteger(number, decimals);
});
