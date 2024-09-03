package com.jtn.calendar.event.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jtn.calendar.event.model.Event;
import com.jtn.calendar.event.service.EventService;

/**
 * Controller class is where all the user requests are handled and
 * required/appropriate
 * responses are sent
 */
@RestController
@RequestMapping("/api/event")
@Validated
@CrossOrigin(origins = "http://localhost:5173")
public class EventController {

  private final EventService eventService;

  public EventController(EventService eventService) {
    this.eventService = eventService;
  }

  /**
   * This method is called when a GET request is made
   * URL: localhost:8080/api/event
   * Purpose: Fetches all the events in the event table
   * 
   * @return List of Event
   */
  @GetMapping("/")
  public ResponseEntity<List<Event>> getAllEvents() {
    return ResponseEntity.ok().body(eventService.getAllEvents());
  }

  /**
   * This method is called when a GET{id} request is made
   * URL: localhost:8080/api/event/{id}
   * Purpose: Fetches event with the given id
   * 
   * @param id - event id
   * @return Event with the given id
   */
  @GetMapping("/{id}")
  public ResponseEntity<Event> getEventById(@PathVariable Integer id) {
    return ResponseEntity.ok().body(eventService.getEventById(id));
  }

  /**
   * This method is called when a POST request is made
   * URL: localhost:8080/api/event
   * Purpose: Save an Event entity
   * 
   * @param event - Request body is an Events entity
   * @return Saved Event entity
   */
  @PostMapping("/")
  public ResponseEntity<Event> saveEvent(@RequestBody Event event) {
    return ResponseEntity.ok().body(eventService.saveEvent(event));
  }

  /**
   * This method is called when a PUT request is made
   * URL: localhost:8080/api/event
   * Purpose: Update an Event entity
   * 
   * @param event - Event entity to be updated
   * @return Updated Event
   */
  @PutMapping("/")
  public ResponseEntity<Event> updateEvent(@RequestBody Event event) {
    return ResponseEntity.ok().body(eventService.updateEvent(event));
  }

  /**
   * This method is called when a DELETE request is made
   * URL: localhost:8080/api/event/1 (or any other id)
   * Purpose: Delete a events entity
   * 
   * @param id - event's id to be deleted
   * @return a String message indicating event record has been deleted
   *         successfully
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteEventById(@PathVariable Integer id) {
    eventService.deleteEventById(id);
    return ResponseEntity.ok().body("Deleted event successfully");
  }

}
