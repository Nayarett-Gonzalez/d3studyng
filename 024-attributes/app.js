const update = () => {
    // d3.selectAll("circle").attr("r", 20);
    // d3.selectAll("circle").attr("r", () => {
    //     return Math.random() * 40;
    // });

    // d3.selectAll("circle").attr("cy", () => {
    //     return Math.random() * 40;
    // });

    d3.selectAll("circle").attr("cy", (d, i) => {
        return Math.random() * (i * 50);
    });

    d3.select("input[type=checkbox]").property("checked", true);
}