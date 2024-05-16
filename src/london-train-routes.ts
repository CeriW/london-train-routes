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

document.querySelector('#test-button')?.addEventListener('click', () => {
  console.log(getSharedLines('Waterloo', 'Baker Street'));
});

for (const station of stations) {
  console.log(station);
}
// document.body.appendChild(fromDropdown);
