package com.jtn.calendar;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {
  // @Autowired
	// private EventRepo eventRepo;

	// public void seedEventsTable() {
    // Uncomment if starting table clean.
    // eventRepo.deleteAll();
	// }

	// Seed Events database
	@Bean
	public CommandLineRunner seedData() {
		return args -> {
			// seedEventsTable();
		};
	}
}
