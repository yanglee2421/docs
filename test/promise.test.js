const p = Promise.resolve("success");
p.then((res) => {
  console.log("then1");
  p.then((res) => {
    console.log("then2");
  });
});
