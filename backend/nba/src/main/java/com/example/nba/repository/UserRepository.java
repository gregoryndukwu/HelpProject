package com.example.nba.repository;

import com.example.nba.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    List<User> findAllByDeletedAtIsNull();
    Optional<User> findByEmail(String email);
    User findByResetPasswordToken(String token);

    List<User> findTop10ByRoleAndDeletedAtIsNullOrderByIdDesc(String role);

}
