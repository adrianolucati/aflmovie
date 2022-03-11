package com.lucati.aflmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lucati.aflmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
