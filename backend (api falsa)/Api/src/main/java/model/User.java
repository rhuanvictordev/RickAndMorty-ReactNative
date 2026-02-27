package model;

public class User {
	
	public String id;
	public String nome;
	public String email;
	public String token;
	public String googleID;
	
	public User(String id, String nome, String email, String token, String googleID) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.token = token;
		this.googleID = googleID;
	}
	
	

}
