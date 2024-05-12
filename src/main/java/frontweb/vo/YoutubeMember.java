package frontweb.vo;


public class YoutubeMember {
	private String id;
	private String password;
	private String passwordcheck;
	private String name;
	private String email;
	private String date_str;
	public YoutubeMember() {
		// TODO Auto-generated constructor stub
	}
	public YoutubeMember(String id, String password, String passwordcheck, String name, String date_str,
			String email) {
		this.id = id;
		this.password = password;
		this.passwordcheck = passwordcheck;
		this.name = name;
		this.date_str = date_str;
		this.email = email;
	}
	
	
	public YoutubeMember(String id, String password) {
		this.id = id;
		this.password = password;
		
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPasswordcheck() {
		return passwordcheck;
	}
	public void setPasswordcheck(String passwordcheck) {
		this.passwordcheck = passwordcheck;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDate_str() {
		return date_str;
	}
	public void setDate_str(String date_str) {
		this.date_str = date_str;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
}
