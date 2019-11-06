const listRepost = async username => {
    const repos = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
        .then(res => res.json())
        .catch(error => console.error(error));


    const markup = repos.map(
        repo => `
    <li>${repo.name}</li>
    `
    ).join('');

    const container = document.getElementById('content').innerHTML = `<ul>${markup}</ul>`;

}


listRepost('jlengstorf');