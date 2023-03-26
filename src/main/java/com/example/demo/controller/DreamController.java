package com.example.demo.controller;

import com.example.demo.dto.DreamDto;
import com.example.demo.dto.DreamMapper;
import com.example.demo.enity.Dream;
import com.example.demo.service.DreamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/dreamService")
public class DreamController {
    @Autowired
    DreamService dreamService;
    @PostMapping("/save")
    public ResponseEntity<Dream> saveDream(@RequestBody DreamDto body){
        System.out.println("the first success");
        Dream dream = DreamMapper.transformToEntity(body);
        if(Integer.parseInt(body.getEnergie())>=1 && Integer.parseInt(body.getEnergie())<=5 &&
                Integer.parseInt(body.getDurata())>=1 && Integer.parseInt(body.getDurata())<=5 &&
                Integer.parseInt(body.getStres())>=1 && Integer.parseInt(body.getStres())<=5){
        Dream dreamToDto = dreamService.submitToDB(dream);
        System.out.println(dreamToDto.getTag());
        return ResponseEntity.status(HttpStatus.CREATED).body(dream);
    }
    else throw new ArithmeticException("Valori incorecte");
    }

    @GetMapping("/getAllDreams")
    public ResponseEntity<List<DreamDto>> retrieveAllDreams() {
        System.out.println("am ajuns");
        List<DreamDto> dreams = dreamService.receiveFromDB();
        System.out.println(dreams.toString());
        return new ResponseEntity<>(dreams, HttpStatus.OK);
    }

    /*public List<Dream> retriveAllDream(){

        System.out.println("am ajuns");
        return dreamService.retrieveDreamFromDB();
    }*/

}
