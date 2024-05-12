package frontweb.database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


import frontweb.vo.YoutubeMember;

public class MemberDao {

	// select * from member where id=? and password=? 기능메서드 처리

	public YoutubeMember getYoutubeMemberLogin(YoutubeMember sch) { // (Emp sch 로 쓰는 이유는 Emp가 해당 값을를 가지고 있기 때문에)
		// 매개변수 많으면 객체 쓰는거 고려해 봐야함
		YoutubeMember mem = null;
		String sql = "select * from member where upper(id)=upper(?) and password=?";
		try (Connection con = DBCon.con(); PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, sch.getId());
			pstmt.setString(2, sch.getPassword());
			try (ResultSet rs = pstmt.executeQuery()) {
				while (rs.next()) {
					mem = new YoutubeMember(rs.getString("id"), rs.getString("password"), rs.getString("passwordcheck"),
							rs.getString("name"), rs.getString("date_str"), rs.getString("email"));
				}
			}
		} catch (SQLException e) {

		} catch (Exception e) {

		}

		return mem;
	}

	// insert into emp01 values(?,?,?,?, to_date(?,'YYYY-MM-DD'),?,?,?)
	// dao.inserEmp01(new EmpDTO(1003,"하길동","대리",7799,"2023-11-01",3500,1000,20));
	public int insertYoutubeMember(YoutubeMember ins) {
		int insCnt = 0;
		String sql = "insert into member values(?,?,?,?, to_date(?,'YYYY-MM-DD'),?)";

		try (Connection con = DBCon.con(); PreparedStatement pstmt = con.prepareStatement(sql);

		) {
			// 처리코드1
			con.setAutoCommit(false);
			pstmt.setString(1, ins.getId());
			pstmt.setString(2, ins.getPassword());
			pstmt.setString(3, ins.getPasswordcheck());
			pstmt.setString(4, ins.getName());
			pstmt.setString(5, ins.getDate_str());
			pstmt.setString(6, ins.getEmail());

			
			
			insCnt = pstmt.executeUpdate();
			if (insCnt == 0) {
				System.out.println("등록 실패");
				con.rollback();
			} else {
				con.commit(); // Commit the transaction
				System.out.println("등록 성공");
			}
		} catch (SQLException e) {
			System.out.println("DB에러:" + e.getMessage());
			// con.rollback();
		} catch (Exception e) {
			System.out.println("일반에러:" + e.getMessage());
		}

		return insCnt;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MemberDao dao = new MemberDao();
	
		YoutubeMember m = dao.getYoutubeMemberLogin(new YoutubeMember("godls","godls123!"));
		if(m!=null){
			System.out.println(m.getName()+"로그인 성공");
		}else {
			System.out.println("로그인 실패");
		}
		
		
		
		
		
		 int insCnt=dao.insertYoutubeMember(new YoutubeMember
				 ("dlwnsgh","dlwnsgh123!","dlwnsgh123!", 
						 "이준호", "1997-12-19", 
						 "dlwnsgh@naver.com"));
		 System.out.println(insCnt>0?"등록성공!!":"등록실패");
		 
		 
		 
		 
		 

		 
		 
	}

}
