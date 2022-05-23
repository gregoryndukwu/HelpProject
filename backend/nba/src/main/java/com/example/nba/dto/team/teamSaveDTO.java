package com.example.nba.dto.team;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class teamSaveDTO {

    private int id;
    private String name;
    private String coach;
    private int championships;
    private String flag;

}
