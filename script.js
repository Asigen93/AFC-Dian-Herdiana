$(".navbar-toggler").on("click", function () {
  $(".sidebar").toggleClass("active");
  $(".main-content").toggleClass("active");
});

// script.js

function previewFile() {
  const preview = document.getElementById("previewImage");
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

// Tambahkan fungsi untuk mengirim data melalui AJAX
function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (file) {
    const formData = new FormData(document.getElementById("uploadForm"));
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          // Perbarui gambar profil setelah pengunggahan berhasil
          document.getElementById("previewImage").src = response.url;
        } else {
          alert("Gagal mengunggah file: " + response.message);
        }
      }
    };

    xhr.open("POST", "foto-profile.php", true);
    xhr.send(formData);
  }
}
