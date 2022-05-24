package com.example.nba.model;

import lombok.*;

@NoArgsConstructor
@Setter
@Getter
@Builder
@AllArgsConstructor
public class LoginRequest {
    private String email;
    private String password;
}
