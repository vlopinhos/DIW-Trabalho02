function loadProfile(){
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        let data = JSON.parse(this.responseText);

        if(data.bio == null){
            data.bio = `Não possui biografia.`;
        }

        let profileStr = `<section class="row profile">
        <div class="col-12" style="text-align: center;">
        <a href="${data.html_url}" target="_blank"><img id="profileImg" src="${data.avatar_url}"></a>
        <h2 id="profileUser">${data.name}</h2>
        <span id="profileFollowers">${data.followers} followers</span>
        <span id="profileFollowing">${data.following} following</span>
        <p id="profileBio">${data.bio}</p>
        </section>`;

        document.getElementById("screen1").innerHTML = profileStr;
    }

    xhr.onerror = function(){
        alert(`Error!\nCode: ${this.status} - ${this.statusText}`);
    }

    xhr.open("GET", `https://api.github.com/users/vlopinhos`);
    xhr.send();
}

function searchProfile(){
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        let data = JSON.parse(this.responseText);

        if(data.bio == null){
            data.bio = `Não possui biografia.`;
        }

        let profileStr = `<section class="row profile">
        <div class="col-12" style="text-align: center;">
        <a href="${data.html_url}" target="_blank"><img id="profileImg" src="${data.avatar_url}"></a>
        <h2 id="profileUser">${data.name}</h2>
        <span id="profileFollowers">${data.followers} followers</span>
        <span id="profileFollowing">${data.following} following</span>
        <p id="profileBio">${data.bio}</p>
        </section>`;

        document.getElementById("screen1").innerHTML = profileStr;
    }

    xhr.onerror = function(){
        alert(`Error!\nCode: ${this.status} - ${this.statusText}`);
    }

    xhr.open("GET", `https://api.github.com/users/${insert.value}`);
    xhr.send();
}

function repositoryProfile(){
    let xhr2 = new XMLHttpRequest();

    xhr2.onload = function(){
        let data2 = JSON.parse(this.responseText);

        let profileRep = `<section class="row repositories">`;

        for(let i=0; i<data2.length; i++){
            let put = data2[i];

            if(put.description == null){
                put.description = `Não possui descrição.`;
            }

            profileRep += `
            <div id="repository" class="col-12 col-lg-6 col-md-12 col-sm-12">
            <div class="card bg- light mb-3">
            <div class="card-header">
            <b id="repositoryTitle">${put.name}</b>
            </div>
            <div class="card-body">
            <p id="repositoryBio">${put.description}</p>
            <a id="repositoryLink" href="${put.html_url}" target="_blank"><button id="repositoryButton" class="btn">Repository</button></a>
            <a id="repositoryWeb" href="https://${put.owner.login}.github.io/${put.name}" target="_blank"><button id="siteButton" class="btn">Website</button></a>
            </div>
            </div>
            </div>`;
        }

        profileRep += `</section>`;

        document.getElementById("screen2").innerHTML = profileRep;
    }

    xhr2.onerror = function (){
        alert(`Error!\nCode: ${this.status} - ${this.statusText}`);
    }

    xhr2.open("GET", `https://api.github.com/users/vlopinhos/repos`);
    xhr2.send();    
}

function repositorySearch(){
    let xhr2 = new XMLHttpRequest();

    xhr2.onload = function(){
        let data2 = JSON.parse(this.responseText);

        let profileRep = `<section class="row repositories">`;

        for(let i=0; i<data2.length; i++){
            let put = data2[i];

            if(put.description == null){
                put.description = `Não possui descrição.`;
            }

            profileRep += `
            <div id="repository" class="col-12 col-lg-6 col-md-12 col-sm-12">
            <div class="card bg- light mb-3">
            <div class="card-header">
            <b id="repositoryTitle">${put.name}</b>
            </div>
            <div class="card-body">
            <p id="repositoryBio">${put.description}</p>
            <a id="repositoryLink" href="${put.html_url}" target="_blank"><button id="repositoryButton" class="btn">Repository</button></a>
            <a id="repositoryWeb" href="https://${put.owner.login}.github.io/${put.name}" target="_blank"><button id="siteButton" class="btn">Website</button></a>
            </div>
            </div>
            </div>`;
        }

        profileRep += `</section>`;

        document.getElementById("screen2").innerHTML = profileRep;
    }

    xhr2.onerror = function (){
        alert(`Error!\nCode: ${this.status} - ${this.statusText}`);
    }

    xhr2.open("GET", `https://api.github.com/users/${insert.value}/repos`);
    xhr2.send();
}

onload = () =>{
    loadProfile();
    repositoryProfile();

    search.onsubmit = (e) => {
        e.preventDefault();
        searchProfile();
        repositorySearch();
    }
}