
const URL="https://restcountries.com/v3.1/all"
const xhr=new XMLHttpRequest();
const xhrURLs=data.map(country=>country.flag.png);
xhr.open("GET",URL);
xhr.send();
xhr.onload=()=>{
    console.log(JSON.parse(xhr.response));
}