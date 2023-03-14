package com.base.webhotel.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import static org.springframework.security.config.Customizer.withDefaults;

import java.util.Arrays;

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
	CorsConfigurationSource corsConfigurationSource() {
	CorsConfiguration configuration = new CorsConfiguration();
	
	//This cannot be set to * with allowCredentials set to true
	configuration.setAllowedOrigins(Arrays.asList("http://localhost:8080,http://localhost:3000"));
	
	configuration.setAllowCredentials(true);
	configuration.setMaxAge(3600L);
	configuration.addAllowedHeader("*");
	configuration.addAllowedMethod("*");
	
	//* * should be equal to all methods */
	//configuration.setAllowedMethods(Arrays.asList("GET","POST","OPTIONS","PUT", "DELETE"));
	UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	source.registerCorsConfiguration("/**", configuration);
	return source;
}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.cors().configurationSource(corsConfigurationSource());
		http.authorizeHttpRequests(authorize -> authorize
						//.requestMatchers("/api/create-user/**", "/about").hasRole("ADMIN")
						.requestMatchers("/api/login/**").permitAll()
						 .anyRequest().authenticated())
				.httpBasic(withDefaults())
				.formLogin(withDefaults());
		http.sessionManagement() //This makes sure that the JSESSIONID can be used to access data
        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED);
		return http.build();
	}

}