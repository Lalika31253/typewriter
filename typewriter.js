const sentence = "hello there from lighthouse labs";

const animatedSentence = function () {
  let i = 0;
  const interval = setInterval(() => {
    process.stdout.write(sentence[i++] + '\n');
    if (i === sentence.length) {
      clearInterval(interval);
    }
  }, 300)
}

animatedSentence();
