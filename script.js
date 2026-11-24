
var cardBg = "";

function bgImg(e, src) {
    cardBg = src;
// bg
    var formCard = document.getElementById("formCard");
    formCard.style.setProperty("background-image", `url("${src}")`, "important");

    // card2
    var allPosts = document.querySelectorAll("#postContainer .card");
    for (var i = 0; i < allPosts.length; i++) {
        allPosts[i].style.setProperty("background-image", `url("${src}")`, "important");
    }

    var bgimg = document.getElementsByClassName("bgimg");
    for (var j = 0; j < bgimg.length; j++) {
        bgimg[j].classList.remove("selected");
    }
    e.target.classList.add("selected");
}

function post() {
    var title = document.getElementById("title");
    var desc = document.getElementById("desc");
    var postContainer = document.getElementById("postContainer");

    if (title.value.trim() && desc.value.trim()) {
        var bgStyle = "";
        if (cardBg) {
            bgStyle = `background-image: url("${cardBg}"); background-size: cover; background-position: center;`;
        }

        postContainer.innerHTML += `
        <div class="card m-4 w-75" style="${bgStyle}">
          <div class="card-header">@blog</div>
          <div class="card-body">
            <figure>
              <blockquote class="blockquote"><p>${title.value}</p></blockquote>
              <figcaption class="blockquote-footer"><em>${desc.value}</em></figcaption>
            </figure>
          </div>
          <div class="d-flex ms-auto">
            <button type="button" onclick="editPost()" class="btn editPostBtn m-4 px-5">Edit</button>
            <button type="button" onclick="deletePost()" class="btn btn-subtle theme-danger m-4">Delete</button>
          </div>
        </div>`;
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    }

    title.value = "";
    desc.value = "";
}

function editPost() {
    var card = event.target.parentNode.parentNode;
    var title = card.querySelector("blockquote p").innerText;
    var desc = card.querySelector("figcaption em").innerText;
    document.getElementById("title").value = title;
    document.getElementById("desc").value = desc;
    card.remove();
}

function deletePost() {
    var card = event.target.parentNode.parentNode;
    card.remove();
}