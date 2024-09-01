package com.jtn.calendar.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jtn.calendar.event.model.Event;

// For including SQL syntax
// import org.springframework.data.jpa.repository.Query;

/**
 * Repository is an interface that provides access to data in a database
 */
public interface EventRepository extends JpaRepository<Event, Integer> {

  // Custom methods that aren't the usual getters and setters
  // Ex. findById
}
