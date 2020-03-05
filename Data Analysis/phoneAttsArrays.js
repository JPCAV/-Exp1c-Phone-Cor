let corrAtts = 
[["price", "camera", "memory", "screen_size", "resolution"],
["$44", "5MP", "8GB", '5"', "1280 x 720"],
["$134", "13MP", "16GB", '5"', "1280 x 720"],
["$179", "8MP", "8GB", '5"', "1280 x 720"],
["$179", "16MP", "32GB", '5.2"', "1920 x 1080"],
["$199", "13MP", "64GB", '6.1"', "1560 x 720"],
["$199", "13MP", "16GB", '5.7"', "1520 x 720"],
["$199", "13MP", "32GB", '5.5"', "1440 x 720"],
["$229", "13MP", "32GB", '6.2"', "1520 x 720"],
["$239", "13MP", "64GB", '6.2"', "1520 x 720"],
["$249", "13MP", "64GB", '6.4"', "1544 x 720"],
["$249", "13MP", "32GB", '5.5"', "1920 x 1080"],
["$249", "13MP", "32GB", '6.3"', "1520 x 720"],
["$279", "13MP", "32GB", '6.4"', "1560 x 720"],
["$279", "13MP", "64GB", '6.2"', "1520 x 720"],
["$279", "13MP", "32GB", '5.5"', "2160 x 1080"],
["$299", "13MP", "64GB", '6.2"', "1520 x 720"],
["$299", "13MP", "32GB", '5.7"', "1520 x 720"],
["$299", "12MP", "64GB", '5.7"', "2560 x 1440"],
["$299", "13MP", "128GB",'6.4"', "1544 x 720"],
["$299", "16MP", "32GB", '5.5"', "1920 x 1080"],
["$299", "16MP", "64GB", '6.3"', "1520 x 720"],
["$299", "16MP", "64GB", '6.5"', "1600 x 720"],
["$299", "12MP", "32GB", '5.2"', "1920 x 1080"],
["$349", "16MP", "128GB",'6.6"', "2340 x 1080"],
["$379", "16MP", "32GB", '6.4"', "1920 x 1080"],
["$379", "16MP", "32GB", '5.7"', "1920 x 1080"],
["$399", "48MP", "128GB",'6.5"', "2340 x 1080"],
["$399", "16MP", "128GB",'6.3"', "2340 x 1080"],
["$399", "16MP", "64GB", '6.3"', "2280 x 1080"],
["$399", "48MP", "128GB",'6.3"', "2520 x 1080"],
["$399", "24MP", "128GB",'6.2"', "2312 x 1080"],
["$399", "12MP", "32GB", '5.2"', "1920 x 1080"],
["$399", "16MP", "128GB",'6.4"', "2340 x 1080"],
["$399", "48MP", "128GB",'6.1"', "1560 x 720"],
["$399", "12MP", "128GB",'5.0"', "1920 x 1080"],
["$399", "16MP", "32GB", '5.1"', "2560 x 1440"],
["$449", "48MP", "128GB", '6.4"', "2340 x 1080"],
["$449", "12MP", "32GB", '5.8"', "2280 x 1080"],
["$499", "12MP", "32GB", '4.7"', "1334 x 750"],
["$499", "25MP", "64GB", '6.4"', "2340 x 1080"],
["$499", "48MP", "128GB", '5.5"', "2340 x 1080"],
["$499", "12MP", "64GB", '6.2"', "2280 x 1080"],
["$499", "20MP", "128GB", '5.5"', "2560 x 1440"],
["$499", "12MP", "128GB", '5.5"', "2560 x 1440"],
["$499", "23MP", "32GB", '5.5"', "3840 x 2160"],
["$499", "13MP", "64GB", '5.7"', "2880 x 1440"],
["$549", "48MP", "128GB", '6.3"', "2280 x 1080"],
["$549", "16MP", "32GB", '5.6"', "2220 x 1080"],
["$599", "12MP", "128GB", '4.7"', "1334 x 750"],
["$599", "48MP", "128GB", '6.5"', "2340 x 1080"],
["$599", "48MP", "128GB", '6.3"', "2340 x 1080"],
["$599", "48MP", "128GB", '6.4"', "2340 x 1080"],
["$599", "20MP", "128GB", '6.4"', "2340 x 1080"],
["$649", "32MP", "128GB", '6.7"', "2400 x 1080"],
["$649", "12MP", "64GB", '5.6"', "2220 x 1080"],
["$699", "12MP", "128GB", '6.0"', "2880 x 1440"],
["$699", "12MP", "128GB", '6.4"', "2340 x 1080"],
["$699", "20MP", "256GB", '6.4"', "2340 x 1080"],
["$699", "12MP", "128GB", '6.4"', "3120 x 1400"],
["$699", "12MP", "32GB", '3.3"', "1280 x 720"],
["$779", "12MP", "64GB", '4.7"', "1334 x 750"],
["$799", "12MP", "64GB", '6.2"', "2960 x 1440"],
["$799", "12MP", "128GB", '5.5"', "1920 x 1080"],
["$799", "13MP", "32GB", '4.5"', "1620 x 1080"],
["$859", "12MP", "128GB", '4.7"', "1334 x 750"],
["$879", "12MP", "128GB", '5.5"', "2160 x 1080"],
["$899", "40MP", "128GB", '6.1"', "2340 x 1080"],
["$899", "12MP", "256GB", '5.8"', "2960 x 1400"],
["$899", "12MP", "64GB", '6.3"', "2960 x 1440"],
["$999", "12MP", "64GB", '5.8"', "2436 x 1125"],
["$999", "16MP", "128GB", '5.8"', "2280 x 1080"],
["$999", "48MP", "128GB", '6.7"', "2400 x 1080"],
["$999", "12MP", "256GB", '6.2"', "2960 x 1440"],
["$999", "12MP", "128GB", '6.3"', "2960 x 1440"],
["$1049", "16MP", "64GB", '5.7"', "2280 x 1080"],
["$1049", "12MP", "64GB", '6.1"', "1792 x 868"],
["$1129", "12MP", "128GB", '6.1"', "1792 x 868"],
["$1149", "12MP", "256GB", '5.8"', "2436 x 1125"],
["$1199", "12MP", "64GB", '6.1"', "1792 x 828"],
["$1199", "16MP", "128GB", '6.4"', "3040 x 1440"],
["$1199", "40MP", "256GB", '6.5"', "2340 x 1080"],
["$1199", "16MP", "128GB", '5.7"', "2280 x 1080"],
["$1199", "16MP", "512GB", '6.1"', "3040 x 1440"],
["$1249", "12MP", "64GB", '6.5"', "2688 x 1242"],
["$1279", "12MP", "128GB", '6.1"', "1792 x 828"],
["$1279", "16MP", "64GB", '6.3"', "3040 x 1440"],
["$1349", "12MP", "512GB", '5.8"', "2436 x 1125"],
["$1399", "12MP", "256GB", '6.5"', "2688 x 1242"],
["$1429", "16MP", "128GB", '6.3"', "3040 x 1440"],
["$1449", "12MP", "256GB", '6.1"', "1792 x 828"],
["$1599", "16MP", "512GB", '6.4"', "3040 x 1440"],
["$1699", "12MP", "256GB", '6.8"', "3040 x 1440"],
["$1699", "16MP", "1000GB", '6.4"', "3040 x 1440"],
["$1749", "12MP", "64GB", '5.8"', "2436 x 1125"],
["$1899", "12MP", "64GB", '6.5"', "2688 x 1242"],
["$1999", "12MP", "256GB", '5.8"', "2436 x 1125"],
["$1999", "12MP", "512GB", '6.8"', "3040 x 1440"],
["$2149", "12MP", "256GB", '6.5"', "2688 x 1242"],
["$2349", "12MP", "512GB", '5.8"', "2436 x 1125"],
["$2499", "12MP", "512GB", '6.5"', "2688 x 1242"]]

