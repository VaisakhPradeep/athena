// Reference: https://github.com/jsoma/tabletop/blob/master/examples/simple/no-tabletop.html


var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1nvabAfemXMqjkdenIoB8pffByg9LRsQV9jfhGgTtNFA/edit?usp=sharing';


// Initialising parser
function init() {
    Papa.parse(public_spreadsheet_url, {
        download: true,
        header: true,
        complete: showInfo
    })
}

window.addEventListener('DOMContentLoaded', init)

// Get parsed result
function showInfo(results) {
    var data = results.data;
    handleData(data);
}


// Handling Parsed Data
function handleData(data) {
    let topHeading = data[1].__parsed_extra[0];
    let mainHeading = data[2].__parsed_extra[0];
    const chart1 = {
        chartNumber: 1,
        label: data[3].__parsed_extra[0],
        value1: data[3].__parsed_extra[1],
        value2: data[3].__parsed_extra[2],
        value3: data[3].__parsed_extra[3],
        value4: data[3].__parsed_extra[4],
    }
    const chart2 = {
        chartNumber: 2,
        label: data[4].__parsed_extra[0],
        value1: data[4].__parsed_extra[1],
        value2: data[4].__parsed_extra[2],
        value3: data[4].__parsed_extra[3],
        value4: data[4].__parsed_extra[4],
    }
    const chart3 = {
        chartNumber: 3,
        label: data[5].__parsed_extra[0],
        value1: data[5].__parsed_extra[1],
        value2: data[5].__parsed_extra[2],
        value3: data[5].__parsed_extra[3],
        value4: data[5].__parsed_extra[4],
    }

    const chartData = [];

    let topHeadingElement = document.getElementById("top-heading-value");
    let mainHeadingElement = document.getElementById("main-heading-value");
    let chart1LabelElement = document.getElementById("chart1-label");
    let chart2LabelElement = document.getElementById("chart2-label");
    let chart3LabelElement = document.getElementById("chart3-label");

    topHeadingElement.innerHTML = topHeading;
    mainHeadingElement.innerHTML = mainHeading;
    chart1LabelElement.innerHTML = chart1.label;
    chart2LabelElement.innerHTML = chart2.label;
    chart3LabelElement.innerHTML = chart3.label;

    chartData.push(chart1, chart2, chart3);

    chartInit(chartData);
}


// Initializing charts
function chartInit(chartData) {
    chartData.forEach((chart,index) => {
        let val1 = document.querySelector(`#val${chart.chartNumber}-1`);
        let val2 = document.querySelector(`#val${chart.chartNumber}-2`);
        let val3 = document.querySelector(`#val${chart.chartNumber}-3`);
        let val4 = document.querySelector(`#val${chart.chartNumber}-4`);
        let suffix = '';
        if(index===0){
            suffix = '%';
        }
        val1.innerHTML = chart.value1+suffix;
        setLineHeight(val1, chart.value1, chart.value1);
        val2.innerHTML = chart.value2+suffix;
        setLineHeight(val2, chart.value2, chart.value1);
        val3.innerHTML = chart.value3+suffix;
        setLineHeight(val3, chart.value3, chart.value1);
        val4.innerHTML = chart.value4+suffix;
        setLineHeight(val4, chart.value4, chart.value1);
    });

    // Setting chart line height
    function setLineHeight(element, val, maxHeight) {
        element.parentElement.style.height = (val/maxHeight)*100+"%";
    }



}


