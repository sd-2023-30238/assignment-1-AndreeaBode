package com.example.demo.service;

import com.example.demo.enity.Dream;
import com.example.demo.repository.DreamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class DreamService {

    @Autowired
    DreamRepository dreamRepository;

    public Dream submitToDB(Dream dream){
        /*dream.setId(dream.getId());
        dream.setDescriere(dream.getDescriere());
        dream.setDurata(dream.getDurata());
        dream.setEnergie(dream.getEnergie());
        dream.setStres(dream.getStres());
        dream.setTag(dream.getTag());*/
       dream.setLocalDate(LocalDate.now());
        return dreamRepository.save(dream);

    }

    public List<Dream> retrieveDreamFromDB(){
        return dreamRepository.findAll();
    }}
