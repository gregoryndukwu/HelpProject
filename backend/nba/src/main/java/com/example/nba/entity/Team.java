package com.example.nba.entity;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String coach;
    private int championships;
    private String flag;
}
