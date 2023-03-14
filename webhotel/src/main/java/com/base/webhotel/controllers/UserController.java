package com.base.webhotel.controllers;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.base.webhotel.model.Role;
import com.base.webhotel.model.User;
import com.base.webhotel.model.UserRepository;
import com.base.webhotel.model.UserRole;

@RestController
@RequestMapping("/api/user")
public class UserController {
    

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

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

    @GetMapping("/login")
    public User loginUser(@RequestHeader("Authorization") String basicAuth){
        
        User user = new User();
       if (basicAuth != null && basicAuth.toLowerCase().startsWith("basic")) {
            // Authorization: Basic base64credentials
            String base64Credentials = basicAuth.substring("Basic".length()).trim();
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded, StandardCharsets.UTF_8);
            // credentials = username:password
            final String[] values = credentials.split(":", 2);

            user = userRepository.findUserByUsername(values[0]);
        } 
        return user;
    }
    

}
