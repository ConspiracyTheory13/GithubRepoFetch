// The user must be able to search for a GitHub user handle.
// The search must trigger a call to GitHub's API.
// The repos associated with that handle must be displayed on the page.
// You must display the repo name and link to the repo URL.
// The user must be able to make multiple searches and see only the results for the current search.

//GET /users/:username/repos

const clientId= "Iv1.a4450a0e9f570615";
const clientSecret="A92273779e1b33882c40c3fed8c0f2ff9777b5246";

// First, on submit of my form userLookup the .userInput value is ran against all
//repos on github.

//name, html_url

$(".userLookupForm").submit(function(event) {
    event.preventDefault();  
    let userUrl = 'https://api.github.com/users/'+$(".userLookup").val()+ '/repos';
    console.log(userUrl);
    fetch(userUrl)
      .then(response => response.json())
      .then(responseJson => displayUserRepo(responseJson));
    }
);

//append to repoContainer

function displayUserRepo(data) {
for(let i=0; i < data.length; i++) {
  // $('.repoContainer').append('<li>'+ data[i].name + '<br>' + data[i].html_url + '</li>')
  $('.repoContainer').append(`<li><a href="${data[i].html_url}"> ${data[i].name}</a> </li>`);
};

//, data[i].html_url
}

const showData = () => {
  displayUserRepo(userInput.value).then((result) => {
  console.log("showDataFiring")
  }
)};
 
function empty(){
    $( ".repoContainer" ).empty();
  };

function displayError(){
  $(".repoContainer").html("<li>Sorry, git username is not found. Please try again.</li>");
  showData();
}