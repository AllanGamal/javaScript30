const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // check if they had the shift key down
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahed and do what we please
    //loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("starting to check them in between");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
