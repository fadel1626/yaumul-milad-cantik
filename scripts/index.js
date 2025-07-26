// Animation GSAP timeline on load event
window.addEventListener("load", () => {
  Swal.fire({
    html: `
    <img src="img/happybirthday.png" style="display:block; max-width: 80%; height: auto; margin: -30px auto 0 auto;">
    <h4 style="font-size: 5vw; color: #1BBC9B">Yaumul Milad Yah Cantikku!!!</h4>
    <h4 style="font-size: 4vw; color: #C0392B">Klik Tombol di Bawah Yah! \n (Volumenya Dikecilin)</h4>
    `,
    // title: "Yaumul Milad Yah Cantikku!!!",
    // text: "Klik Tombol di Bawah Yah!",
    showCancelButton: false,
    confirmButtonColor: "#BAC1BA",
    confirmButtonText: "Lanjut",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});
