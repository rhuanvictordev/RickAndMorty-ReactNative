package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionModule {

    public static Connection conector() {
        Connection conn = null;

        String url = "jdbc:mysql://localhost:3306/api?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true";
        String user = "root";
        String password = "root";

        try {
            conn = DriverManager.getConnection(url, user, password);
            //System.out.println("Conectado ao banco");
            return conn;
        } catch (Exception e) {
            System.out.println(e);
        }

        return conn;
    }
}

