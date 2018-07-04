let btn = document.querySelector("#mainButton");
let wrapper = document.querySelector("#wrapper");

// Within this code block for the Event Listener, call the function sendApiRequest() to fetch for gifs!

btn.addEventListener("click", e => {
  console.log("you've clicked the button!");
  
});

// In the URL, replace YOUR_API_KEY with your API Key.
// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.

function sendApiRequest() {
  let response = fetch("https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=panda&limit=25&offset=0&rating=G&lang=en");
  console.log(response);
};


// querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addImageToScreen(myURL) {

};

// Playtime challenges:
// Find something / someone else (rewrite the endpoint so that we aren't searching for pandas)
// Instead of getting the first image, get a random image from the JSON results
// REPLACE the contents of the wrapper instead of adding onto them
// Make all your images the same height so that they line up nicely
