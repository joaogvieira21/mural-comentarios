var posts;
var mural = document.getElementById("posts")

document.addEventListener('DOMContentLoaded', () => {
    updatePosts()
})

function updatePosts() {
    fetch("http://localhost:3050/api/all").then( res => { 
        return res.json()
    }).then( data => {
        posts = JSON.parse(data)
        console.log(posts.length)
        if (posts.length == 0) {
            mural.innerHTML = `<p>Nenhum post adicionado</p>`
        }
        posts.forEach(post  => {      
            mural.innerHTML += `<div id="${post.id}" class="post card mb-4">
            <div class="card-header">
                <h5 class="card-title"> ${post.title}</h5>
            </div> 
            <div class="card-body">
                <div class="card-text"> ${post.description}</div>
            </div>
        </div>`
        })
    })
}

function newPost() {

    let title = document.getElementById("title").value
    let description = document.getElementById("desc").value
    let post = {title, description}

    const options = {
        method:"POST", 
        headers: new Headers ({'content-type' : 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3050/api/new", options).then(res => {
        mural.innerHTML = ""
        updatePosts();
        document.getElementById("title").value = ""
        document.getElementById("desc").value = ""
    })
}