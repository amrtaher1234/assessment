// this is just a dom script I wrote to crawl wikipedia's table
// in chrom's developer tools
// to identify names of numbers and putting them inside a map.

// I just wanted it to place it over here so you guys know how I generally think.
// I like automating or doing code to fetch data instead of writting it.

var table = document.querySelector(".wikitable");
var tabletrs = table.querySelectorAll("tr");

let answer = {};
for (let i = 1; i < tabletrs.length - 2; i++) {
  let tds = tabletrs[i].getElementsByTagName("td");
  try {
    let key = tds.item(1).innerText;
    let value = tds.item(0).innerText;
    answer[key + 1] = Number(value);
  } catch (err) {}
}