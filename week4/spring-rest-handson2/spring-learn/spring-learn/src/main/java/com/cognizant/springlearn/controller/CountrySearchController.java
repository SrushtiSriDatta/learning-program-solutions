package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountrySearchController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountrySearchController.class);

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START: getCountry()");
        Country country = countryService.getCountry(code);
        LOGGER.debug("Matched Country: {}", country);
        LOGGER.info("END: getCountry()");
        return country;
    }
}
