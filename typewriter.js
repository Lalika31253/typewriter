const sentence = "hello there from lighthouse labs";

function animatedSentence() {
  let i = 0;
  const interval = setInterval(() => {
    process.stdout.write(sentence[i++]);
    if (i === sentence.length) {
      clearInterval(interval);
    }
  }, 100)
}

animatedSentence();
