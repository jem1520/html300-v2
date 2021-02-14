
//Setting up jQuery function
$(function () {

//JASON data for page
const cardInfo = '[{"name":"Paolo Maldini","jobTitle":"Front End Developer","company":"Web Weavers","experience":"3 years","codeLanguages":["HTML", " CSS", " JavaScript", " Node", " Express"],"school":"University of Washington","major":"Marketing","email":"paolo@example.com","linkedInUrl":"paolo.linkedinprofile.com"},{"name":"Barbara Bonansea","jobTitle":"Software Engineer","company":"Excellence in the Cloud","experience":"12 years","codeLanguages": [" HTML", " JavaScript", " C", " Go"],"school":"University of Southern California","major":"Computer Science","email":"barbara@example.com","linkedInUrl":"barbara.linkedinprofile.com"},{"name":"Javier Hernandez","jobTitle":"User Experience Engineer","company":"Web Sites and More","experience":"5 years","codeLanguages": [" HTML", " CSS"],"school":"Seattle University","major":"Performing Arts","email":"javier@example.com","linkedInUrl":"javier.linkedinprofile.com"},{"name":"Maribel Dominguez","jobTitle":"Front End Engineer","company":"Bits and Bytes","experience":"6 years","codeLanguages": [" HTML", " CSS", " JavaScript", " React", " Vue", " Redux"],"school":"University of Washington","major":"Mechanical Engineering","email":"maribel@example.com","linkedInUrl":"maribel.linkedinprofile.com"}]';
const card = JSON.parse(cardInfo);

//building out html page
const container = document.querySelector('.template-hook')

// Loop through all elements of the list
let cardData = card.forEach(function(el){

  //Build html flexbox/grid element
  let div = document.createElement('div');
  div.className = 'main';
  container.append(div);

  let div2 = document.createElement('div');
  div2.className = "box1";
  div.append(div2);

  // Create HTML code from JSON data
  let image = document.createElement('img');
  image.setAttribute('src','img/headshot.jpg');
  image.setAttribute('alt','headshot');
  image.className ="image";
  let head = document.createElement('h1');
  head.innerHTML = (`${el.name}`);
  let title = document.createElement('h2');
  title.innerHTML = (`${el.jobTitle}`);
  div2.append(image, head, title);

  //Build second html flexbox/grid element and create HTML code from JSON data
  let boxdiv = document.createElement('div');
  boxdiv.className = "box2"
  boxdiv.innerHTML = `
      <p>Company: <span class="normal">${el.company}</span></p>
      <p>Experience: <span class="normal">${el.experience}</span></p>
      <p>Code Languages: <span class="normal">${el.codeLanguages}</span></p>
      <p>School: <span class="normal">${el.school}</span></p>
      <p>Major: <span class="normal">${el.major}</span></p>
      <p>Email: <span class="normal">${el.email}</span></p>
      `
  div.append(boxdiv);

  //final flexbox items, center icon text
  let lineblockdiv = document.createElement('div');
  lineblockdiv.className = "inlineblockitems"
  boxdiv.append(lineblockdiv);
  let imagelink = document.createElement('img');
  imagelink.setAttribute('src','img/linkedin.svg');
  imagelink.setAttribute('alt','linkedin logo');
  imagelink.className ="logoimg";
  lineblockdiv.append(imagelink);
  let centerp = document.createElement('p');
  centerp.innerHTML = `<span class="normal">${el.linkedInUrl}</span>`;
  lineblockdiv.append(centerp);

  })
});
