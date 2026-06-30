const startTimeSettled = Date.now();
const filePromisesSettled = files.map(file => processFile(file.name, file.time));

Promise.allSettled(filePromisesSettled)
  .then((results) => {
    const totalTime = Date.now() - startTimeSettled;
    console.log(`\n🏁 BATCH FINISHED in ${totalTime}ms.`);
    
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`✅ File ${index + 1} succeeded:`, result.value);
      } else {
        // If it rejected, the error is stored in 'reason' instead of 'value'
        console.log(`❌ File ${index + 1} failed:`, result.reason.message);
      }
    });
  });