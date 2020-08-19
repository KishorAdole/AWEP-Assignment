function addComment(){
    let user=document.querySelector(".ip").value;

    let comment=document.createElement('div');
    comment.textContent=user;
    comment.style.paddingLeft="10px";
    comment.style.paddingTop="20px"
    let cap=document.querySelector(".commentbox");
    cap.appendChild(comment);
    document.querySelector(".ip").value=" ";


}

let counter=0;
function like(id){
    counter++;
    id.innerHTML="Like" + counter;
}

