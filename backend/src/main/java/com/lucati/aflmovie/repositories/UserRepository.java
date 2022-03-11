package com.lucati.aflmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lucati.aflmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email);
}
