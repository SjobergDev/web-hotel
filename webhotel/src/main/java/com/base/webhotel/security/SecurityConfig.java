package com.base.webhotel.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.beans.factory.annotation.Autowired;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	// Used for example
	// https://github.com/spring-projects/spring-security-samples/blob/main/servlet/java-configuration/hello-mvc-security/src/main/java/example/ApplicationConfiguration.java

	@Autowired
	private MongoAuthUserDetailService mongoAuthUserDetailService;

	@Autowired
	public void configAuthBuilder(AuthenticationManagerBuilder builder) throws Exception {
		builder.userDetailsService(mongoAuthUserDetailService);
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
				.authorizeHttpRequests(authorize -> authorize
						.requestMatchers("/api/create-user/**", "/about").hasRole("ADMIN")
						.anyRequest().authenticated())
				.httpBasic(withDefaults())
				.formLogin(withDefaults());
		return http.build();
	}

}