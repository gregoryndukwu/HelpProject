package com.example.nba.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Setter
@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
    private int id;
    private String firstname;
    private String lastname;
    @Column(unique=true)
    private String email;
    private String password;
    private boolean active = true;
    private LocalDate deletedAt;
    private LocalDateTime LastLoggedInAt;
    private String role;
    private String resetPasswordToken;
}
