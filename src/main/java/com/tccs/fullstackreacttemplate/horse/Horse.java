package com.tccs.fullstackreacttemplate.horse;


import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;


import java.time.LocalDate;

@Entity
public class Horse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @NotNull
    private String name;
    private String breed;
    @Nullable
    private String color;
    @NotNull
    private String sex;

    private int birthYear;

    private boolean isForSale;
    @Nullable
    private String brand;
    private String bio;
    private float price;
    private LocalDate lastUpdated;
    @Nullable
    private String hma;

    public Horse() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getBirthYear() {
        return birthYear;
    }

    public void setBirthYear(int birthYear) {
        this.birthYear = birthYear;
    }

    public boolean isForSale() {
        return isForSale;
    }

    public void setForSale(boolean forSale) {
        isForSale = forSale;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public LocalDate getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(LocalDate lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public String getHma() {
        return hma;
    }

    public void setHma(String hma) {
        this.hma = hma;
    }

    @Override
    public String toString() {
        return "Horse{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", breed='" + breed + '\'' +
                ", color='" + color + '\'' +
                ", sex='" + sex + '\'' +
                ", birthYear=" + birthYear +
                ", isForSale=" + isForSale +
                ", brand='" + brand + '\'' +
                ", bio='" + bio + '\'' +
                ", price=" + price +
                ", lastUpdated=" + lastUpdated +
                ", hma='" + hma + '\'' +
                '}';
    }
}
