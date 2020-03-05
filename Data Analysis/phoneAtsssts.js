
let corrPhAtts = [ // Array of all options, grouped by attributes i.e. correlated
["44", "5", "8", "5", "1280 x 720"],
["134", "13", "16", "5", "1280 x 720"],
["179", "8", "8", "5", "1280 x 720"],
["179", "16", "32", "5.2", "1920 x 1080"],
["199", "13", "64", "6.1", "1560 x 720"],
["199", "13", "16", "5.71", "1520 x 720"],
["199", "13", "32", "5.5", "1440 x 720"],
["229", "13", "32", "6.26", "1520 x 720"],
["239", "13", "64", "6.2", "1520 x 720"],
["249", "13", "64", "6.35", "1544 x 720"],
["249", "13", "32", "5.5", "1920 x 1080"],
["249", "13", "32", "6.26", "1520 x 720"],
["279", "13", "32", "6.4", "1560 x 720"],
["279", "13", "64", "6.2", "1520 x 720"],
["279", "13", "32", "5.5", "2160 x 1080"],
["299", "13", "64", "6.2", "1520 x 720"],
["299", "13", "32", "5.71", "1520 x 720"],
["299", "12", "64", "5.7", "2560 x 1440"],
["299", "13", "128", "6.35", "1544 x 720"],
["299", "16", "32", "5.5", "1920 x 1080"],
["299", "16", "64", "6.26", "1520 x 720"],
["299", "16", "64", "6.52", "1600 x 720"],
["299", "12.3", "32", "5.2", "1920 x 1080"],
["349", "16", "128", "6.59", "2340 x 1080"],
["379", "16", "32", "6.4", "1920 x 1080"],
["379", "16", "32", "5.7", "1920 x 1080"],
["399", "48", "128", "6.5", "2340 x 1080"],
["399", "16", "128", "6.3", "2340 x 1080"],
["399", "16", "128", "6.3", "2340 x 1080"],
["399", "16", "64", "6.3", "2280 x 1080"],
["399", "48", "128", "6.3", "2520 x 1080"],
["399", "24", "128", "6.15", "2312 x 1080"],
["399", "12", "32", "5.2", "1920 x 1080"],
["399", "16", "128", "6.38", "2340 x 1080"],
["399", "48", "128", "6.088", "1560 x 720"],
["399", "12.3", "128", "5", "1920 x 1080"],
["399", "16", "32", "5.1", "2560 x 1440"],
["449", "48", "128", "6.4", "2340 x 1080"],
["449", "12", "32", "5.84", "2280 x 1080"],
["499", "12", "32", "4.7", "1334 x 750"],
["499", "25", "64", "6.4", "2340 x 1080"],
["499", "48", "128", "5.52", "2340 x 1080"],
["499", "12", "64", "6.18", "2280 x 1080"],
["499", "20", "128", "5.5", "2560 x 1440"],
["499", "12.3", "128", "5.5", "2560 x 1440"],
["499", "23", "32", "5.5", "3840 x 2160"],
["499", "13", "64", "5.7", "2880 x 1440"],
["549", "48", "128", "6.3", "2280 x 1080"],
["549", "16", "32", "5.6", "2220 x 1080"],
["599", "12", "128", "4.7", "1334 x 750"],
["599", "48", "128", "6.5", "2340 x 1080"],
["599", "48", "128", "6.26", "2340 x 1080"],
["599", "48", "128", "6.4", "2340 x 1080"],
["599", "20", "128", "6.4", "2340 x 1080"],
["649", "32", "128", "6.7", "2400 x 1080"],
["649", "12.2", "64", "5.6", "2220 x 1080"],
["699", "12", "128", "5.99", "2880 x 1440"],
["699", "12", "128", "6.39", "2340 x 1080"],
["699", "20", "256", "6.4", "2340 x 1080"],
["699", "12", "128", "6.4", "3120 x 1400"],
["699", "12", "32", "3.3", "1280 x 720"],
["779", "12", "64", "4.7", "1334 x 750"],
["799", "12", "64", "6.2", "2960 x 1440"],
["799", "12", "128", "5.5", "1920 x 1080"],
["799", "13", "32", "4.5", "1620 x 1080"],
["859", "12", "128", "4.7", "1334 x 750"],
["879", "12.2", "128", "5.5", "2160 x 1080"],
["899", "40", "128", "6.1", "2340 x 1080"],
["899", "12", "256", "5.8", "2960 x 1400"],
["899", "12.2", "64", "6.3", "2960 x 1440"],
["999", "12", "64", "5.8", "2436 x 1125"],
["999", "16", "128", "5.8", "2280 x 1080"],
["999", "48", "128", "6.7", "2400 x 1080"],
["999", "12", "256", "6.2", "2960 x 1440"],
["999", "12.2", "128", "6.3", "2960 x 1440"],
["1049", "16", "64", "5.7", "2280 x 1080"],
["1049", "12", "64", "6.1", "1792 x 868"],
["1129", "12", "128", "6.1", "1792 x 868"],
["1149", "12", "256", "5.8", "2436 x 1125"],
["1199", "12", "64", "6.1", "1792 x 828"],
["1199", "16", "128", "6.4", "3040 x 1440"],
["1199", "40", "256", "6.47", "2340 x 1080"],
["1199", "16", "128", "5.7", "2280 x 1080"],
["1199", "16", "512", "6.1", "3040 x 1440"],
["1249", "12", "64", "6.5", "2688 x 1242"],
["1279", "12", "128", "6.1", "1792 x 828"],
["1279", "16", "64", "6.3", "3040 x 1440"],
["1349", "12", "512", "5.8", "2436 x 1125"],
["1399", "12", "256", "6.5", "2688 x 1242"],
["1429", "16", "128", "6.3", "3040 x 1440"],
["1449", "12", "256", "6.1", "1792 x 828"],
["1599", "16", "512", "6.4", "3040 x 1440"],
["1699", "12", "256", "6.8", "3040 x 1440"],
["1699", "16", "1000", "6.4", "3040 x 1440"],
["1749", "12", "64", "5.8", "2436 x 1125"],
["1899", "12", "64", "6.5", "2688 x 1242"],
["1999", "12", "256", "5.8", "2436 x 1125"],
["1999", "12", "512", "6.8", "3040 x 1440"],
["2149", "12", "256", "6.5", "2688 x 1242"],
["2349", "12", "512", "5.8", "2436 x 1125"],
["2499", "12", "512", "6.5", "2688 x 1242"]]

