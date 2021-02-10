var svg = d3.select("body").append("svg").attr("width", 200).attr("height", 200);

// svg.append("rect").attr("width", 50).attr("height", 50).style("fill", "purple");
// svg.append("circle").attr("r", 20).attr("cx", "100").attr("cy", "100").style("fill", "blue");


// Otra forma

svg.append("rect").attr("width", 50).attr("height", 50).style("fill", "purple");
svg.append("g").attr("transform", "translate(100,100)").append("circle").attr("r", 20);



//Otra alternativa sin CSS
// d3.select("body").append("svg").attr("width", 200).attr("height", 200).style("background","pink")