package com.example.demo.controller;

import com.example.demo.enity.Dream;
import com.example.demo.service.DreamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dreamService")
public class DreamController {
    @Autowired
    DreamService dreamService;
    @PostMapping("/save")
    public Dream saveDream(@RequestBody Dream body){
        System.out.println("Succes");
        return dreamService.submitToDB(body);
    }
    @GetMapping("/getAllDreams")
    public List<Dream> retriveAllDream(){
        return dreamService.retrieveDreamFromDB();
    }
}