let uncorrPhAtts = [
    {price: "$44", camera: "5MP", memory: "8GB", screenSize: '5"', resolution: "1280 x 720"}
    {price: "$134", camera: "13MP", memory: "16GB", screenSize: '5"', resolution: "1280 x 720"}
    {price: "$179", camera: "8MP", memory: "8GB", screenSize: '5"', resolution: "1280 x 720"}
    {price: "$179", camera: "16MP", memory: "32GB", screenSize: '5.2"', resolution: "1920 x 1080"}
    {price: "$199", camera: "13MP", memory: "64GB", screenSize: '6.1"', resolution: "1560 x 720"}
    {price: "$199", camera: "13MP", memory: "16GB", screenSize: '5.7"', resolution: "1520 x 720"}
    {price: "$199", camera: "13MP", memory: "32GB", screenSize: '5.5"', resolution: "1440 x 720"}
    {price: "$229", camera: "13MP", memory: "32GB", screenSize: '6.2"', resolution: "1520 x 720"}
    {price: "$239", camera: "13MP", memory: "64GB", screenSize: '6.2"', resolution: "1520 x 720"}
    {price: "$249", camera: "13MP", memory: "64GB", screenSize: '6.4"', resolution: "1544 x 720"}
    {price: "$249", camera: "13MP", memory: "32GB", screenSize: '5.5"', resolution: "1920 x 1080"}
    {price: "$249", camera: "13MP", memory: "32GB", screenSize: '6.3"', resolution: "1520 x 720"}
    {price: "$279", camera: "13MP", memory: "32GB", screenSize: '6.4"', resolution: "1560 x 720"}
    {price: "$279", camera: "13MP", memory: "64GB", screenSize: '6.2"', resolution: "1520 x 720"}
    {price: "$279", camera: "13MP", memory: "32GB", screenSize: '5.5"', resolution: "2160 x 1080"}
    {price: "$299", camera: "13MP", memory: "64GB", screenSize: '6.2"', resolution: "1520 x 720"}
    {price: "$299", camera: "13MP", memory: "32GB", screenSize: '5.7"', resolution: "1520 x 720"}
    {price: "$299", camera: "12MP", memory: "64GB", screenSize: '5.7"', resolution: "2560 x 1440"}
    {price: "$299", camera: "13MP", memory: "128GB", screenSize: '6.4"', resolution: "1544 x 720"}
    {price: "$299", camera: "16MP", memory: "32GB", screenSize: '5.5"', resolution: "1920 x 1080"}
    {price: "$299", camera: "16MP", memory: "64GB", screenSize: '6.3"', resolution: "1520 x 720"}
    {price: "$299", camera: "16MP", memory: "64GB", screenSize: '6.5"', resolution: "1600 x 720"}
    {price: "$299", camera: "12MP", memory: "32GB", screenSize: '5.2"', resolution: "1920 x 1080"}
    {price: "$349", camera: "16MP", memory: "128GB", screenSize: '6.6"', resolution: "2340 x 1080"}
    {price: "$379", camera: "16MP", memory: "32GB", screenSize: '6.4"', resolution: "1920 x 1080"}
    {price: "$379", camera: "16MP", memory: "32GB", screenSize: '5.7"', resolution: "1920 x 1080"}
    {price: "$399", camera: "48MP", memory: "128GB", screenSize: '6.5"', resolution: "2340 x 1080"}
    {price: "$399", camera: "16MP", memory: "128GB", screenSize: '6.3"', resolution: "2340 x 1080"}
    {price: "$399", camera: "16MP", memory: "64GB", screenSize: '6.3"', resolution: "2280 x 1080"}
    {price: "$399", camera: "48MP", memory: "128GB", screenSize: '6.3"', resolution: "2520 x 1080"}
    {price: "$399", camera: "24MP", memory: "128GB", screenSize: '6.2"', resolution: "2312 x 1080"}
    {price: "$399", camera: "12MP", memory: "32GB", screenSize: '5.2"', resolution: "1920 x 1080"}
    {price: "$399", camera: "16MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"}
    {price: "$399", camera: "48MP", memory: "128GB", screenSize: '6.1"', resolution: "1560 x 720"}
    {price: "$399", camera: "12MP", memory: "128GB", screenSize: '5.0"', resolution: "1920 x 1080"}
    {price: "$399", camera: "16MP", memory: "32GB", screenSize: '5.1"', resolution: "2560 x 1440"}
    {price: "$449", camera: "48MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"}
    {price: "$449", camera: "12MP", memory: "32GB", screenSize: '5.8"', resolution: "2280 x 1080"}
    {price: "$499", camera: "12MP", memory: "32GB", screenSize: '4.7"', resolution: "1334 x 750"}
    {price: "$499", camera: "25MP", memory: "64GB", screenSize: '6.4"', resolution: "2340 x 1080"}
    {price: "$499", camera: "48MP", memory: "128GB", screenSize: '5.5"', resolution: "2340 x 1080"}
    {price: "$499", camera: "12MP", memory: "64GB", screenSize: '6.2"', resolution: "2280 x 1080"}
    {price: "$499", camera: "20MP", memory: "128GB", screenSize: '5.5"', resolution: "2560 x 1440"}
    {price: "$499", camera: "12MP", memory: "128GB", screenSize: '5.5"', resolution: "2560 x 1440"}
    {price: "$499", camera: "23MP", memory: "32GB", screenSize: '5.5"', resolution: "3840 x 2160"}
    {price: "$499", camera: "13MP", memory: "64GB", screenSize: '5.7"', resolution: "2880 x 1440"}
    {price: "$549", camera: "48MP", memory: "128GB", screenSize: '6.3"', resolution: "2280 x 1080"}
    {price: "$549", camera: "16MP", memory: "32GB", screenSize: '5.6"', resolution: "2220 x 1080"}
    {price: "$599", camera: "12MP", memory: "128GB", screenSize: '4.7"', resolution: "1334 x 750"}
    {price: "$599", camera: "48MP", memory: "128GB", screenSize: '6.5"', resolution: "2340 x 1080"}
    {price: "$599", camera: "48MP", memory: "128GB", screenSize: '6.3"', resolution: "2340 x 1080"}
    {price: "$599", camera: "48MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"}
    {price: "$599", camera: "20MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"}
    {price: "$649", camera: "32MP", memory: "128GB", screenSize: '6.7"', resolution: "2400 x 1080"}
    {price: "$649", camera: "12MP", memory: "64GB", screenSize: '5.6"', resolution: "2220 x 1080"}
    {price: "$699", camera: "12MP", memory: "128GB", screenSize: '6.0"', resolution: "2880 x 1440"}
    {price: "$699", camera: "12MP", memory: "128GB", screenSize: '6.4"', resolution: "2340 x 1080"}
    {price: "$699", camera: "20MP", memory: "256GB", screenSize: '6.4"', resolution: "2340 x 1080"}
    {price: "$699", camera: "12MP", memory: "128GB", screenSize: '6.4"', resolution: "3120 x 1400"}
    {price: "$699", camera: "12MP", memory: "32GB", screenSize: '3.3"', resolution: "1280 x 720"}
    {price: "$779", camera: "12MP", memory: "64GB", screenSize: '4.7"', resolution: "1334 x 750"}
    {price: "$799", camera: "12MP", memory: "64GB", screenSize: '6.2"', resolution: "2960 x 1440"}
    {price: "$799", camera: "12MP", memory: "128GB", screenSize: '5.5"', resolution: "1920 x 1080"}
    {price: "$799", camera: "13MP", memory: "32GB", screenSize: '4.5"', resolution: "1620 x 1080"}
    {price: "$859", camera: "12MP", memory: "128GB", screenSize: '4.7"', resolution: "1334 x 750"}
    {price: "$879", camera: "12MP", memory: "128GB", screenSize: '5.5"', resolution: "2160 x 1080"}
    {price: "$899", camera: "40MP", memory: "128GB", screenSize: '6.1"', resolution: "2340 x 1080"}
    {price: "$899", camera: "12MP", memory: "256GB", screenSize: '5.8"', resolution: "2960 x 1400"}
    {price: "$899", camera: "12MP", memory: "64GB", screenSize: '6.3"', resolution: "2960 x 1440"}
    {price: "$999", camera: "12MP", memory: "64GB", screenSize: '5.8"', resolution: "2436 x 1125"}
    {price: "$999", camera: "16MP", memory: "128GB", screenSize: '5.8"', resolution: "2280 x 1080"}
    {price: "$999", camera: "48MP", memory: "128GB", screenSize: '6.7"', resolution: "2400 x 1080"}
    {price: "$999", camera: "12MP", memory: "256GB", screenSize: '6.2"', resolution: "2960 x 1440"}
    {price: "$999", camera: "12MP", memory: "128GB", screenSize: '6.3"', resolution: "2960 x 1440"}
    {price: "$1049", camera: "16MP", memory: "64GB", screenSize: '5.7"', resolution: "2280 x 1080"}
    {price: "$1049", camera: "12MP", memory: "64GB", screenSize: '6.1"', resolution: "1792 x 868"}
    {price: "$1129", camera: "12MP", memory: "128GB", screenSize: '6.1"', resolution: "1792 x 868"}
    {price: "$1149", camera: "12MP", memory: "256GB", screenSize: '5.8"', resolution: "2436 x 1125"}
    {price: "$1199", camera: "12MP", memory: "64GB", screenSize: '6.1"', resolution: "1792 x 828"}
    {price: "$1199", camera: "16MP", memory: "128GB", screenSize: '6.4"', resolution: "3040 x 1440"}
    {price: "$1199", camera: "40MP", memory: "256GB", screenSize: '6.5"', resolution: "2340 x 1080"}
    {price: "$1199", camera: "16MP", memory: "128GB", screenSize: '5.7"', resolution: "2280 x 1080"}
    {price: "$1199", camera: "16MP", memory: "512GB", screenSize: '6.1"', resolution: "3040 x 1440"}
    {price: "$1249", camera: "12MP", memory: "64GB", screenSize: '6.5"', resolution: "2688 x 1242"}
    {price: "$1279", camera: "12MP", memory: "128GB", screenSize: '6.1"', resolution: "1792 x 828"}
    {price: "$1279", camera: "16MP", memory: "64GB", screenSize: '6.3"', resolution: "3040 x 1440"}
    {price: "$1349", camera: "12MP", memory: "512GB", screenSize: '5.8"', resolution: "2436 x 1125"}
    {price: "$1399", camera: "12MP", memory: "256GB", screenSize: '6.5"', resolution: "2688 x 1242"}
    {price: "$1429", camera: "16MP", memory: "128GB", screenSize: '6.3"', resolution: "3040 x 1440"}
    {price: "$1449", camera: "12MP", memory: "256GB", screenSize: '6.1"', resolution: "1792 x 828"}
    {price: "$1599", camera: "16MP", memory: "512GB", screenSize: '6.4"', resolution: "3040 x 1440"}
    {price: "$1699", camera: "12MP", memory: "256GB", screenSize: '6.8"', resolution: "3040 x 1440"}
    {price: "$1699", camera: "16MP", memory: "1000GB", screenSize: '6.4"', resolution: "3040 x 1440"}
    {price: "$1749", camera: "12MP", memory: "64GB", screenSize: '5.8"', resolution: "2436 x 1125"}
    {price: "$1899", camera: "12MP", memory: "64GB", screenSize: '6.5"', resolution: "2688 x 1242"}
    {price: "$1999", camera: "12MP", memory: "256GB", screenSize: '5.8"', resolution: "2436 x 1125"}
    {price: "$1999", camera: "12MP", memory: "512GB", screenSize: '6.8"', resolution: "3040 x 1440"}
    {price: "$2149", camera: "12MP", memory: "256GB", screenSize: '6.5"', resolution: "2688 x 1242"}
    {price: "$2349", camera: "12MP", memory: "512GB", screenSize: '5.8"', resolution: "2436 x 1125"}
    {price: "$2499", camera: "12MP", memory: "512GB", screenSize: '6.5"', resolution: "2688 x 1242"}]