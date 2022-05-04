function tab(button, widget) {
    var i, options, buttons;
  
    options = document.getElementsByClassName("options");
    for (i = 0; i < options.length; i++) { options[i].style.display = "none"; }

    buttons = document.getElementById("buttons").children;
    for (i = 0; i < buttons.length; i++) { buttons[i].className = ""; }

    document.getElementById(widget).style.display = "block";
    button.currentTarget.className = "open";
  }

  function chat(channel){ document.chat.action = "https://next.lightspeed.tv/embed/"+channel.value+"/chat" }