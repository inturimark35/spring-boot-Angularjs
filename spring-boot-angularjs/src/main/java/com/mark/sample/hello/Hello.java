package com.mark.sample.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class Hello {
	
	@RequestMapping("/")
	public  String call() {
	   
	   
		return "redirect:/resources/index.html";
	   
   }
}
