package Usuario.web.controllers;

import Usuario.entities.User;
import Usuario.exceptions.GlobalExceptionHandler;
import Usuario.repositories.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/test")
    public ResponseEntity<String> testEndpoint() {
        return ResponseEntity.ok("Working");
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody @Valid User user, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            String errorMessage = Objects.requireNonNull(bindingResult.getFieldError()).getDefaultMessage();
            return ResponseEntity.badRequest().body(new ErrorResponses(errorMessage));
        } else if (!isValidEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body(new ErrorResponses("Invalid email"));
        }

        Optional<User> existingUser = usuarioRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new GlobalExceptionHandler.DuplicateDataException("A user with this email already exists.");
        }
        User savedUser = usuarioRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    private boolean isValidEmail(String email) {
        return email.matches(".+@.+\\..+");
    }
}

