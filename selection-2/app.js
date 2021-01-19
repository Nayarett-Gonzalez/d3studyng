d3.selectAll("svg").style("background", "lightpink");
d3.selectAll("circle").style("fill", "none");
d3.selectAll("circle").style("stroke", "#444444");
d3.selectAll("circle:nth-child(3)").style("fill", "lightyellow");
d3.select("circle").style("fill", "green");
d3.select("#two > circle").style("fill", "deeppink");
d3.select("#two > circle:nth-child(2)").style("fill", "purple");
// d3.select("#three > circle:nth-child(3)").style("fill", "purple");
d3.select("#four > circle:last-of-type").style("fill", "blue");

d3.selectAll("#five > circle:nth-child(even),#three > circle:nth-child(odd)").style("fill", "red");
d3.selectAll("#five > circle:nth-child(odd)").style("fill", "yellow");