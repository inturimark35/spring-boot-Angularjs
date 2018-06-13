package com.mark.sample.hello;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {
	
	@RequestMapping(value = "/sample/{appID}/{password}" ,method = RequestMethod.GET, produces = "application/json")
	public  StringResponse call(@PathVariable("appID") String appID,@PathVariable("password") String password) {
		
		StringResponse s = new StringResponse();
	   s.setAppID("Hello");
	   
		return s;
	   
   }

}
