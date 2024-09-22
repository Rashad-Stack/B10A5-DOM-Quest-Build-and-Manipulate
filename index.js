// # Selector
function selector(element) {
  return document.getElementById(element);
}

// # Event Listener
function click(element, event, callback) {
  selector(element).addEventListener(event, function (event) {
    callback(event);
  });
}

// Toggler Button and Tab
function toggleTab(event) {
  if (event.target.id === "history") {
    event.target.classList.add("bg-primary", "text-dark-primary");
    selector("donation").classList.remove("bg-primary", "text-dark-primary");
    selector("blog").classList.add("hidden");
    selector("history-tab").classList.remove("hidden");
    return;
  }

  event.target.classList.add("bg-primary", "text-dark-primary");
  selector("history").classList.remove("bg-primary", "text-dark-primary");
  selector("blog").classList.remove("hidden");
  selector("history-tab").classList.add("hidden");
}

click("history", "click", toggleTab);
click("donation", "click", toggleTab);
