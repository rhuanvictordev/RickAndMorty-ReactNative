package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import dao.ConnectionModule;
import model.User;

public class UserRepository {
	
	
	public User getUser(String email, String password) {
		System.out.println("BUSCANDO USUARIO: " + " EMAIL: " + email + " SENHA: " + password);
		String sql = "SELECT IDUSER, EMAIL, PASSWORD, NAME, TOKEN, GOOGLEID FROM USERS WHERE EMAIL = ? AND PASSWORD = ?";
		 try (Connection conn = ConnectionModule.conector(); PreparedStatement pst = conn.prepareStatement(sql)){
			pst.setString(1, email);
			pst.setString(2, password);
			try(ResultSet rs = pst.executeQuery()){
				if (rs.next()) {
					System.out.println("USUARIO ENCONTRADO");
					User user = new User(rs.getString("IDUSER"), rs.getString("NAME"), rs.getString("EMAIL"), rs.getString("TOKEN"), rs.getString("GOOGLEID"));
					return user;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		 return null;
	}
	
	public User createUser(String name, String email, String password, String token, String googleID) {
		System.out.println("CRIANDO NOVO USUARIO NOME: " + name + " EMAIL: " + email);
	    String sql = "INSERT INTO USERS (EMAIL, PASSWORD, NAME, TOKEN, GOOGLEID) VALUES (?, ?, ?, ?, ?)";
	    try (
	        Connection conn = ConnectionModule.conector(); PreparedStatement pst = conn.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS)) {
	        pst.setString(1, email);
	        pst.setString(2, password);
	        pst.setString(3, name);
	        pst.setString(4, token);
	        pst.setString(5, googleID);
	        int affected = pst.executeUpdate();
	        if (affected > 0) {
	            ResultSet rs = pst.getGeneratedKeys();
	            if (rs.next()) {
	                int idGerado = rs.getInt(1);
	                return new User(String.valueOf(idGerado), name, email, token, googleID);
	            }
	        }
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return null;
	}

}
           