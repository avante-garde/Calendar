package com.jtn.calendar.event.service;

import org.springframework.stereotype.Service;

import com.jtn.calendar.event.model.Event;
import com.jtn.calendar.event.repository.EventRepository;

// import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Service layer is where all the business logic lies
 */
@Service
public class EventService {

  private final EventRepository eventRepo;

  public EventService (EventRepository eventRepo) {
    this.eventRepo = eventRepo;
  }

  public List<Event> getAllEvents(){
    return eventRepo.findAll();
  }

  public Event getEventById(Integer id) {
    Optional<Event> optionalEvent = eventRepo.findById(id);
    if(optionalEvent.isPresent()){
      return optionalEvent.get();
    }
    // log.info("Event with id: {} doesn't exist", id);
    return null;
  }

  public Event saveEvent (Event event) {
    // event.setCreatedAt(LocalDateTime.now());
    // event.setUpdatedAt(LocalDateTime.now());
    Event savedEvent = eventRepo.save(event);

    // log.info("Event with id: {} saved successfully", event.getId());
    return savedEvent;
  }

  public Event updateEvent (Event event) {
    // Optional<Event> existingEvent = eventRepo.findById(event.getId());
    // event.setCreatedAt(existingEvent.get().getCreatedAt());
    // event.setUpdatedAt(LocalDateTime.now());

    Event updatedEvent = eventRepo.save(event);

    // log.info("Event with id: {} updated successfully", event.getId());
    return updatedEvent;
  }

  public void deleteEventById (Integer id) {
    eventRepo.deleteById(id);
  }
}
