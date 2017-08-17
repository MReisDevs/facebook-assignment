window.addEventListener("load", function(){

  // like button
  var likeButton = document.getElementsByClassName('action action--like')[0];

  likeButton.addEventListener("click", function(){
  if (likeButton.innerHTML==="Like"){
    likeButton.innerHTML = "Unlike"

    var like_plus = document.getElementsByClassName("likeability")[0].textContent;
    newLike=parseInt(like_plus)+1;
    document.getElementsByClassName("likeability")[0].innerHTML = newLike + " likes";
    event.preventDefault();
  }
  
  else{
    likeButton.innerHTML = "Like"
    var like_minus = document.getElementsByClassName("likeability")[0].textContent;
    newLike=parseInt(like_minus)-1;
    document.getElementsByClassName("likeability")[0].innerHTML = newLike + " likes";
    event.preventDefault();
  }
  });
  // main comment box 
  var commentButton = document.getElementsByClassName('action action--comment')[0];

  commentButton.addEventListener("click", function(){
    var comment_box = document.getElementsByTagName("textarea")[5];
    comment_box.focus();
    event.preventDefault();
  });

  // display comment replies

  var display_reply = document.getElementsByClassName("comment__info");
  for (var i=0; i< display_reply.length; i++) {
      display_reply[i].childNodes[3].addEventListener("click", function(){
        var replies = event.target.parentNode.parentNode.childNodes[5];
debugger
      if (replies.style.display == "none"){
        replies.style.display = "block"}
      else {
        replies.style.display = "none"}
      event.preventDefault();
      });
    };

});