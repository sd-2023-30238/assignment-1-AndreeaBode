package com.example.demo.service;

import com.example.demo.dto.DreamDto;
import com.example.demo.dto.builder.DreamBuilder;
import com.example.demo.enity.Dream;
import com.example.demo.repository.DreamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public List<DreamDto> receiveFromDB() {
        List<Dream> obiectiveList = dreamRepository.findAll();
        System.out.println(obiectiveList.toString());
        return obiectiveList.stream()
                .map(DreamBuilder::toObiectiveDTO)
                .collect(Collectors.toList());
    }
    }
