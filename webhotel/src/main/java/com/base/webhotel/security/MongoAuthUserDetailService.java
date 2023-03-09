package com.base.webhotel.security;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;

import com.base.webhotel.model.UserRepository;

@Service
public class MongoAuthUserDetailService implements UserDetailsService {
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        com.base.webhotel.model.User user = userRepository.findUserByUsername(userName);
        

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();

        user.getAuthorities()
          .forEach(role -> {
              grantedAuthorities.add(new SimpleGrantedAuthority(role.getRole()
                 .getName()));
          });

        return new User(user.getUsername(), user.getPassword(), grantedAuthorities);
    }

}