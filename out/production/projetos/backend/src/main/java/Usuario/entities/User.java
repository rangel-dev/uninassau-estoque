package Usuario.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Name cannot be null")
    @Column(nullable = false)
    @Size(min = 3, message = "Name must be at least 3 characters long")
    private String name;

    @Column(nullable = false, unique = true)
    @Email(regexp = ".+@.+\\..+", message = "Email must be valid")
    private String email;

    @NotBlank(message = "Password is required")
    @Column(nullable = false)
    private String password;

}
