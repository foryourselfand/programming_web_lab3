function checkResult(x, y, r) {
    let checkQuarterCircle = (x, y, r) => (x >= 0) && (y <= 0) && ((x * x + y * y) <= r * r);
    let checkTriangle = (x, y, r) => x <= 0 && x >= -r && y >= 0 && y <= r / 2 && (y <= x / 2 + r / 2);
    let checkRectangle = (x, y, r) => x <= r && x >= 0 && y >= 0 && y <= r / 2;
    return checkQuarterCircle(x, y, r) || checkTriangle(x, y, r) || checkRectangle(x, y, r);
}

function getRValue() {
    let rValue = parseFloat($("#form\\:R_field_input").attr("aria-valuenow"));
    if (isNaN(rValue))
        rValue = getRValueFromTable();
    return rValue;
}

function getRValueFromTable() {
    let rValueFromTable;
    rValueFromTable = parseFloat($("tbody tr").last().find(">:nth-child(3)").text());
    if (isNaN(rValueFromTable))
        rValueFromTable = 2;
    console.log("rValueFromTable", rValueFromTable)
    return rValueFromTable;
}

function drawPointsFromTable() {
    $("tbody tr").each(function () {
        let point = $(this);
        let x = parseFloat(point.find(">:first-child").text());
        let y = parseFloat(point.find(">:nth-child(2)").text());
        let r = parseFloat(point.find(">:nth-child(3)").text());
        let result = point.find(">:nth-child(4)").text().trim() === "Y";

        if (isNaN(x) || isNaN(y) || isNaN(r)) {
            return;
        }
        let color;
        color = result ? "green" : "red";

        // color = "green";


        function xValueForPoint(x) {
            return (x / r * 2 * 60 + 150)
        }

        function yValueForPoint(y) {
            return (-y / r * 2 * 60 + 150)
        }

        let plot = $("svg")

        let existingPlot = plot.html()
        let newPlot = `<circle id="pointer" r="5" cx="${xValueForPoint(x)}" cy="${yValueForPoint(y)}" fill-opacity="0.7" fill="${color}" stroke="firebrick" visibility="visible"></circle>`
        plot.html(existingPlot + newPlot)
    })
}


function getXFromSVG(x, r) {
    return (x - 150) / 60 / 2 * r;
}

function getYFromSVG(y, r) {
    return (y - 150) / 60 / 2 * -r;
}

function clickPlotHandler(e) {
    let offset = $(this).offset();
    let x = e.pageX - offset.left;
    let y = e.pageY - offset.top;

    let xValue = getXFromSVG(x, getRValue()).toFixed(2);
    let yValue = getYFromSVG(y, getRValue()).toFixed(2);

    $(".x-hidden").val(xValue);
    $(".y-hidden").val(yValue);
    $(".r-hidden").val(getRValue());
    $(".hidden-submit-btn").click();

}

$("svg").click(clickPlotHandler)
drawPointsFromTable()

// $("#form\\:R_field_input").attr("aria-valuenow", getRValueFromTable().toString())
