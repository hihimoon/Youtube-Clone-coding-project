CREATE TABLE member(
	id varchar(15),
	password varchar(20),
	passwordcheck varchar(20),
	name varchar(10),
	date_str date,
	email varchar(20)
);

DROP table member

INSERT INTO MEMBER values('godls','godls123!','godls123!', '문해인', '1996-12-19', 'godls@naver.com' )

SELECT * FROM "MEMBER"