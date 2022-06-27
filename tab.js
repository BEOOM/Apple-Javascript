//기존 버튼에 있는 클래스명 제거 -> 누른 탭에 추가
//div에 show 클래스명 추가 -> 모든 기존에 붙은 show 제거

// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       document.querySelectorAll(".tab-content")[0].classList.add("show");
//       document.querySelectorAll(".tab-button")[0].classList.add("orange");
//       document.querySelectorAll(".tab-content")[1].classList.remove("show");
//       document.querySelectorAll(".tab-button")[1].classList.remove("orange");
//       Tab(i);
//     });
// }

function Tab(i) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(i).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(i).addClass("show");
}

// $(".tab-list").click(function (e) {
//   if (e.target == document.querySelectorAll(".tab-button")[0]) {
//     Tab(0);
//   }
//   if (e.target == document.querySelectorAll(".tab-button")[1]) {
//     Tab(1);
//   }
//   if (e.target == document.querySelectorAll(".tab-button")[2]) {
//     Tab(2);
//   }
// });

$(".list").click(function (e) {
  parseInt(Tab(e.target.dataset.id));
});
