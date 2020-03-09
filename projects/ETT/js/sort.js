$("#sort_id").click(function(){
  $("#cars li").fadeOut();
  $("#cars").empty();
  socket.emit('Trier', 'ID');
});
$("#sort_speed").click(function(){
  $("#cars li").fadeOut();
  $("#cars").empty();
  socket.emit('Trier','SPEED');
});
