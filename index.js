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

// @ BLOG POSTS DONATION
click("blog", "click", function (event) {
  // if not a button return
  if (event.target.tagName !== "BUTTON") return;

  // Get the donation amount
  const value = isNaN(event.target.previousElementSibling.value)
    ? 0
    : parseFloat(event.target.previousElementSibling.value);

  if (!value || value < 0) return alert("Invalid Donation Amount!");

  // * Set the donation
  if (parseFloat(selector("balance").innerText) < value)
    return alert("Insufficient Balance To Donate!");

  const donationEl =
    event.target.parentElement.parentElement.children[0].children[1]
      .children[0];

  // Set the Donation amount to the blog post card
  donationEl.innerText = parseFloat(donationEl.innerText) + value;

  // Set total remaining balance
  selector("balance").innerText =
    parseFloat(selector("balance").innerText) - value;

  // Clear the input field
  event.target.previousElementSibling.value = "";

  // # Open Modal
  selector("modal").classList.add("modal-open");

  // History card html
  const html = `
      <div class="card border p-8">
        <div class="card-body">
          <h2 class="card-title">
            ${value} Taka is ${
    event.target.parentElement.parentElement.children[1].innerText
  }
          </h2>
          <p class="font-light text-dark-secondary">
            Date: ${new Date(Date.now()).toString()}
          </p>
        </div>
      </div>
    `;

  // Rendering donation history
  selector("history-tab").insertAdjacentHTML("beforeend", html);
});

// # Close Modal
click("close-modal", "click", function () {
  selector("modal").classList.remove("modal-open");
});
