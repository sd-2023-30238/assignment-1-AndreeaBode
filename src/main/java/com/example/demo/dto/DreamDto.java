package com.example.demo.dto;

import java.time.LocalDate;
import java.util.Date;

public class DreamDto {
    private String descriere;
    private String stres;
    private String energie;
    private String durata;
    private String tag;
    private LocalDate data;


    public DreamDto(String descriere, String stres, String energie, String durata, String tag, LocalDate data) {
        this.descriere = descriere;
        this.stres = stres;
        this.energie = energie;
        this.durata = durata;
        this.tag = tag;
        this.data = data;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getDescriere() {
        return descriere;
    }

    public void setDescriere(String descriere) {
        this.descriere = descriere;
    }

    public String getStres() {
        return stres;
    }

    public void setStres(String stres) {
        this.stres = stres;
    }

    public String getEnergie() {
        return energie;
    }

    public void setEnergie(String energie) {
        this.energie = energie;
    }

    public String getDurata() {
        return durata;
    }

    public void setDurata(String durata) {
        this.durata = durata;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    @Override
    public String toString() {
        return "DreamDto{" +
                "localDate=" + data +
                '}';
    }
}
