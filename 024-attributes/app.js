const update = () => {
    // d3.selectAll("circle").attr("r", 20);
     d3.selectAll("circle").attr("r", ()=>{
         return Math.random()*40;
     });
}