/*
let mPA = [] // Object with key:value pairs (key = property name)

for (let phone of phoneAtts) { // Create an array with key:value pairs
    mPA.push({price: phone[0], camera: phone[1], memory: phone[2], screenSize: phone[3], resolution: phone[4]})
}

console.log(mPA)

*/

let uncorrPhAtts = [
{price: "44", camera: "5", memory: "8", screenSize: "5", resolution: "1280 x 720"},
{price: "134", camera: "13", memory: "16", screenSize: "5", resolution: "1280 x 720"},
{price: "179", camera: "8", memory: "8", screenSize: "5", resolution: "1280 x 720"},
{price: "179", camera: "16", memory: "32", screenSize: "5.2", resolution: "1920 x 1080"},
{price: "199", camera: "13", memory: "64", screenSize: "6.1", resolution: "1560 x 720"},
{price: "199", camera: "13", memory: "16", screenSize: "5.71", resolution: "1520 x 720"},
{price: "199", camera: "13", memory: "32", screenSize: "5.5", resolution: "1440 x 720"},
{price: "229", camera: "13", memory: "32", screenSize: "6.26", resolution: "1520 x 720"},
{price: "239", camera: "13", memory: "64", screenSize: "6.2", resolution: "1520 x 720"},
{price: "249", camera: "13", memory: "64", screenSize: "6.35", resolution: "1544 x 720"},
{price: "249", camera: "13", memory: "32", screenSize: "5.5", resolution: "1920 x 1080"},
{price: "249", camera: "13", memory: "32", screenSize: "6.26", resolution: "1520 x 720"},
{price: "279", camera: "13", memory: "32", screenSize: "6.4", resolution: "1560 x 720"},
{price: "279", camera: "13", memory: "64", screenSize: "6.2", resolution: "1520 x 720"},
{price: "279", camera: "13", memory: "32", screenSize: "5.5", resolution: "2160 x 1080"},
{price: "299", camera: "13", memory: "64", screenSize: "6.2", resolution: "1520 x 720"},
{price: "299", camera: "13", memory: "32", screenSize: "5.71", resolution: "1520 x 720"},
{price: "299", camera: "12", memory: "64", screenSize: "5.7", resolution: "2560 x 1440"},
{price: "299", camera: "13", memory: "128", screenSize: "6.35", resolution: "1544 x 720"},
{price: "299", camera: "16", memory: "32", screenSize: "5.5", resolution: "1920 x 1080"},
{price: "299", camera: "16", memory: "64", screenSize: "6.26", resolution: "1520 x 720"},
{price: "299", camera: "16", memory: "64", screenSize: "6.52", resolution: "1600 x 720"},
{price: "299", camera: "12.3", memory: "32", screenSize: "5.2", resolution: "1920 x 1080"},
{price: "349", camera: "16", memory: "128", screenSize: "6.59", resolution: "2340 x 1080"},
{price: "379", camera: "16", memory: "32", screenSize: "6.4", resolution: "1920 x 1080"},
{price: "379", camera: "16", memory: "32", screenSize: "5.7", resolution: "1920 x 1080"},
{price: "399", camera: "48", memory: "128", screenSize: "6.5", resolution: "2340 x 1080"},
{price: "399", camera: "16", memory: "128", screenSize: "6.3", resolution: "2340 x 1080"},
{price: "399", camera: "16", memory: "128", screenSize: "6.3", resolution: "2340 x 1080"},
{price: "399", camera: "16", memory: "64", screenSize: "6.3", resolution: "2280 x 1080"},
{price: "399", camera: "48", memory: "128", screenSize: "6.3", resolution: "2520 x 1080"},
{price: "399", camera: "24", memory: "128", screenSize: "6.15", resolution: "2312 x 1080"},
{price: "399", camera: "12", memory: "32", screenSize: "5.2", resolution: "1920 x 1080"},
{price: "399", camera: "16", memory: "128", screenSize: "6.38", resolution: "2340 x 1080"},
{price: "399", camera: "48", memory: "128", screenSize: "6.088", resolution: "1560 x 720"},
{price: "399", camera: "12.3", memory: "128", screenSize: "5", resolution: "1920 x 1080"},
{price: "399", camera: "16", memory: "32", screenSize: "5.1", resolution: "2560 x 1440"},
{price: "449", camera: "48", memory: "128", screenSize: "6.4", resolution: "2340 x 1080"},
{price: "449", camera: "12", memory: "32", screenSize: "5.84", resolution: "2280 x 1080"},
{price: "499", camera: "12", memory: "32", screenSize: "4.7", resolution: "1334 x 750"},
{price: "499", camera: "25", memory: "64", screenSize: "6.4", resolution: "2340 x 1080"},
{price: "499", camera: "48", memory: "128", screenSize: "5.52", resolution: "2340 x 1080"},
{price: "499", camera: "12", memory: "64", screenSize: "6.18", resolution: "2280 x 1080"},
{price: "499", camera: "20", memory: "128", screenSize: "5.5", resolution: "2560 x 1440"},
{price: "499", camera: "12.3", memory: "128", screenSize: "5.5", resolution: "2560 x 1440"},
{price: "499", camera: "23", memory: "32", screenSize: "5.5", resolution: "3840 x 2160"},
{price: "499", camera: "13", memory: "64", screenSize: "5.7", resolution: "2880 x 1440"},
{price: "549", camera: "48", memory: "128", screenSize: "6.3", resolution: "2280 x 1080"},
{price: "549", camera: "16", memory: "32", screenSize: "5.6", resolution: "2220 x 1080"},
{price: "599", camera: "12", memory: "128", screenSize: "4.7", resolution: "1334 x 750"},
{price: "599", camera: "48", memory: "128", screenSize: "6.5", resolution: "2340 x 1080"},
{price: "599", camera: "48", memory: "128", screenSize: "6.26", resolution: "2340 x 1080"},
{price: "599", camera: "48", memory: "128", screenSize: "6.4", resolution: "2340 x 1080"},
{price: "599", camera: "20", memory: "128", screenSize: "6.4", resolution: "2340 x 1080"},
{price: "649", camera: "32", memory: "128", screenSize: "6.7", resolution: "2400 x 1080"},
{price: "649", camera: "12.2", memory: "64", screenSize: "5.6", resolution: "2220 x 1080"},
{price: "699", camera: "12", memory: "128", screenSize: "5.99", resolution: "2880 x 1440"},
{price: "699", camera: "12", memory: "128", screenSize: "6.39", resolution: "2340 x 1080"},
{price: "699", camera: "20", memory: "256", screenSize: "6.4", resolution: "2340 x 1080"},
{price: "699", camera: "12", memory: "128", screenSize: "6.4", resolution: "3120 x 1400"},
{price: "699", camera: "12", memory: "32", screenSize: "3.3", resolution: "1280 x 720"},
{price: "779", camera: "12", memory: "64", screenSize: "4.7", resolution: "1334 x 750"},
{price: "799", camera: "12", memory: "64", screenSize: "6.2", resolution: "2960 x 1440"},
{price: "799", camera: "12", memory: "128", screenSize: "5.5", resolution: "1920 x 1080"},
{price: "799", camera: "13", memory: "32", screenSize: "4.5", resolution: "1620 x 1080"},
{price: "859", camera: "12", memory: "128", screenSize: "4.7", resolution: "1334 x 750"},
{price: "879", camera: "12.2", memory: "128", screenSize: "5.5", resolution: "2160 x 1080"},
{price: "899", camera: "40", memory: "128", screenSize: "6.1", resolution: "2340 x 1080"},
{price: "899", camera: "12", memory: "256", screenSize: "5.8", resolution: "2960 x 1400"},
{price: "899", camera: "12.2", memory: "64", screenSize: "6.3", resolution: "2960 x 1440"},
{price: "999", camera: "12", memory: "64", screenSize: "5.8", resolution: "2436 x 1125"},
{price: "999", camera: "16", memory: "128", screenSize: "5.8", resolution: "2280 x 1080"},
{price: "999", camera: "48", memory: "128", screenSize: "6.7", resolution: "2400 x 1080"},
{price: "999", camera: "12", memory: "256", screenSize: "6.2", resolution: "2960 x 1440"},
{price: "999", camera: "12.2", memory: "128", screenSize: "6.3", resolution: "2960 x 1440"},
{price: "1049", camera: "16", memory: "64", screenSize: "5.7", resolution: "2280 x 1080"},
{price: "1049", camera: "12", memory: "64", screenSize: "6.1", resolution: "1792 x 868"},
{price: "1129", camera: "12", memory: "128", screenSize: "6.1", resolution: "1792 x 868"},
{price: "1149", camera: "12", memory: "256", screenSize: "5.8", resolution: "2436 x 1125"},
{price: "1199", camera: "12", memory: "64", screenSize: "6.1", resolution: "1792 x 828"},
{price: "1199", camera: "16", memory: "128", screenSize: "6.4", resolution: "3040 x 1440"},
{price: "1199", camera: "40", memory: "256", screenSize: "6.47", resolution: "2340 x 1080"},
{price: "1199", camera: "16", memory: "128", screenSize: "5.7", resolution: "2280 x 1080"},
{price: "1199", camera: "16", memory: "512", screenSize: "6.1", resolution: "3040 x 1440"},
{price: "1249", camera: "12", memory: "64", screenSize: "6.5", resolution: "2688 x 1242"},
{price: "1279", camera: "12", memory: "128", screenSize: "6.1", resolution: "1792 x 828"},
{price: "1279", camera: "16", memory: "64", screenSize: "6.3", resolution: "3040 x 1440"},
{price: "1349", camera: "12", memory: "512", screenSize: "5.8", resolution: "2436 x 1125"},
{price: "1399", camera: "12", memory: "256", screenSize: "6.5", resolution: "2688 x 1242"},
{price: "1429", camera: "16", memory: "128", screenSize: "6.3", resolution: "3040 x 1440"},
{price: "1449", camera: "12", memory: "256", screenSize: "6.1", resolution: "1792 x 828"},
{price: "1599", camera: "16", memory: "512", screenSize: "6.4", resolution: "3040 x 1440"},
{price: "1699", camera: "12", memory: "256", screenSize: "6.8", resolution: "3040 x 1440"},
{price: "1699", camera: "16", memory: "1000", screenSize: "6.4", resolution: "3040 x 1440"},
{price: "1749", camera: "12", memory: "64", screenSize: "5.8", resolution: "2436 x 1125"},
{price: "1899", camera: "12", memory: "64", screenSize: "6.5", resolution: "2688 x 1242"},
{price: "1999", camera: "12", memory: "256", screenSize: "5.8", resolution: "2436 x 1125"},
{price: "1999", camera: "12", memory: "512", screenSize: "6.8", resolution: "3040 x 1440"},
{price: "2149", camera: "12", memory: "256", screenSize: "6.5", resolution: "2688 x 1242"},
{price: "2349", camera: "12", memory: "512", screenSize: "5.8", resolution: "2436 x 1125"},
{price: "2499", camera: "12", memory: "512", screenSize: "6.5", resolution: "2688 x 1242"}]

