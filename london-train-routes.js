"use strict";

var lines = {
  bakerloo: {
    stops: ['Harrow & Wealdstone', 'Kenton', 'South Kenton', 'North Wembley', 'Wembley Central', 'Stonebridge Park', 'Harlesden', 'Willesden Junction', 'Kensal Green', "Queen's Park", 'Kilburn Park', 'Maida Vale', 'Warwick Avenue', 'Paddington', 'Edgware Road', 'Marylebone', 'Baker Street', "Regent's Park", 'Oxford Circus', 'Piccadilly Circus', 'Charing Cross', 'Embankment', 'Waterloo', 'Lambeth North', 'Elephant & Castle']
  },
  circle: {
    stops: ['Hammersmith', 'Goldhawk Road', "Shepherd's Bush Market", 'Wood Lane', 'Latimer Road', 'Ladbroke Grove', 'Westbourne Park', 'Royal Oak', 'Paddington', 'Edgware Road', 'Baker Street', 'Great Portland Street', 'Euston Square', "King's Cross St. Pancras", 'Farringdon', 'Barbican', 'Moorgate', 'Liverpool Street', 'Aldgate', 'Tower Hill', 'Monument', 'Cannon Street', 'Mansion House', 'Blackfriars', 'Temple', 'Embankment', 'Westminster', "St. James's Park", 'Victoria', 'Sloane Square', 'South Kensington', 'Gloucester Road', 'High Street Kensington', 'Notting Hill Gate', 'Bayswater']
  }
};
var isSameLine = function isSameLine(start, end) {
  Object.keys(lines).forEach(function (line) {
    console.log(line + ': ' + lines[line]);
  });
};
console.log(isSameLine('Waterloo', 'Baker Street'));