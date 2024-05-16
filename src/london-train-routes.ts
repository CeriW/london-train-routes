import Station from './stations.type';
import Line from './line.type';
import lines from './lines';

const isSameLine = (start: Station, end: Station) => {
  const sharedLines: string[] = [];
  Object.keys(lines).forEach((line) => {
    if (lines[line].stops.includes(start) && lines[line].stops.includes(end)) {
      sharedLines.push(line);
    }
  });

  return sharedLines;
};

document.querySelector('#test-button')?.addEventListener('click', () => {
  console.log(isSameLine('Waterloo', 'Baker Street'));
});