//console.log(uncorrPhAtts)


function shuffleArr(arr) {    // This shuffle/randomise function lifted from https://bost.ocks.org/mike/shuffle/
                              // Shuffle function - Pick a random element, swap with last element in back of array/list.
  let m = arr.length, t, i;   // Shorthand for var m = arr.length, var t;, var i; i.e. multiple elements  
    while (m) {               // While there remain elements to shuffle (i.e. m = > 0)
                              // Pick a remaining element
                              // Generate a random number within the range of no. durations array and round down
      i = Math.floor(Math.random() * m--); 
                              // And swap it with the current element.
      t = arr[m];
                              // var t = the last element in durations array/list
      arr[m] = arr[i];
                              // Swap the last element in the durations array/list to the
                              // randomly chosen element in the durations array/list
      arr[i] = t;
                              // and swap element durations[i] with the formerly last element of the durations array/list
    }
  return arr;
  //console.log(shuffleArr)
}

// Shuffle all correlated options
shuffleArr(corrPhAtts) 
// Options are indices within the corrPhAtts array
console.log(corrPhAtts[[1]])
// Each phone is described by 5 attributes - Price, Camera, Memory, screen size and resolution
// The location of each attribute should be randomised b/w subjects

shuffleArr(uncorrPhAtts) // Shuffle all correlated options in the 

