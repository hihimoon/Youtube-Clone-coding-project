// document.addEventListener("DOMContentLoaded", function () {
window.onload = function () {
  var pwShowHideIcons = document.querySelectorAll(".pwShowHide");
  var pwShowHideInputs = document.querySelectorAll("[type=password]");
  var loginResultDiv = document.querySelector(".loginResult");

  console.log(pwShowHideIcons);
  console.log(pwShowHideInputs);


  pwShowHideIcons.forEach(function (icon, index) {
    icon.onclick = function () {
      if (pwShowHideInputs[index].type === "password") {
        pwShowHideInputs[index].type = "text";
        icon.style.backgroundImage =
          "url(../images/visibility_off_FILL0_wght400_GRAD0_opsz20.png)";
          
          
        icon.title = "비밀번호 숨기기";
      } else {
        pwShowHideInputs[index].type = "password";
        icon.style.backgroundImage =
          "url(../images/visibility_FILL0_wght400_GRAD0_opsz20.png)";

        icon.title = "비밀번호 보이기";
      }
    };
  });

  var today = new Date(); // 날짜 변수 선언
  var yearNow = today.getFullYear(); // 올해 연도 가져옴
  console.log(yearNow);

  var elInputLoginId = document.querySelector("#loginId");
  var elFailureLoginIdMessage = document.querySelector(".failureId-message");
  var elInputLoginPw = document.querySelector("#loginPw");
  var elFailureLoginPwMessage = document.querySelector(".failurePw-message");
  var loginBtn = document.querySelector("#loginBtn");

  loginBtn.onclick = function (event) {
    console.log("로그인버튼이 눌렸습니다.");
    event.preventDefault();
    console.log("event를 막았습니다..");
    elFailureLoginIdMessage.classList.add("hide");
    elFailureLoginPwMessage.classList.add("hide");
    var isChecked = true;
    if (elInputLoginId.value.length === 0) {
      elFailureLoginIdMessage.classList.remove("hide");
      isChecked = false;
    }
    if (elInputLoginPw.value.length === 0) {
      elFailureLoginPwMessage.classList.remove("hide");
      isChecked = false;
    }
    if (isChecked == true) {
      document.querySelector("#loginForm").submit();
    }
  };
}; //onload end
