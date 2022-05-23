package com.example.nba.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserSaveDTO {
    private int id;
    private String email;
    private String password;
    private String role;
    private String firstname;
    private String lastname;
}
