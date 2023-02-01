package com.tccs.fullstackreacttemplate.trainingRecord;

import com.tccs.fullstackreacttemplate.horse.Horse;
import jakarta.persistence.*;



@Entity
public class TrainingRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @OneToOne
    @JoinColumn(name = "horse_id")
    private Horse horse;
    private boolean acceptsGunFire;
    private boolean willCrossWater;
    private boolean acceptsRider;
    private boolean allowsFeetPicked;
    private boolean willLead;
    private boolean takesSaddle;
    private boolean barebackRider;
    private boolean loadsOnTrailer;
    private boolean trailRides;
    private int numberOfRides;

    public TrainingRecord() {
    }

    public TrainingRecord(Horse horse) {
        this.horse = horse;
    }

    public Horse getHorse() {
        return horse;
    }

    public void setHorse(Horse horse) {
        this.horse = horse;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isAcceptsGunFire() {
        return acceptsGunFire;
    }

    public void setAcceptsGunFire(boolean acceptsGunFire) {
        this.acceptsGunFire = acceptsGunFire;
    }

    public boolean isWillCrossWater() {
        return willCrossWater;
    }

    public void setWillCrossWater(boolean willCrossWater) {
        this.willCrossWater = willCrossWater;
    }

    public boolean isAcceptsRider() {
        return acceptsRider;
    }

    public void setAcceptsRider(boolean acceptsRider) {
        this.acceptsRider = acceptsRider;
    }

    public boolean isAllowsFeetPicked() {
        return allowsFeetPicked;
    }

    public void setAllowsFeetPicked(boolean allowsFeetPicked) {
        this.allowsFeetPicked = allowsFeetPicked;
    }

    public boolean isWillLead() {
        return willLead;
    }

    public void setWillLead(boolean willLead) {
        this.willLead = willLead;
    }

    public boolean isTakesSaddle() {
        return takesSaddle;
    }

    public void setTakesSaddle(boolean takesSaddle) {
        this.takesSaddle = takesSaddle;
    }

    public boolean isBarebackRider() {
        return barebackRider;
    }

    public void setBarebackRider(boolean barebackRider) {
        this.barebackRider = barebackRider;
    }

    public boolean isLoadsOnTrailer() {
        return loadsOnTrailer;
    }

    public void setLoadsOnTrailer(boolean loadsOnTrailer) {
        this.loadsOnTrailer = loadsOnTrailer;
    }

    public boolean isTrailRides() {
        return trailRides;
    }

    public void setTrailRides(boolean trailRides) {
        this.trailRides = trailRides;
    }

    public int getNumberOfRides() {
        return numberOfRides;
    }

    public void setNumberOfRides(int numberOfRides) {
        this.numberOfRides = numberOfRides;
    }

    @Override
    public String toString() {
        return "TrainingRecord{" +
                "id=" + id +
                ", horse=" + horse +
                ", acceptsGunFire=" + acceptsGunFire +
                ", willCrossWater=" + willCrossWater +
                ", acceptsRider=" + acceptsRider +
                ", allowsFeetPicked=" + allowsFeetPicked +
                ", willLead=" + willLead +
                ", takesSaddle=" + takesSaddle +
                ", barebackRider=" + barebackRider +
                ", loadsOnTrailer=" + loadsOnTrailer +
                ", trailRides=" + trailRides +
                ", numberOfRides=" + numberOfRides +
                '}';
    }
}
