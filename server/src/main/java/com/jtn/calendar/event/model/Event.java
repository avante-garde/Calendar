package com.jtn.calendar.event.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.ZonedDateTime;

/**
 * An entity class represents a table in a relational database
 */
@Entity
@Table(name = "events")
public class Event {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(columnDefinition = "VARCHAR(128)")
  private String title;

  @Column(columnDefinition = "VARCHAR(255)")
  private String description;

  @Column(columnDefinition = "VARCHAR(128)")
  private String location;

  @Column(columnDefinition = "VARCHAR(255)")
  private String guests;

  private ZonedDateTime startDate;

  private ZonedDateTime endDate;

  public Integer getId() {
    return this.id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getLocation() {
    return this.location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public String getGuests() {
    return this.guests;
  }

  public void setGuests(String guests) {
    this.guests = guests;
  }

  public ZonedDateTime getStartDate() {
    return this.startDate;
  }

  public void setStartDate(ZonedDateTime startDate) {
    this.startDate = startDate;
  }

  public ZonedDateTime getEndDate() {
    return this.endDate;
  }

  public void setEndDate(ZonedDateTime endDate) {
    this.endDate = endDate;
  }
}