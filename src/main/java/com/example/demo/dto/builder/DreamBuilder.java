package com.example.demo.dto.builder;

import com.example.demo.dto.DreamDto;
import com.example.demo.enity.Dream;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public class DreamBuilder {
    public DreamBuilder() {
    }
    public static DreamDto toObiectiveDTO(Dream dream) {
        return new DreamDto(dream.getDescriere(),dream.getDurata(),dream.getEnergie(),dream.getStres(),dream.getTag(),dream.getData());
    }
}
