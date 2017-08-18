window.addEventListener("load", function(){

  // like button
  var likeButton = document.getElementsByClassName('action action--like')[0];

  likeButton.addEventListener("click", function(event){
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

  commentButton.addEventListener("click", function(event){
    var comment_box = document.getElementsByTagName("textarea")[5];
    comment_box.focus();
    event.preventDefault();
  });

  // display comment replies

  var display_reply = document.getElementsByClassName("comment__info");
  for (var i=0; i< display_reply.length; i++) {
      display_reply[i].childNodes[3].addEventListener("click", function(event){
        var replies = event.target.parentNode.parentNode.childNodes[5];
      if (replies.style.display == "none"){
        replies.style.display = "block"}
      else {
        replies.style.display = "none"}
      event.preventDefault();
      });
    };

  //Modal vars
  var modal = document.getElementsByClassName("modal")[0];
  var modalBody = document.getElementsByClassName("modal__body")[0];
  var modalTitle = document.getElementsByClassName("modal__title")[0];
  //Share button
  var shareButton = document.getElementsByClassName("action action--share")[0];
  shareButton.addEventListener("click", function(){
      var posterName = document.getElementsByClassName("postername")[0].innerHTML
      var shareText = document.getElementsByClassName("post__body")[0].innerHTML 
        modal.style.display = "block"
        modalTitle.innerHTML = "Share "+ posterName + "'s Post"
        modalBody.innerHTML = shareText + "\n \n Share this with your friends!"

  });
  //Poster info
  var userButton = document.getElementsByClassName("name");
  for (var i=0; i< userButton.length; i++) {
    userButton[i].addEventListener("click", function(event){
    modal.style.display = "block"
    modalTitle.innerHTML = event.target.innerHTML
    modalBody.innerHTML = "Number of friends: " + (Math.floor(Math.random() * 1200) + 10) + "  Mutual Friends: 0" 
    })
  }

  //Close modal
  // with X button
  var xoutModal = document.getElementsByClassName("modal__close")[0]
    xoutModal.addEventListener("click", function(){
    modal.style.display = "none"
    });
  // Clicking outside window
  window.addEventListener("click", function(event){
    if (event.target == modal) {
        modal.style.display = "none";}
  })
  //


});