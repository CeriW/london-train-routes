/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
var lines = {
  bakerloo: {
    stops: ['Harrow & Wealdstone', 'Kenton', 'South Kenton', 'North Wembley', 'Wembley Central', 'Stonebridge Park', 'Harlesden', 'Willesden Junction', 'Kensal Green', "Queen's Park", 'Kilburn Park', 'Maida Vale', 'Warwick Avenue', 'Paddington', 'Edgware Road', 'Marylebone', 'Baker Street', "Regent's Park", 'Oxford Circus', 'Piccadilly Circus', 'Charing Cross', 'Embankment', 'Waterloo', 'Lambeth North', 'Elephant & Castle']
  },
  circle: {
    stops: ['Hammersmith', 'Goldhawk Road', "Shepherd's Bush Market", 'Wood Lane', 'Latimer Road', 'Ladbroke Grove', 'Westbourne Park', 'Royal Oak', 'Paddington', 'Edgware Road', 'Baker Street', 'Great Portland Street', 'Euston Square', "King's Cross St. Pancras", 'Farringdon', 'Barbican', 'Moorgate', 'Liverpool Street', 'Aldgate', 'Tower Hill', 'Monument', 'Cannon Street', 'Mansion House', 'Blackfriars', 'Temple', 'Embankment', 'Westminster', "St. James's Park", 'Victoria', 'Sloane Square', 'South Kensington', 'Gloucester Road', 'High Street Kensington', 'Notting Hill Gate', 'Bayswater']
  },
  northern: {
    stops: ['High Barnet', 'Totteridge & Whetstone', 'Woodside Park', 'West Finchley', 'Finchley Central', 'East Finchley', 'Highgate', 'Archway', 'Tufnell Park', 'Kentish Town', 'Camden Town', 'Chalk Farm', 'Belsize Park', 'Hampstead', 'Golders Green', 'Brent Cross', 'Hendon Central', 'Colindale', 'Burnt Oak', 'Edgware', 'Mill Hill East', 'Finchley Central', 'West Finchley', 'Woodside Park', 'Totteridge & Whetstone', 'High Barnet', 'Morden', 'South Wimbledon', 'Colliers Wood', 'Tooting Broadway', 'Tooting Bec', 'Balham', 'Clapham South', 'Clapham Common', 'Clapham North', 'Stockwell', 'Oval', 'Kennington', 'Waterloo', 'Embankment', 'Charing Cross', 'Leicester Square', 'Tottenham Court Road', 'Goodge Street', 'Warren Street', 'Euston', 'Mornington Crescent', 'Camden Town', "King's Cross St. Pancras", 'Angel', 'Old Street', 'Moorgate', 'Bank', 'London Bridge', 'Borough', 'Elephant & Castle']
  },
  metropolitan: {
    stops: ['Aldgate', 'Liverpool Street', 'Moorgate', 'Barbican', 'Farringdon', "King's Cross St. Pancras", 'Euston Square', 'Great Portland Street', 'Baker Street', 'Finchley Road', 'Wembley Park', 'Preston Road', 'Northwick Park', 'Harrow-on-the-Hill', 'North Harrow', 'Pinner', 'Northwood Hills', 'Northwood', 'Moor Park', 'Rickmansworth', 'Chorleywood', 'Chalfont & Latimer', 'Amersham', 'Chesham', 'Croxley', 'Watford', 'Ruislip', 'Ruislip Manor', 'Eastcote', 'Rayners Lane', 'West Harrow', 'Harrow-on-the-Hill', 'Northwick Park', 'Preston Road', 'Wembley Park', 'Finchley Road', 'Baker Street']
  },
  jubilee: {
    stops: ['Stanmore', 'Canons Park', 'Queensbury', 'Kingsbury', 'Wembley Park', 'Neasden', 'Dollis Hill', 'Willesden Green', 'Kilburn', 'West Hampstead', 'Finchley Road', 'Swiss Cottage', "St. John's Wood", 'Baker Street', 'Bond Street', 'Green Park', 'Westminster', 'Waterloo', 'Southwark', 'London Bridge', 'Bermondsey', 'Canada Water', 'Canary Wharf', 'North Greenwich', 'Canning Town', 'West Ham', 'Stratford']
  },
  hammersmithCity: {
    stops: ['Hammersmith', 'Goldhawk Road', "Shepherd's Bush Market", 'Wood Lane', 'Latimer Road', 'Ladbroke Grove', 'Westbourne Park', 'Royal Oak', 'Paddington', 'Edgware Road', 'Baker Street', 'Great Portland Street', 'Euston Square', "King's Cross St. Pancras", 'Farringdon', 'Barbican', 'Moorgate', 'Liverpool Street', 'Aldgate East', 'Whitechapel', 'Stepney Green', 'Mile End', 'Bow Road', 'Bromley-by-Bow', 'West Ham', 'Plaistow', 'Upton Park', 'East Ham', 'Barking']
  },
  district: {
    stops: ['Upminster', 'Upminster Bridge', 'Hornchurch', 'Elm Park', 'Dagenham East', 'Dagenham Heathway', 'Becontree', 'Barking', 'East Ham', 'Upton Park', 'Plaistow', 'West Ham', 'Bromley-by-Bow', 'Bow Road', 'Mile End', 'Stepney Green', 'Whitechapel', 'Aldgate East', 'Tower Hill', 'Monument', 'Cannon Street', 'Mansion House', 'Blackfriars', 'Temple', 'Embankment', 'Westminster', "St. James's Park", 'Victoria', 'Sloane Square', 'South Kensington', 'Gloucester Road', "Earl's Court", 'West Kensington', 'Barons Court', 'Hammersmith', 'Ravenscourt Park', 'Stamford Brook', 'Turnham Green', 'Chiswick Park', 'Acton Town', 'Ealing Common', 'Ealing Broadway', 'Richmond', 'Kew Gardens', 'Gunnersbury', 'Chiswick Park', 'Acton Town', 'South Ealing', 'Northfields', 'Boston Manor', 'Osterley', 'Hounslow East', 'Hounslow Central', 'Hounslow West', 'Hatton Cross', 'Heathrow Terminals 1, 2, 3', 'Heathrow Terminal 4', 'Heathrow Terminal 5', 'Wimbledon', 'Wimbledon Park', 'Southfields', 'East Putney', 'Putney Bridge', 'Parsons Green', 'Fulham Broadway', 'West Brompton', 'Kensington (Olympia)', "Earl's Court", 'Gloucester Road', 'South Kensington']
  },
  central: {
    stops: ['West Ruislip', 'Ruislip Gardens', 'South Ruislip', 'Northolt', 'Greenford', 'Perivale', 'Hanger Lane', 'North Acton', 'East Acton', 'White City', "Shepherd's Bush", 'Holland Park', 'Notting Hill Gate', 'Queensway', 'Lancaster Gate', 'Marble Arch', 'Bond Street', 'Oxford Circus', 'Tottenham Court Road', 'Holborn', 'Chancery Lane', "St. Paul's", 'Bank', 'Liverpool Street', 'Bethnal Green', 'Mile End', 'Stratford', 'Leyton', 'Leytonstone', 'Snaresbrook', 'South Woodford', 'Woodford', 'Buckhurst Hill', 'Loughton', 'Debden', 'Theydon Bois', 'Epping', 'Hainault', 'Fairlop', 'Barkingside', 'Newbury Park', 'Gants Hill', 'Redbridge', 'Wanstead', 'Snaresbrook']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (lines);
/******/ })()
;
//# sourceMappingURL=lines.js.map