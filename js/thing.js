var modelRender = new ModelRender({
  autoResize: false, // Whether to automatically resize the canvas
  controls: {
    enabled: true, // Toggle controls
    zoom: false, // Toggle zooming
    rotate: true, // Toggle rotation
    pan: false, // Toggle panning
  },
});
document.getElementById("myBlockContainer");
modelRender.render(["block/gravel"]);
