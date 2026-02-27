function Count(sentence) {
  
  const totalCharacters = sentence.length;
  
 
  const words = sentence.trim().split(/\s+/);
  const totalWords = words.length;
  

  const lowercase = sentence.toLowerCase();
  

  return {
    totalCharacters: totalCharacters,
    totalWords: totalWords,
    lowercase: lowercase
  };
}

// Example Usage
const sentence = "Hello World! This is a Test Sentence.";
const result = analyzeWordCount(sentence);

console.log(result);