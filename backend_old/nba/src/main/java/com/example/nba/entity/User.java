package com.example.nba.entity;


import lombok.*;
import jdk.jfr.DataAmount;

import javax.persistence.*;


@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
}
