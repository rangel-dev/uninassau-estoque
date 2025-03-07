package Usuario;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import java.sql.SQLException;

@SpringBootApplication
public class UsuarioApplication {

    public UsuarioApplication() throws SQLException {
    }

    public static void main(String[] args) {
		SpringApplication.run(UsuarioApplication.class, args);
	}

}
