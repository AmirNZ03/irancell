import initchart from "./chart.js";
initchart(
    [7.1,7.12,7.18,7.25,7.28],
    [500,1000,2200,2600,1700],
    document.querySelector("#mychart").getContext('2d')
)
