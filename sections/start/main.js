const listRepost = async username => {
    const repos = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
        .then(res => res.json())
        .catch(error => console.error(error));


    const markup = "<ul><li>"+repos.map(
        repo => `
    <a href='${repo.html_url}' target="_blanc">${repo.name}</a>
    `
    ).join('</li><li>') + "</li></ul>";

    const container = document.getElementById('content').innerHTML = markup;

}


listRepost('jlengstorf');