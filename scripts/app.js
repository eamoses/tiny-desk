const search = document.querySelector('#search');
const resultsPerPage = 10
let resultsArr = []
var setting = 'day'

search.addEventListener('keyup', function() {
  const value = search.value;
  const lowerVal = value.toLowerCase();
  const targetTerm = data;
  resultsArr = []
  let cnt = 0
  targetTerm.map(obj => {
    const wordBit = JSON.stringify(obj).toLowerCase();
    const isIncluded = wordBit.includes(lowerVal);
    if (isIncluded) {
      cnt++
      resultsArr.push({
        obj: obj,
        id: cnt
      })
    }
  });
  results.innerHTML = '';
  if (resultsArr.length > 0) {
    const container = document.getElementById('container');
    const github = document.getElementById('github');
    container.style.paddingTop = '50px';
    githubContainer.style.display = 'block';
  } else {
    const container = document.getElementById('container');
    container.style.paddingTop = '25vh';
  }
  showResults()
});

const showResults = function() {
  for (var i = 0; i < resultsPerPage; i++) {
    const concert = resultsArr[0]
    if (concert) {
      const element = document.createElement('div');
      element.className = 'result';
      element.innerHTML = `
        <div class="content">
          <span class="artist">
            <a href="${concert.obj.link}" target="_blank" class="link-style">
              ${concert.obj.artist}
            </a>
          </span>
          <br /><br />
          <div>
            <div style="float:left;padding-right:10px;width:auto;">
              <a href="${concert.obj.link}" target="_blank" style="text-decoration:none;">
                <img height="160px" width="auto" src="${concert.obj.image ? concert.obj.image : 'images/logo.png'}"/>
              </a>
            </div>
            <div class="description">
              ${concert.obj.description}
            </div>
          </div>
          <br /> <br />
        </div>
      `
      results.appendChild(element);
      resultsArr.shift();
    }
  }
}

window.onscroll = ()=> {
  const bottom = window.scrollY +  window.innerHeight
  const relief = 100
  if (bottom+relief >= document.body.clientHeight) {
    showResults()
  }
}

function changeDayNight() {
  if (this.setting === 'day') {
    const body = document.querySelector('body');
    const logo = document.getElementById('npr-logo');
    const modal = document.getElementById('modal-text');
    body.style.backgroundColor = '#212121';
    body.style.color = 'white';
    logo.src = 'images/music-logo-light.svg';
    sun.style.left = '67px'
    setting = 'night'
    modal.style.backgroundColor = '#212121';
  } else {
    const body = document.querySelector('body');
    const logo = document.getElementById('npr-logo');
    const modal = document.getElementById('modal-text');
    body.style.backgroundColor = 'white';
    body.style.color = '#4a4a4a';
    logo.src = 'images/music-logo-dark.svg';
    sun.style.left = '5px'
    setting = 'day'
    modal.style.backgroundColor = 'white';
  }
}
