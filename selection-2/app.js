d3.selectAll("circle").style("fill", "green");
d3.select("#two > circle").style("fill", "deeppink");
d3.select("#two > circle:nth-child(2)").style("fill", "purple");
d3.select("#three > circle:nth-child(3)").style("fill", "purple");
d3.select("#four > circle:last-of-type").style("fill", "blue");