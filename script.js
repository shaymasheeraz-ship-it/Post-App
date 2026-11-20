var cardBg

function post(){


    var title = document.getElementById("title")
    var desc = document.getElementById("desc")
    var postContainer = document.getElementById("postContainer")

    if(title.value.trim() && desc.value.trim()){
        postContainer.innerHTML += `
        

<div class="card m-4 w-75">
  <div class="card-header">
    @blog
  </div>
  <div class="card-body">
<figure>
      <blockquote class="blockquote">
           <p>${title.value}</p>
       </blockquote>
       <figcaption class="blockquote-footer">
           <em>${desc.value}</em>
       </figcaption>
   </figure>

    <h4 class="card-title"></h4>
    <p class="card-text"></p>
    </div>
     <div class="d-flex ms-auto ">
     <button type="button " onclick="editPost()" class="btn editPostBtn m-4 px-5">Edit</button>
     <button type="button" onclick="deletePost()" class="btn btn-subtle theme-danger m-4">Delete</button></div>
  </div>
</div>
`
    }else{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: "<a href=\"#\">Why do I have this issue?</a>"
});



        }





    title.value = ""
    desc.value = ""


}
    // console.log(title,desc,postContainer);


    function editPost(){
        var card = event.target.parentNode.parentNode
        var title = card.children[1].children[0].children[0].children[0].innerText

        var desc = card.children[1].children[0].children[1].children[0].innerText
        document.getElementById("title").value = title
         document.getElementById("desc").value = desc

card.remove()
// console.log(desc);

    }

    function deletePost(){
            var card = event.target.parentNode.parentNode
            card.remove()
    // console.log(card);

    }





function bgImg(src) {
    cardBg = src
    console.log(bgImg);

    var bgimg = document.getElementsByClassName("bgimg")
    for (var i = 0; i < bgimg.length; i++) {
        bgimg[i].className = "bgimg"
    }
    // event.target.className +=" selected"
    event.target.classList.add("selected")


}
