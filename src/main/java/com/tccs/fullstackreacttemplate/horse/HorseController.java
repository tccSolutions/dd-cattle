package com.tccs.fullstackreacttemplate.horse;

import com.cloudinary.Cloudinary;
import com.cloudinary.api.ApiResponse;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin
public class HorseController {

    HorseRepo repo;
    Cloudinary cloudinary;
    public HorseController(HorseRepo repo) {
        this.repo = repo;
        this.cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dmobley0608",
                "api_key", "172351854381963",
                "api_secret", "aHccAD-bj6FasCVv_m_xn2BSjxg"));
    }

    @GetMapping("/horses")
    public List<Horse> getAllHorses(){
        return repo.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }

    @GetMapping("/horses/{id}")
    public Optional<Horse> getHorseById(@PathVariable Long id){
        return repo.findById(id);
    }

    @GetMapping("/horses/for-sale")
    public List<Horse> getHorsesForSale(){
        return repo.findByIsForSaleOrderByName(true);
    }

    @GetMapping("/horses/not-for-sale")
    public List<Horse> getHorsesNotForSale(){
        return repo.findByIsForSaleOrderByName(false);
    }

    @GetMapping("horses/images/{horse}")
    public ApiResponse getHorseImagesByHorseName(@PathVariable String horse) throws Exception {
            return  cloudinary.search().expression("folder:double_d_ranch/"+horse).execute();
    }
}
