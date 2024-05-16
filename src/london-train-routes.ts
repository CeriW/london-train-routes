type LineName = 'bakerloo' | 'central' | 'circle';
import { stations, Station } from './stations.type';
import Line from './line.type';
import lines from './lines';

// Return an array of lines which have both the beginning and end stations on without needing to change
const getSharedLines = (start: Station, end: Station) => {
  const sharedLines: string[] = [];

  Object.keys(lines).forEach((line) => {
    if (lines[line].stops.includes(start) && lines[line].stops.includes(end)) {
      sharedLines.push(line);
    }
  });

  return sharedLines;
};

// Set up the HTML on the page
const startDropdown = document.createElement('select');
const endDropdown = document.createElement('select');

let optionHTML = '';
for (const station of stations) {
  optionHTML += `<option value="${station}">${station}</option>`;
}

startDropdown.innerHTML = optionHTML;
endDropdown.innerHTML = optionHTML;
document.body.append(startDropdown);
document.body.append(endDropdown);

// Set up the testing button
const sameLineButton = document.querySelector('#test-button');
sameLineButton?.addEventListener('click', () => {
  console.log(getSharedLines(startDropdown.value as Station, endDropdown.value as Station));
});
