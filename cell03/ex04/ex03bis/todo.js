function New_note() {
  console.log("PROCESS START");
  const enter_note = prompt("Enter your new note : ");
  console.log("enter note success : " + enter_note);

  if (enter_note != null && enter_note.trim() !== "") {
      Add_note(enter_note);
      save_cookie();
  }
}

function Add_note(enter_note) {
  console.log("Add_note(enter_note) -----------");

  const $create_div = $('<div></div>', {
      text: enter_note,
      class: 'todo',
      click: function () {
          const confirm_delete = confirm("Do you want to remove this TO DO?");
          if (confirm_delete) {
              $(this).remove();
              console.log("Remove success");
              save_cookie();
          }
      }
  });

  $('.ft_list').prepend($create_div);
}

function save_cookie() {
  const map_ft = $('.ft_list .todo').map(function () {
      return $(this).text();
  }).get();

  document.cookie = "cookie_name=" + JSON.stringify(map_ft);
  console.log("document.cookie : " + document.cookie);
}

function get_cookie() {
  const cookieValue = document.cookie.split('; ').find(row => row.startsWith('cookie_name='));
  if (cookieValue) {
      const tasks = JSON.parse(cookieValue.split('=')[1]);
      tasks.reverse().forEach(function (task) {
          Add_note(task);
      });
  }
}


$(document).ready(function () {
  get_cookie();

  $('#newButton').click(function () {
      New_note();
  });
});
