//Requirements:
// The user must be able to search for a GitHub user handle.
// The search must trigger a call to GitHub's API.
// The repos associated with that handle must be displayed on the page.
// You must display the repo name and link to the repo URL.
// The user must be able to make multiple searches and see only the results for the current search.

//GET /users/:username/repos

// First, on submit of my form userLookup the .userInput value is ran against all
//repos on github.

const key="";

$(".userLookup").submit(function(event) {
    event.preventDefault();  
    fetch('https://dog.ceo/api/breeds/image/random/'+$(".userInput").val())
      .then(response => response.json())
      .then(responseJson => printDogImages(responseJson));
    }
);

function getDogByBreed(userInputBreed) {
  //   console.log(userInputBreed);
  //   if(userInputBreed.message === "Breed not found (master breed does not exist)") 
  //   { displayError();
  //   } else { 
  //   empty();
  //   let breedImg = '<li><img src="'+ userInputBreed.message + '"></li>';
  //   $(".dogsByBreedContainer").append(breedImg);}
  // };
  
function empty(){
    $( ".repoContainer" ).empty();
  };

function displayError(){
  $(".repoContainer").html("<li>Sorry, git username is not found. Please try again.</li>");
}
// $(".bringTheDogBreed").submit(function(event) {
//   event.preventDefault();  
//   fetch('https://dog.ceo/api/breed/'+$(".userInputBreed").val().toLowerCase()+`/images/random`)
//     .then(response => response.json())
//     .then(responseJson => getDogByBreed(responseJson))
//     .catch(function(error) 
//       {console.log('There has been a problem with your fetch operation: ', error.message);
//       displayError();
//       });
//     });

