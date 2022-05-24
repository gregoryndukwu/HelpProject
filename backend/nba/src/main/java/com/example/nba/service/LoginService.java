package com.example.nba.service.impl;

import com.example.nba.model.LoginRequest;
import com.example.nba.model.LoginResponse;

public interface LoginService {

    LoginResponse login(LoginRequest loginRequest) throws Exception;

}
