package com.example.demo.enity;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.time.LocalDate;

@Entity
public class Dream {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column
    private String descriere;
    @Column
    private String stres;
    @Column
    private String energie;
    @Column
    private String durata;
    @Column
    private LocalDate localDate;
    @Column
    private String tag;

    public Dream() {}

    public Dream(String descriere, String stres, String energie, String durata, LocalDate localDate, String tag) {
        this.descriere = descriere;
        this.stres = stres;
        this.energie = energie;
        this.durata = durata;
        this.localDate = localDate;
        this.tag = tag;
    }

    public LocalDate getLocalDate() {
        return localDate;
    }

    public void setLocalDate(LocalDate localDate) {
        this.localDate = localDate;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

}
