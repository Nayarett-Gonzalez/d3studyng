// d3.select: Seleccionando sólo el primer elemento del tipo señalado 
d3.select("div").style("background", "#456789");
d3.select("p").style("color", "green"); //Select only the first paragraph

// d3.selectAll: Se seleccionan todos las divisiones
d3.selectAll("div").style("color", "white");

// Haciendo selección por #id
d3.select("div#container1").style("background", "green");
d3.select("span#inside").style("background", "green");