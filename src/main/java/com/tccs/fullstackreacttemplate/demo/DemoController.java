package com.tccs.fullstackreacttemplate.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class DemoController {

    @GetMapping(path = "no-auth/demo")
    public ResponseEntity<String> sayHello(){
        return ResponseEntity.ok("No Auth");
    };

    @GetMapping(path="test/auth/demo")
    public ResponseEntity<String> sayHelloAuth(){
        return ResponseEntity.ok("Auth");
    };
}
