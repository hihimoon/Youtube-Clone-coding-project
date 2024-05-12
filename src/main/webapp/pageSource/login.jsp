<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"
	%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인</title>

<link rel="stylesheet" href="./youtubeMain.css">
<!--  <script type="text/javascript" src="jquery-3.1.1.js"></script> -->
<script src="loginScript.js"></script>
</head>
<body>

	<div class="loginSingnUpWrapper">
		<h1>
			<a class="logo" href="#" alt="유튜브"> <img
				src="../images/20574_22645_014.png">
			</a>
		</h1>

		<h2 class="welcomTtx">유튜브에 오신것을 환영합니다</h2>
		<form name="fo" method="post" action="loginAction.jsp" id="loginForm">
			<label for="id">아이디 <input class="formStyle" type="text"
				name="id" placeholder="아이디" value="" id="loginId"></label><br>
			<div>
				<span class="failureId-message hide error">아이디를 입력해주세요</span>
			</div>
			<div class="pwWrapper">
			<label for="password">비밀번호 <input class="formStyle"
				type="password" name="password" placeholder="비밀번호" value=""
				id="loginPw" autocomplete="on"></label> <br>
				<p class="pwShowHide" title="비밀번호 보이기"></p>
			</div>

			<div>
				<span class="failurePw-message hide error">비밀번호를 입력해주세요</span>
			</div>
			<div class="forget">
				<a href="#"> 계정찾기</a>
			</div>

			<button type="submit" value="로그인" id="loginBtn">로그인</button>
			<div class="signUp">
				<a href="login.jsp"> 회원가입</a>
			</div>

		</form>
	</div>









</body>
</html>