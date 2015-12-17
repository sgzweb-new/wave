define(['js/DrawBase'], function(DrawBase) {
    return DrawBase.extendClass({
        drawShape: function drawShape() {
            var context = this.world.context;

            if (this.fill) {
                context.beginPath();
                context.arc(
                    this.center[0],
                    this.center[1],
                    this.radius,
                    0, (Math.PI * 2)
                );
                context.fill();

            } else {
                context.beginPath();
                context.arc(
                    this.center[0],
                    this.center[1],
                    this.radius,
                    0, (Math.PI * 2)
                );
                context.stroke();
            }
        }
    });
});
