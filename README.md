# Event Capture, Propagation, Bubbling and Once

Exercises to better understand event capture, propagation, bubbling and once. Part of Wes Bos'
[JavaScript 30](https://javascript30.com/) course.

![Screenshot of Event Capture, Propagation, Bubbling, and Once page ](https://res.cloudinary.com/gerhynes/image/upload/v1517777730/Screenshot-2018-2-4_Understanding_JavaScript_s_Capture_z70wgb.png)

## Notes

Start with three nested divs. Select them.

Make a function, `logText`, where it logs the `classList.value` of the div that is clicked on.

Loop over the divs and add event listeners to them.

When you click on div three `three`, `two`, `one` will be logged to the console.

When you clicked on three, you really also clicked on two and one because they wrap around it. You have also clicked on the body and the html tag.

The browser will figure out what you clicked on but the clicks will bubble up all the way to the top of the document.

You don't always see them because you're not necessarily listening for them.

If you are listening for a click on multiple nested elements, then a click will be triggered on all of them.

The browser first captures the event. When you click on an element it is going to ripple down and capture all of those events. Then, starting at the bottom, it bubbles back up, triggering the events.

If you add an options object to the function and set `capture` to `true`, `logText` will not be run on the bubble up but on the capture down.

If you call `e.stopPropagation()` it will stop bubbling the event up.

If you set `once` to `true`, it will listen for a click once and then unbind itself.

This could be useful in shop checkouts where you do not want a customer to click a button more than once.
