# scroll_handler

## Handle scroll events with plain JS

- Keep track of vertical scrolling in your html files.

- Dispatch a custom event when an offset threshold is reached.

- Display the scroll status in the UI (conditionally).

## JS functions

All functionality is implemented with plain JavaScript, HTML and CSS.

`handleScroll` is the function handling the `scroll` event and creating a new event (`scrollProgress`) that is dispatched to window when the vertical offset reaches a certain threshold.

`listenToProgress` is the function called by the custom event listener, which logs the event.detail to the console (or can alert the user)

`handleProgressInUI` is a function (called conditionally) used to display information about the scroll status in the document.

`generateText` is just a function used to populate the demo html file with enough text content to enable vertical scroll.

## How to use it

Clone the repo and open the index.html file in a browser with JS enabled.
