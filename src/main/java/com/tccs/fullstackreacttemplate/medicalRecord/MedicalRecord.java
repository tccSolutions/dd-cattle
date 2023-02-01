package com.tccs.fullstackreacttemplate.medicalRecord;

import com.tccs.fullstackreacttemplate.horse.Horse;
import jakarta.persistence.*;


import java.time.LocalDate;

@Entity
public class MedicalRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "horse_id")
    private Horse horse;

    private float height;
    private float length;
    private float girth;
    private float redTape;

    private float blackTape;
    private boolean wasWormed;
    private boolean wasVaccinated;
    private boolean cogginsPulled;

    private boolean rabiesShot;
    private String veterinarian;
    private String notes;
    private LocalDate date;
    private String description;

    public MedicalRecord() {
    }

    public MedicalRecord(LocalDate date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Horse getHorse() {
        return horse;
    }

    public void setHorse(Horse horse) {
        this.horse = horse;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public float getLength() {
        return length;
    }

    public void setLength(float length) {
        this.length = length;
    }

    public float getGirth() {
        return girth;
    }

    public void setGirth(float girth) {
        this.girth = girth;
    }

    public float getRedTape() {
        return redTape;
    }

    public void setRedTape(float redTape) {
        this.redTape = redTape;
    }

    public float getBlackTape() {
        return blackTape;
    }

    public void setBlackTape(float blackTape) {
        this.blackTape = blackTape;
    }



    public boolean isWasWormed() {
        return wasWormed;
    }

    public void setWasWormed(boolean wasWormed) {
        this.wasWormed = wasWormed;
    }

    public boolean isWasVaccinated() {
        return wasVaccinated;
    }

    public void setWasVaccinated(boolean wasVaccinated) {
        this.wasVaccinated = wasVaccinated;
    }

    public boolean isCogginsPulled() {
        return cogginsPulled;
    }

    public void setCogginsPulled(boolean cogginsPulled) {
        this.cogginsPulled = cogginsPulled;
    }

    public String getVeterinarian() {
        return veterinarian;
    }

    public void setVeterinarian(String veterinarian) {
        this.veterinarian = veterinarian;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isRabiesShot() {
        return rabiesShot;
    }

    public void setRabiesShot(boolean rabiesShot) {
        this.rabiesShot = rabiesShot;
    }

    @Override
    public String toString() {
        return "MedicalRecord{" +
                "id=" + id +
                ", horse=" + horse +
                ", height=" + height +
                ", length=" + length +
                ", girth=" + girth +
                ", redTape=" + redTape +
                ", blackTape=" + blackTape +
                ", wasWormed=" + wasWormed +
                ", wasVaccinated=" + wasVaccinated +
                ", cogginsPulled=" + cogginsPulled +
                ", rabiesShot=" + rabiesShot +
                ", veterinarian='" + veterinarian + '\'' +
                ", notes='" + notes + '\'' +
                ", date=" + date +
                ", type='" + description + '\'' +
                '}';
    }
}
