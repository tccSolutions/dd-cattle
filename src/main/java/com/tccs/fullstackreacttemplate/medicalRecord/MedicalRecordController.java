package com.tccs.fullstackreacttemplate.medicalRecord;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MedicalRecordController {

  private MedicalRepo repo;

    public MedicalRecordController(MedicalRepo repo) {
        this.repo = repo;
    }

    @GetMapping(path="/medical-records")
    public List<MedicalRecord> getAllRecords(){
        return repo.findAll();
    }

    @GetMapping(path="/medical-records/{id}")
    public Optional<MedicalRecord> getRecordsById(@PathVariable Long id){
        return repo.findById(id);
    }


    @GetMapping(path="/medical-records/horse/{id}")
    public List<MedicalRecord> getAllSpecificHorseRecordsByHorseID(@PathVariable Long id){
        return repo.findByHorseIdOrderByDateDesc(id);
    }

    @GetMapping(path="/medical-records/wormed/{id}")
    public List<MedicalRecord> getLastWormed(@PathVariable Long id){
        return repo.findByHorseIdAndWasWormedOrderByDate(id, true);

    }

    @GetMapping(path="/medical-records/vaccinated/{id}")
    public List<MedicalRecord> getLastVaccination(@PathVariable Long id){
        return repo.findByHorseIdAndWasVaccinatedOrderByDate(id, true);

    }

    @GetMapping(path="/medical-records/coggins/{id}")
    public List<MedicalRecord> getLastCoggins(@PathVariable Long id){
        return repo.findByHorseIdAndCogginsPulledOrderByDate(id, true);

    }
    @GetMapping(path="/medical-records/rabies-shot/{id}")
    public List<MedicalRecord> getLastRabiesShot(@PathVariable Long id){
        return repo.findByHorseIdAndRabiesShotOrderByDate(id, true);

    }

    @GetMapping(path="/medical-records/weight/{id}")
    public List<MedicalRecord> getWeight(@PathVariable Long id){
        return repo.findByHorseIdAndGirthGreaterThanEqual(id, 10);
    }

    @GetMapping(path="/medical-records/height/{id}")
    public List<MedicalRecord> getHeight(@PathVariable Long id){
        return repo.findByHorseIdAndHeightGreaterThanEqual(id, 1);
    }

    @PostMapping("/auth/medical-records/add")
    public MedicalRecord addRecord(@RequestBody MedicalRecord record){
        repo.save(record);
        return record;
    }

    @PutMapping("/auth/medical-records/update/{id}")
    public MedicalRecord updateRecord(@PathVariable Long id, @RequestBody MedicalRecord record){
        repo.save(record);
        return record;
    }

    @DeleteMapping("/auth/medical-records/delete/{id}")
    public ResponseEntity<Void> deleteRecord(@PathVariable Long id){
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
