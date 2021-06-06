package com.upgrad.movieapp.controller;

import com.upgrad.movieapp.dao.MovieDao;
import com.upgrad.movieapp.service.Movie;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MovieController {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/movies")
    public String getMovie(@RequestParam(value = "status", defaultValue = "") String status) {
        if (status.isEmpty()) {
            return MovieDao.getAllMovies();
        } else {
            return MovieDao.getStatusMovies(status);
        }


    }


}
