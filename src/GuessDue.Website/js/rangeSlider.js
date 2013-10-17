
$.widget("jp.rangeSlider",
    {
        options:
            {
                min: 0,
                max: 1,
                range: 32,
                unitConversion: function (value) { return value; }
            },
        _create: function ()
        {
            var self = this;
            var minMaxDifference = this.options.max - this.options.min;

            self.pixelPerValue = this.element.width() / minMaxDifference;

            this.element.addClass("rangeSlider");
            this.element.append('<div class="range"><div class="label min">' + this.options.unitConversion(this.options.min) + '</div><div class="label max">' + this.options.unitConversion(this.options.min + this.options.range) + '</div></div>');
            this.element.append('<input type="hidden" name="' + this.element.attr("id") + '" />');
            this.element.find(".range").css("width", this.options.range * this.pixelPerValue + "px").draggable(
                {
                    axis: "x",
                    containment: "parent",
                    drag: function ()
                    {
                        var range = $(this);
                        var left = parseFloat(range.css("left"));

                        range.find(".label.min").text(self.options.unitConversion(left / self.pixelPerValue + self.options.min));
                        range.find(".label.max").text(self.options.unitConversion(left / self.pixelPerValue + self.options.min + self.options.range));
                    }
                }
            );
        },

        destroy: function ()
        {
            this.element
                .removeClass("rangeSlider").remove(".range");
            // Call the base destroy function.
            $.Widget.prototype.destroy.call(this);
        }
    }
);

//(function ($)
//{

//    $.fn.rangeSlider = function (action)
//    {
//        

//        

//        return this;
//    }

//}(jQuery));

/*
$(".range").on({
    mousedown: function (event)
    {
        dragDown(event, $(this));
    },

});
$("body").on({
    mousemove: function () { dragMove(event, this); },
    mouseup: function () { dragUp(); }
});

var draggable = null;
var draggableStart = null;



function dragDown(event, element)
{
    draggable = element;

    draggableStart = { x: event.pageX, y: event.pageY };
}

function dragUp()
{
    draggable = null;
}

function dragMove(event, name)
{
    if (draggable != null)
    {
        var xDifference = event.pageX - draggableStart.x;
        var yDifference = event.pageY - draggableStart.y;

        moveSliderByPixels(xDifference);

        //$(draggable).css("left", "+=" + xDifference);

        draggableStart = { x: event.pageX, y: event.pageY };
    }
}

var pixelPerValue = 1;
var slider = $("#weightSlider");

function createSlider()
{
    //var slider = $("#weightSlider");

    var minValue = 16;
    var maxValue = 208;

    var valueDifference = maxValue - minValue;
    var width = slider.width();

    pixelPerValue = width / valueDifference;

    var inclusiveRange = 8;

    //slider.append('<div class="range"><div class="handle left"></div><div class="handle right"></div></div>');
    slider.append('<div class="range"><div class="label min">1.2 lbs</div><div class="label max">2.2 lbs</div></div>');

    var range = $(".range", slider);

    range.css("width", 32 * pixelPerValue + "px");
}

function setSliderValue(value)
{
    var range = $(".range");

    range.css("left", value * pixelPerValue + "px");

}
function moveSliderByPixels(pixels)
{
    var range = $(".range");

    range.css("left", function (index, value)
    {
        var newValue = parseFloat(value) + pixels;
        return newValue + "px";
    });

}
*/