self.addEventListener("message", (e) => {
  console.log(fetch);
  console.log("blob = ", e.data);
  self.postMessage("SAMPLE_DATA_PROCESSED");
});
