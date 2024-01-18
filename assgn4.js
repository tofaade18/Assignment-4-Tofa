const profileform = document.getElementById('form-prof');
const countryinput = document.getElementById("form-control");

// const fetch = require('node-fetch');

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const fetchs = require('node-fetch');

let urls = 'https://covid-193.p.rapidapi.com/statistics?country=';
let optionss = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};
const dataa = async(fix_url,optionss) => {
  try {
    const responses = await fetch(fix_url, optionss);
    const results = await responses.text();
    console.log(results);
    
    process(JSON.parse(results))
  } catch (errors) {
    console.error(errors);
  }
}

function process(data) {
    document.getElementsByClassName("active")[0].innerHTML = data.response[0].cases.active ?? 0;
    document.getElementsByClassName("new")[0].innerHTML = data.response[0].cases.new ?? 0;
    document.getElementsByClassName("recovered")[0].innerHTML = data.response[0].cases.recovered ?? 0;
    document.getElementsByClassName("total-cases")[0].innerHTML = data.response[0].cases.total ?? 0;
    document.getElementsByClassName("total-deaths")[0].innerHTML = data.response[0].deaths.total ?? 0;
    document.getElementsByClassName("total-tests")[0].innerHTML = data.response[0].tests.total ?? 0;

};

profileform.addEventListener("click", (event) => {
    event.preventDefault();
    fix_url = urls + countryinput.value.toLowerCase();
    console.log(fix_url);
    dataa(fix_url,optionss)

    // fetch(fix_url,optionss)
    // .then((responses) => {
    //     return responses.json();
    // }).then((data) => {
    //     process(data.responses[0]);
    // }).catch((err) => {
    //     alert(err);
    // });
});