package application;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.User;
import repository.UserRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UserController {
	
	UserRepository userRepo = new UserRepository();

	@GetMapping("/users")
	public ResponseEntity<?> users() {
	    
		ArrayList<User> users = new ArrayList<>();
		
	    for (int i=0; i<10; i++) {
	    	User u = new User(String.valueOf(i), "B"+i, "C", "D", "E");
	    	users.add(u);
	    }
	    
        return ResponseEntity.ok(users);
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
		
		String email = body.get("email");
		String password = body.get("password");
	    
		User user = userRepo.getUser(email, password);
	    
		if (user != null) {
	        return ResponseEntity.ok(user);
	    }else {
	    	return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário ou senha inválidos");
	    }
	}
	
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody Map<String, String> body) {
		
		String name = body.get("name");
		String email = body.get("email");
		String password = body.get("password");
		String token = body.get("token");
		
	    User user = userRepo.createUser(name, email, password, token, "GOOGLEIDTESTE28365627");

	    if (user != null) {
	        return ResponseEntity.ok(user);
	    }

	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário ou senha inválidos");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}