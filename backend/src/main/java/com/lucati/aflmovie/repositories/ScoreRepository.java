package com.lucati.aflmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lucati.aflmovie.entities.Score;
import com.lucati.aflmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{
	
}