///console.log(uncorrPhAtts)

//console.log(uncorrPhAtts[2])


const randomPresentation = 1; 	
const numAttributes = 3;
const randomProductsMode = 2;
const specificNumProducts = ["2", "4", "8"];
var nCurrentBlock = 0
var features = [	 // Array containing attributes and their levels (e.g. product attributes, pizza attributes)
  ["Low Price", "High Price",],
  ["Low Quality", "High Quality",],
  ["whatever", "whaetves",],
  ];
var usingFeatures = [];
var randomSelectedProduct = Math.floor(Math.random() * specificNumProducts.length);
  blockProducts = specificNumProducts[randomSelectedProduct];
  console.log(blockProducts) //hd r r y y



console.log(usingFeatures)

if (nCurrentBlock == 0) {
    for (var i = 0; i < features.length; i++)
              usingFeatures.push(i);
              console.log(usingFeatures);// 
          // To set the features being used, casually remove them randomly until it's the right length
          for (var i = 0; i < usingFeatures.length - numAttributes; i++)
              usingFeatures.splice(Math.floor(Math.random() * usingFeatures.length), 1);
              console.log(usingFeatures)
              if (randomPresentation == 1) { // This randomises the location of attributes between-subjects 
               for (var i = 0; i < usingFeatures.length; i++) 
                      var randomFeature = Math.floor(Math.random() * usingFeatures.length);
                      var temp = usingFeatures[i];
                      usingFeatures[i] = usingFeatures[randomFeature];
                      usingFeatures[randomFeature] = temp;
              }
            }

            console.log(usingFeatures) // niyigiy


