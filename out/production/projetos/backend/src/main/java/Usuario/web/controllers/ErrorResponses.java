package Usuario.web.controllers;

import lombok.Getter;

@Getter
public class ErrorResponses {
    private final String message;

    public ErrorResponses(String message) {
        this.message = message;
    }
}

