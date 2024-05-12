// document.addEventListener("DOMContentLoaded", function () { 
  window.onload  = function() {
  var pwShowHideIcons = document.querySelectorAll(".pwShowHide");
  var pwShowHideInputs = document.querySelectorAll("[type=password]");

  console.log(pwShowHideIcons);
  console.log(pwShowHideInputs);

  pwShowHideIcons.forEach(function (icon, index) {
    icon.onclick = function () {
      if (pwShowHideInputs[index].type === "password") {
        pwShowHideInputs[index].type = "text";
        icon.style.backgroundImage =
          "url(./imgs/visibility_off_FILL0_wght400_GRAD0_opsz20.png)";
        icon.title = "비밀번호 숨기기";
      } else {
        pwShowHideInputs[index].type = "password";
        icon.style.backgroundImage =
          "url(./imgs/visibility_FILL0_wght400_GRAD0_opsz20.png)";
        icon.title = "비밀번호 보이기";
      }
    };
  });

  var singUpBtn = document.querySelector("#singUpBtn");
  var elInputUserId = document.querySelector("#userName");
  var elFailureMessage = document.querySelector(".failure-message");
  var elInputUserPw = document.querySelector("#userPw");
  var elStrongPasswordMessage = document.querySelector(
    ".strongPassword-message"
  );
  var elInputPasswordRetype = document.querySelector("#password-retype");
  var elMismatchMessage = document.querySelector(".mismatch-message");
  var elMismatchMessageTwo = document.querySelector(".mismatch-message2");
  var elInputUserEmail = document.querySelector("#email");
  var elFailureEmailMessage = document.querySelector(".failureEmail-message");
  var elInputUserName = document.querySelector("#name");
  var elFailureNameMessage = document.querySelector(".failureName-message");
  var elFailureDateMessage = document.querySelector(".failureDate-message ");

  var elInputUserYear = document.querySelector("#year");
  var today = new Date(); // 날짜 변수 선언
  var yearNow = today.getFullYear(); // 올해 연도 가져옴
  console.log(yearNow);

  var elInputUserMonth = document.querySelector("#month");
  var elInputUserDay = document.querySelector("#day");

  var placeholder = document.querySelector("#placeholder");

  function onlyNumberAndEnglish(str) {
    return /^[a-z0-9]{3,14}$/.test(str);
  }

  function strongPassword(str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
      str
    );
  }

  function isMatch(password1, password2) {
    return password1 === password2;
  }

  function email(str) {
    return /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/.test(str);
  }

  function name(str) {
    return /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/.test(str);
  }
  var isChecked = true;
  singUpBtn.onclick = function (event) {
    event.preventDefault(); // 폼 전송 방지
    elFailureMessage.classList.add("hide");
    elStrongPasswordMessage.classList.add("hide");
    elMismatchMessage.classList.add("hide");
    elFailureEmailMessage.classList.add("hide");
    elFailureNameMessage.classList.add("hide");
    elFailureDateMessage.classList.add("hide");
    elMismatchMessageTwo.classList.add("hide");

    if (elInputUserId.value.length === 0) {
      elFailureMessage.classList.remove("hide");
      isChecked = false;
    }
    if (onlyNumberAndEnglish(elInputUserId.value) === false) {
      elFailureMessage.classList.remove("hide");
      isChecked = false;
    }
    if (
      elInputUserPw.value.length === 0 ||
      strongPassword(elInputUserPw.value) === false
    ) {
      elStrongPasswordMessage.classList.remove("hide");
      isChecked = false;
    }
    if (elInputPasswordRetype.value.length === 0) {
      elMismatchMessageTwo.classList.remove("hide");
    } else if (!isMatch(elInputUserPw.value, elInputPasswordRetype.value)) {
      elMismatchMessage.classList.remove("hide");
      elMismatchMessageTwo.classList.add("hide");
      isChecked = false;
    }
    if (
      elInputUserEmail.value.length === 0 ||
      email(elInputUserEmail.value) === false
    ) {
      elFailureEmailMessage.classList.remove("hide");
      isChecked = false;
    }
    if (
      elInputUserName.value.length === 0 ||
      name(elInputUserName.value) === false
    ) {
      elFailureNameMessage.classList.remove("hide");
      isChecked = false;
    }

    if (
      elInputUserYear.value.length === 0 ||
      parseInt(elInputUserYear.value) < 1900 ||
      parseInt(elInputUserYear.value) > yearNow ||
      elInputUserMonth.value.length === 0 ||
      parseInt(elInputUserMonth.value) < 1 ||
      parseInt(elInputUserMonth.value) > 12 ||
      elInputUserDay.value.length === 0 ||
      parseInt(elInputUserDay.value) < 1 ||
      parseInt(elInputUserDay.value) > 31 ||
      ((parseInt(elInputUserMonth.value) == 4 ||
        parseInt(elInputUserMonth.value) == 6 ||
        parseInt(elInputUserMonth.value) == 9 ||
        parseInt(elInputUserMonth.value) == 11) &&
        parseInt(elInputUserDay.value) == 31) ||
      (parseInt(elInputUserMonth.value) == 2 &&
        (parseInt(elInputUserDay.value) > 29 ||
          (parseInt(elInputUserDay.value) == 29 &&
            (parseInt(elInputUserYear.value) % 4 != 0 ||
              (parseInt(elInputUserYear.value) % 100 == 0 &&
                parseInt(elInputUserYear.value) % 400 != 0)))))
    ) {
      elFailureDateMessage.classList.remove("hide");
      isChecked = false;
    }

    if (isChecked == true) {
      document.querySelector("#signup-form").submit();
    }
  };


var selectElement = document.querySelector("#month");
selectElement.style.color = 'gray';

selectElement.addEventListener('change', function() {
  if (selectElement.value !== 'null') {
    selectElement.style.color = 'black';
  } else {
    selectElement.style.color = 'gray';
  }
});

}; //onload end
