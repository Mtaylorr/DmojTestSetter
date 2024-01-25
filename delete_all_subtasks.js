// copy paste this in the console and it will select all delete checkboxes
Array.from(
  document.querySelectorAll('#case-table tbody input[type="checkbox"]')
)
  .filter((e) => e.id.endsWith("DELETE"))
  .forEach((e) => {
    e.checked = true;
  });
