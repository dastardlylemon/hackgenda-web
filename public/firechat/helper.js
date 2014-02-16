function listChatrooms(chat, user) {
  chat.getRoomList(function(r) { 
    $.each(r, function(i, v) {
      $('<div/>', {class: 'room-link', onclick: chat.enterRoom(v.id)}).text(v.name).appendTo($('#chatroom-list'));
    });
  });
  console.log(user);
  if (#{user.isAdmin} || #{user.isSponsor}) {
    //expose options
  }
}