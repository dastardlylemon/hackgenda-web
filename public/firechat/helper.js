function listChatrooms(chat, admin, sponsor) {
  chat.getRoomList(function(r) { 
    $.each(r, function(i, v) {
      $('<div/>').attr({class: 'room-link'}).text(v.name).click(function() {chat.enterRoom(v.id);}).appendTo($('#chatroom-list'));
    });
  });
}