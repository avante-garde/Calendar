package com.jtn.calendar.event.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

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

  @Column(columnDefinition = "ARRAY")
  private String[] guests;

  @Column(columnDefinition = "DATETIME")
  private Date startTime;

  @Column(columnDefinition = "DATETIME")
  private Date endTime;

  public Event() {
  
  }
}