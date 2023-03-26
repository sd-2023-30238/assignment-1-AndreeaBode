package com.example.demo.repository;

import com.example.demo.enity.Dream;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DreamRepository extends JpaRepository<Dream, Integer> {

    List<Dream> findAll();
    Dream save (Dream dream);

    @Query(value = "SELECT p.durata, p.energie,p.stres " +
            "FROM Dream p " )
    Optional<Dream> findByCategory(@Param("categorie") String categorie);
}
