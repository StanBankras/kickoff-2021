const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

// GET REQUEST
let me = {};

const teams = fetch(`${url}/squads/1/teams/2/members`)
  .then(response => response.json())
  .then(data => {
    me = data.find(d => d.id === "3");
    document.title = document.title.replace('{NAAM}', `${me.name} ${me.surname}`);
    
    const name = document.getElementById('name');
    name.innerHTML = `${me.name} ${me.surname}`

    const github = document.getElementById('github');
    console.log(github);
    github.href = `https://github.com/${me.githubHandle}`;
    github.innerHTML = `/${me.githubHandle}`

    const mugshot = document.getElementById('mugshot');
    mugshot.src = me.mugshot;
  });




const putData = {
  id: 3,
  teamId: 2,
  name: 'Stan',
  prefix: '',
  surname: 'Bankras',
  mugshot: 'https://raw.githubusercontent.com/StanBankras/kickoff-2021/main/img/mugshot.jpg',
  githubHandle: 'StanBankras',
  other: {
    sport: 'Wielrennen',
    muziek: 'EDM',
    werkplek: 'Thuis'
  }
}

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

// postData(`${url}/squads/1/teams/2/members/3`, putData)
//   .then(data => {
//     console.log('put', data);
//   });