package com.example.nba.service;

import com.example.nba.dto.user.UserSaveDTO;
import com.example.nba.dto.user.UserDTO;
import com.example.nba.entity.User;

import java.util.List;

public interface UserService {

    void add(UserSaveDTO t);
    void delete(int id);
    void update(int id, UserDTO t);

    List<UserDTO> findAll();
    UserDTO findById(int id);
    List<UserDTO> findAllWhereDeleteAtNotNull();

    String forgotPassword(String email) throws Exception;
    User resetPassword(String token, String password) throws Exception;

}
