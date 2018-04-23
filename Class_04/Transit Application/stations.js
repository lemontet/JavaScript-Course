var stations = [
  "Museum",
  "St. James",
  "Circular Quay",
  "Wynyard",
  "Townhall",
  "Central",
  "Redfern",
  "Macdonaldtown",
  "Newtown"
];

function travelFrom (startStation, endStation) {
    var start = stations.indexOf(startStation);
    var end = stations.indexOf(endStation) - 1;
    console.log(start, end);
    var numOfStops = end - start;
    var message = 'To go from ' + startStation + ' to ' + endStation + ' - you\'ll need to go through ' + numOfStops + ' stops.'
    console.log(message);
}

travelFrom('Wynyard', 'Museum');

// TODO: Need to make this error tollerant

// https://gist.github.com/ga-wolf/cbf4b4ddc1bcebc16afb7aae3ad785f1#a-transit-application