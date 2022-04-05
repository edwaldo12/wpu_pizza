function allMenu() {
  $("#daftar-menu").empty();
  $.getJSON("pizza.json", (data) => {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $("#daftar-menu").append(`
  <div class="col-md-4">
    <div class="card">
      <img src="img/menu/${data.gambar} ?>" alt="">
      <div class="card-body">
        <h5 class="card-title">${data.nama}</h5>
        <p class="card-text">${data.deskripsi}</p>
        <h5 class="card-title">${formatRupiah(data.harga, "Rp.")}</h5>
        <a href="#" class="btn btn-primary">Pesan sekarang!</a>
      </div>
    </div>
  </div>
    `);
    });
  });
}

allMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass(".active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "All Menu") {
    allMenu();
    return;
  }

  $.getJSON("pizza.json", function (data) {
    let menu = data.menu;
    let string = "";

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        string += ` 
      <div class="col-md-4">
        <div class="card">
          <img src="img/menu/${data.gambar} ?>" alt="">
          <div class="card-body">
            <h5 class="card-title">${data.nama}</h5>
            <p class="card-text">${data.deskripsi}</p>
            <h5 class="card-title">${formatRupiah(data.harga, "Rp.")}</h5>
            <a href="#" class="btn btn-primary">Pesan sekarang!</a>
          </div>
        </div>
      </div>`;
      }
    });

    $("#daftar-menu").html(string);
  });
});
