'use strict';

// write code here
const workerElements = document.querySelector('ul');

function convertToNumber(string) {
  const numberStart = string.split('').findIndex((sym) => !Number.isNaN(+sym));

  return +string.trim().slice(numberStart).replaceAll(',', '');
}

function sortList(list) {
  const sorted = Array.from(list.children).sort(
    (a, b) =>
      -(convertToNumber(a.dataset.salary) - convertToNumber(b.dataset.salary)),
  );

  sorted.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    ...item.dataset,
    name: item.innerText,
  }));
}

sortList(workerElements);
getEmployees(workerElements);
