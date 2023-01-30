package com.tccs.fullstackreacttemplate.forwardController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClientForwardController {

    @GetMapping(value = "/{path:[^\\.]*}")
    public String forward() {
        System.out.println("redirecting for react");
        return "forward:/";
    }
}
