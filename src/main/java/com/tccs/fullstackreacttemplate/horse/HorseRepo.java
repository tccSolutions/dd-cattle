package com.tccs.fullstackreacttemplate.horse;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HorseRepo extends JpaRepository<Horse, Long> {
    Horse findByName(String name);
    List<Horse> findByIsForSaleOrderByName(boolean isForSale);

    void deleteByName(String name);


}
