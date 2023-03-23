package com.example.demo.repository;

import com.example.demo.enity.Dream;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DreamRepository extends JpaRepository<Dream, Integer> {

    List<Dream> findAll();
    Dream save (Dream dream);
}
