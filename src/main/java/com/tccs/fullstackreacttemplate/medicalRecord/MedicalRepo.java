package com.tccs.fullstackreacttemplate.medicalRecord;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicalRepo extends JpaRepository<MedicalRecord, Long> {
        List<MedicalRecord> findByOrderByCogginsPulled();
    List<MedicalRecord> findByHorseIdAndWasWormedOrderByDate(Long id, boolean wasWormed);
    List<MedicalRecord> findByHorseIdAndWasVaccinatedOrderByDate(Long id, boolean wasVaccinated);
    List<MedicalRecord> findByHorseIdAndCogginsPulledOrderByDate(Long id, boolean wasVaccinated);
    List<MedicalRecord> findByHorseIdAndRabiesShotOrderByDate(Long id, boolean rabiesShot);
    List<MedicalRecord> findByHorseIdAndGirthGreaterThanEqual(Long id, int weight);
    List<MedicalRecord> findByHorseIdAndHeightGreaterThanEqual(Long id, int height);
    List<MedicalRecord> findByHorseIdOrderByDateDesc(Long id);
}
