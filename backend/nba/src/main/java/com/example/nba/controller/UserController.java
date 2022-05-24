package com.example.nba.controller;

import com.example.nba.dto.user.UserDTO;
import com.example.nba.dto.user.UserSaveDTO;
import com.example.nba.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<?> save(@RequestBody UserSaveDTO h) throws Exception {
        if ("ADMIN".equals(h.getRole())) return new ResponseEntity<>("Unauthorized", HttpStatus.UNAUTHORIZED);
        userService.add(h);
        return ResponseEntity.ok().body("");
    }

    @PostMapping("/admin")
    public void saveAdmin(@RequestBody UserSaveDTO h) throws Exception {
        userService.add(h);
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(userService.findAllWhereDeletedAtNotNull());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable int id) {
        return ResponseEntity.ok().body(userService.findById(id));
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        userService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable int id, @RequestBody UserDTO l){
        userService.update(id, l);
    }



}
