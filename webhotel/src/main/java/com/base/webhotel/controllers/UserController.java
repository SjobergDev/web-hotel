package com.base.webhotel.controllers;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.base.webhotel.model.Role;
import com.base.webhotel.model.User;
import com.base.webhotel.model.UserRole;

@RestController
@RequestMapping("/api/create-user/")
public class UserController {
    

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/new")
    public User createDummyUser(){

        User user = new User();
        user.setUsername("aron");
        user.setPassword(passwordEncoder.encode("password"));
        
        UserRole userRole = new UserRole();
        Role role = new Role();
        role.setName("ADMIN");
        userRole.setRole(role);

        Set<UserRole> roles = new HashSet<UserRole>();
        roles.add(userRole);
        user.setUserRoles(roles);

        return mongoTemplate.save(user);
    }
}
