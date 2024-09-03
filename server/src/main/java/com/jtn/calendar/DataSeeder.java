package com.jtn.calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.jtn.calendar.event.repository.EventRepository;

@Configuration
public class DataSeeder {
  @Autowired
	private EventRepository eventRepo;

	public void clearEventsTable() {
    // Uncomment if starting table clean.
    eventRepo.deleteAll();
	}

	// Seed Events database
	@Bean
	public CommandLineRunner seedData() {
		return args -> {
			clearEventsTable();
		};
	}
}