let corrAtts = 
[["price", "camera", "memory", "screen_size", "resolution"],
["$44", "5MP", "8GB", '5"', "1280 x 720"],
["$134", "13MP", "16GB", '5"', "1280 x 720"],
["$179", "8MP", "8GB", '5"', "1280 x 720"],
["$179", "16MP", "32GB", '5.2"', "1920 x 1080"],
["$199", "13MP", "64GB", "6.1"", "1560 x 720"],
["$199", "13MP", "16GB", "5.71"", "1520 x 720"],
["$199", "13MP", "32GB", "5.5"", "1440 x 720"],
["$229", "13MP", "32GB", "6.26"", "1520 x 720"],
["$239", "13MP", "64GB", "6.2"", "1520 x 720"],
["$249", "13MP", "64GB", "6.35"", "1544 x 720"],
["$249", "13MP", "32GB", "5.5"", "1920 x 1080"],
["$249", "13MP", "32GB", "6.26"", "1520 x 720"],
["$279", "13MP", "32GB", "6.4"", "1560 x 720"],
["$279", "13MP", "64GB", "6.2"", "1520 x 720"],
["$279", "13MP", "32GB", "5.5"", "2160 x 1080"],
["$299", "13MP", "64GB", "6.2"", "1520 x 720"],
["$299", "13MP", "32GB", "5.71"", "1520 x 720"],
["$299", "12MP", "64GB", "5.7"", "2560 x 1440"],
["$299", "13MP", "128GB", "6.35"", "1544 x 720"],
["$299", "16MP", "32GB", "5.5"", "1920 x 1080"],
["$299", "16MP", "64GB", "6.26"", "1520 x 720"],
["$299", "16MP", "64GB", "6.52"", "1600 x 720"],
["$299", "12.3MP", "32GB", "5.2"", "1920 x 1080"],
["$349", "16MP", "128GB", "6.59"", "2340 x 1080"],
["$379", "16MP", "32GB", "6.4"", "1920 x 1080"],
["$379", "16MP", "32GB", "5.7"", "1920 x 1080"],
["$399", "48MP", "128GB", "6.5"", "2340 x 1080"],
["$399", "16MP", "128GB", "6.3"", "2340 x 1080"],
["$399", "16MP", "128GB", "6.3"", "2340 x 1080"],
["$399", "16MP", "64GB", "6.3"", "2280 x 1080"],
["$399", "48MP", "128GB", "6.3"", "2520 x 1080"],
["$399", "24MP", "128GB", "6.15"", "2312 x 1080"],
["$399", "12MP", "32GB", "5.2"", "1920 x 1080"],
["$399", "16MP", "128GB", "6.38"", "2340 x 1080"],
["$399", "48MP", "128GB", "6.088"", "1560 x 720"],
["$399", "12.3MP", "128GB", "5"", "1920 x 1080"],
["$399", "16MP", "32GB", "5.1"", "2560 x 1440"],
["$449", "48MP", "128GB", "6.4"", "2340 x 1080"],
["$449", "12MP", "32GB", "5.84"", "2280 x 1080"],
["$499", "12MP", "32GB", "4.7"", "1334 x 750"],
["$499", "25MP", "64GB", "6.4"", "2340 x 1080"],
["$499", "48MP", "128GB", "5.52"", "2340 x 1080"],
["$499", "12MP", "64GB", "6.18"", "2280 x 1080"],
["$499", "20MP", "128GB", "5.5"", "2560 x 1440"],
["$499", "12.3MP", "128GB", "5.5"", "2560 x 1440"],
["$499", "23MP", "32GB", "5.5"", "3840 x 2160"],
["$499", "13MP", "64GB", "5.7"", "2880 x 1440"],
["$549", "48MP", "128GB", "6.3"", "2280 x 1080"],
["$549", "16MP", "32GB", "5.6"", "2220 x 1080"],
["$599", "12MP", "128GB", "4.7"", "1334 x 750"],
["$599", "48MP", "128GB", "6.5"", "2340 x 1080"],
["$599", "48MP", "128GB", "6.26"", "2340 x 1080"],
["$599", "48MP", "128GB", "6.4"", "2340 x 1080"],
["$599", "20MP", "128GB", "6.4"", "2340 x 1080"],
["$649", "32MP", "128GB", "6.7"", "2400 x 1080"],
["$649", "12.2MP", "64GB", "5.6"", "2220 x 1080"],
["$699", "12MP", "128GB", "5.99"", "2880 x 1440"],
["$699", "12MP", "128GB", "6.39"", "2340 x 1080"],
["$699", "20MP", "256GB", "6.4"", "2340 x 1080"],
["$699", "12MP", "128GB", "6.4"", "3120 x 1400"],
["$699", "12MP", "32GB", "3.3"", "1280 x 720"],
["$779", "12MP", "64GB", "4.7"", "1334 x 750"],
["$799", "12MP", "64GB", "6.2"", "2960 x 1440"],
["$799", "12MP", "128GB", "5.5"", "1920 x 1080"],
["$799", "13MP", "32GB", "4.5"", "1620 x 1080"],
["$859", "12MP", "128GB", "4.7"", "1334 x 750"],
["$879", "12.2MP", "128GB", "5.5"", "2160 x 1080"],
["$899", "40MP", "128GB", "6.1"", "2340 x 1080"],
["$899", "12MP", "256GB", "5.8"", "2960 x 1400"],
["$899", "12.2MP", "64GB", "6.3"", "2960 x 1440"],
["$999", "12MP", "64GB", "5.8"", "2436 x 1125"],
["$999", "16MP", "128GB", "5.8"", "2280 x 1080"],
["$999", "48MP", "128GB", "6.7"", "2400 x 1080"],
["$999", "12MP", "256GB", "6.2"", "2960 x 1440"],
["$999", "12.2MP", "128GB", "6.3"", "2960 x 1440"],
["$1049", "16MP", "64GB", "5.7"", "2280 x 1080"],
["$1049", "12MP", "64GB", "6.1"", "1792 x 868"],
["$1129", "12MP", "128GB", "6.1"", "1792 x 868"],
["$1149", "12MP", "256GB", "5.8"", "2436 x 1125"],
["$1199", "12MP", "64GB", "6.1"", "1792 x 828"],
["$1199", "16MP", "128GB", "6.4"", "3040 x 1440"],
["$1199", "40MP", "256GB", "6.47"", "2340 x 1080"],
["$1199", "16MP", "128GB", "5.7"", "2280 x 1080"],
["$1199", "16MP", "512GB", "6.1"", "3040 x 1440"],
["$1249", "12MP", "64GB", "6.5"", "2688 x 1242"],
["$1279", "12MP", "128GB", "6.1"", "1792 x 828"],
["$1279", "16MP", "64GB", "6.3"", "3040 x 1440"],
["$1349", "12MP", "512GB", "5.8"", "2436 x 1125"],
["$1399", "12MP", "256GB", "6.5"", "2688 x 1242"],
["$1429", "16MP", "128GB", "6.3"", "3040 x 1440"],
["$1449", "12MP", "256GB", "6.1"", "1792 x 828"],
["$1599", "16MP", "512GB", "6.4"", "3040 x 1440"],
["$1699", "12MP", "256GB", "6.8"", "3040 x 1440"],
["$1699", "16MP", "1000GB", "6.4"", "3040 x 1440"],
["$1749", "12MP", "64GB", "5.8"", "2436 x 1125"],
["$1899", "12MP", "64GB", "6.5"", "2688 x 1242"],
["$1999", "12MP", "256GB", "5.8"", "2436 x 1125"],
["$1999", "12MP", "512GB", "6.8"", "3040 x 1440"],
["$2149", "12MP", "256GB", "6.5"", "2688 x 1242"],
["$2349", "12MP", "512GB", "5.8"", "2436 x 1125"],
["$2499", "12MP", "512GB", "6.5"", "2688 x 1242"]]