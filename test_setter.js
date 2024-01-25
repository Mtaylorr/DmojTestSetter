const table = document.querySelector("#case-table");
const body = table.querySelector("tbody");
const addCase = document.querySelector("#add-case-row");
const rowtypes = { start: "S", case: "C", end: "E" };
//  only change here!!
//  It's in this format
//  [
//      [[...file_names], points of the subtask] this is a subtask
//  ]
const tests = [
  [["subtask_1_01.in", "subtask_1_02.in"], 50],
  [["subtask_2_01.in"], 50],
];

const getLastRow = () => {
  return body.children[body.children.length - 1];
};

const getOptiontoSelect = (select, optionValue) => {
  return Array.from(select.options).find(function (option) {
    return option.value === optionValue;
  });
};
const selectOption = (select, optionValue) => {
  const option = getOptiontoSelect(select, optionValue);
  option.selected = true;
  const event = new Event("change");
  select.dispatchEvent(event);
};

const addPoint = (input, points) => {
  input.value = points;
  const event = new Event("input", {
    bubbles: true,
    cancelable: true,
  });

  input.dispatchEvent(event);
};

const addStart = (points) => {
  addCase.click();
  const row = getLastRow();
  const select = row.children[1].children[0];
  selectOption(select, "S");
  const input = row.querySelector('input[type="number"]');
  addPoint(input, points);
};

const addEnd = () => {
  addCase.click();
  const row = getLastRow();
  const select = row.children[1].children[0];
  selectOption(select, "E");
};

const addTest = (file_name) => {
  addCase.click();
  const row = getLastRow();
  const selectType = row.children[1].children[0];
  selectOption(selectType, "C");
  const selectfile = row.children[2].children[0];
  selectOption(selectfile, file_name);
};

for (const batch of tests) {
  addStart(batch[1]);
  for (const test_case of batch[0]) {
    addTest(test_case);
  }
  addEnd();
}
