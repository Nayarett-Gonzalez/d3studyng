const addClass = () => {
    d3.selectAll("circle:nth-child(even)").classed("changeColor", true);
    d3.selectAll("circle:nth-child(odd)").classed("changeColor1", true);
}

// const changeBack = () => {
//     d3.selectAll("circle:nth-child(even)").classed("changeColor", false);
//     d3.selectAll("circle:nth-child(odd)").classed("changeColor1", false);
// }

// Vuelven a la posición inicial sólo
const changeBack = () => {
    d3.selectAll("circle").classed("changeColor", (d, i) => {
        if (i % 2 == 0)
            return true;
        else
            return false;
    })
}