package com.example.nba.service;

public interface EmailService {
    void sendSimpleMessage(String to, String subject, String text);
}
