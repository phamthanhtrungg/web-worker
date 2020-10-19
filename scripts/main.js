const workerFor = new Worker("../workers/for.js");
const result = document.getElementById("result");
let count = 0;
var blob = new ArrayBuffer(100);
var blobObj = { img1: new ArrayBuffer(100), img2: new ArrayBuffer(300) };
var blobArr = [new ArrayBuffer(100), new ArrayBuffer(200)];

if (!result) {
  result = document.createElement("div");
  document.body.appendChild(result);
}

workerFor.addEventListener("message", (e) => {
  ++count;
  result.innerHTML = "message received => " + e.data + "  counts: " + count;
});

workerFor.addEventListener("error", (e) => {
  result.innerHTML = "Error: " + e.error;
});

function loadResult() {
  result.innerHTML = "loading...";

  workerFor.postMessage(blob, [blob]);
  workerFor.postMessage(blobObj, [blobObj.img1]);
  workerFor.postMessage(blobArr, [blobArr[1]]);
}
