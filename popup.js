document.getElementById("define-btn").addEventListener("click", async () => {
    const text = document.getElementById("input-text").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading...";
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
    const data = await response.json();
    if (data[0]?.meanings) {
      resultDiv.innerHTML = `<strong>Definition:</strong> ${data[0].meanings[0].definitions[0].definition}`;
    } else {
      resultDiv.innerHTML = "Definition not found!";
    }
  });
  
  document.getElementById("translate-btn").addEventListener("click", async () => {
    const text = document.getElementById("input-text").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading...";
  
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|hi`);
    const data = await response.json();

    if (data.responseData && data.responseData.translatedText) {
      resultDiv.innerHTML = `${data.matches[0].translation} , ${data.matches[1].translation} , ${data.matches[2].translation}`;
    } else {
      resultDiv.innerHTML = "Translation not found!";
    }
  });
  
  