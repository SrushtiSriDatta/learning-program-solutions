package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    public Country getCountry(String code) {
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country-list.xml")) {
            List<Country> countries = (List<Country>) context.getBean("countryList");

            for (Country c : countries) {
                if (c.getCode().equalsIgnoreCase(code)) {
                    return c;
                }
            }
        }
        return null;
    }
}
