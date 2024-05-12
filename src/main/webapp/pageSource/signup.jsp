<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<link rel="stylesheet" href="./youtubeMain.css">
   <!--  <script type="text/javascript" src="jquery-3.1.1.js"></script> -->
    <script src="signup.js"></script>
</head>
<body>

<div class="loginSingnUpWrapper sign">
		<h1>
			<a class="logo" href="#" alt="유튜브"> <img
				src="../images/20574_22645_014.png">
			</a>
		</h1>

		<h2 class="welcomTtx">유튜브에 오신것을 환영합니다</h2>

		<form name="fo" method="post" action="signupAction.jsp" id="signup-form">
			<label for="id">아이디 <input class="formStyle" type="text" name="id"
				placeholder="4~15자 이내로 입력해주세요" value="" id="userName"></label><br>
			<div class="failure-message hide error">아이디는 최소 4자 이상, 최대 15자
				이하의 알파벳 소문자, 숫자 조합으로 입력해주세요.</div>
			<div class="pwWrapper">
				<label for="password">비밀번호 <input class="formStyle" type="password"
					name="password"
					placeholder="최소 6자 이상(알파벳, 숫자, 특수문자(@$!%*#?&) 필수)" value=""
					id="userPw" autocomplete="on"></label> <br>
				<p class="pwShowHide" title="비밀번호 보이기"></p>
				<div class="strongPassword-message hide error">6글자 이상, 영문, 숫자,
					특수문자(@$!%*#?&)를 사용하세요</div>
			</div>
			<div class="pwChackWrapper">
				<label for="passwordcheck">비밀번호 확인 <input class="formStyle" type="password" name="passwordcheck"
					id="password-retype" placeholder="비밀번호 확인" value="" autocomplete="on"></label>
				<p class="pwShowHide pwchack" title="비밀번호 보이기"></p>
				<div class="mismatch-message hide error">비밀번호가 일치하지 않습니다</div>
				<div class="mismatch-message2 hide error">비밀번호 확인 값을 입력해주세요</div>
			</div>

			<label for="email">이메일 <input class="formStyle" type="email"
				name="email" placeholder="sw@naver.com" value="" id="email"></label><br>
			<div class="failureEmail-message hide error">올바른 이메일 형식이 아닙니다.</div>
			<label for="name">이름 <input class="formStyle" type="text"
				name="name" placeholder="홍길동" value="" id="name"></label><br>
			<div class="failureName-message hide error">최소 2자 이상 입력하세요.</div>
			<div class="date">
				<label for="birth_str">생년월일<br> <input class="formStyle" type="text"
					name="year" placeholder="연도" value="" id="year" maxlength="4"></label>
				<select name="month" size="1" id="month">
					<option disabled hidden selected id="placeholder">월</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
					<option>11</option>
					<option>12</option>
				</select> <input type="text" name="day" placeholder="일" value=""
					maxlength="2" id="day">
				<div class="failureDate-message hide error">생년월일을 확인해주세요.</div>
			</div>

			<ul class="infoList">
				<li class="serviceInfo"><a href="#"> 서비스이용약관</a></li>
				<li>|</li>
				<li class="personalInfo"><a href="#"> 개인정보처리 방침</a></li>
			</ul>

			<button type="submit" value="회원가입" id="singUpBtn">서비스이용약관 및
				개인정보처리방침 동의 후 회원가입</button>
			<div class="login">
				<a href="login.jsp"> 로그인</a>
			</div>


		</form>

	
	</div>









</body>
</html>