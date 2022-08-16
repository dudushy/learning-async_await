console.log("[learning-async_await] init");

function wait(seconds) {
  console.log("[wait] seconds", seconds);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`[wait] waited ${seconds}s`);
    }, seconds * 1000);
  });
}

async function showResultAfter(seconds) {
  console.log("[showResultAfter] seconds", seconds);

  let h1 = document.getElementById("h1-result");
  console.log("[showResultAfter] h1", h1);

  h1.style.backgroundColor = "var(--wall)";

  //? First method
  // const result = await wait(seconds);
  // console.log(result);

  //? Second method (I like this one)
  await wait(seconds);

  h1.style.backgroundColor = "var(--success)";
}

// showResultAfter(2);
