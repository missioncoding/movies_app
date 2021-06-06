package com.upgrad.movieapp.dao;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.upgrad.movieapp.data.Artist;
import com.upgrad.movieapp.data.MovieDetails;
import org.springframework.stereotype.Repository;
import org.springframework.util.ResourceUtils;

import java.io.*;
import java.nio.file.Files;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class MovieDao {

    static MovieDetails[] moviedetails;
    static Artist[] artistsdetails;

    static {
        loadMovieDB();
        loadArtistDB();
    }

    private static void loadMovieDB() {
        try {
            File file = ResourceUtils.getFile("classpath:movieDB.json");
            String content = new String(Files.readAllBytes(file.toPath()));
            ObjectMapper objectMapper = new ObjectMapper();
            moviedetails = objectMapper.readValue(content, MovieDetails[].class);
        } catch (IOException i) {
            i.printStackTrace();
        }
    }

    private static void loadArtistDB() {
        try {
            File file = ResourceUtils.getFile("classpath:artistsDB.json");
            String content = new String(Files.readAllBytes(file.toPath()));
            ObjectMapper objectMapper = new ObjectMapper();
            artistsdetails = objectMapper.readValue(content, Artist[].class);
        } catch (IOException i) {
            i.printStackTrace();
        }
    }

    public static String getAllMovies() {
        String result = "";
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            result = objectMapper.writeValueAsString(moviedetails);
        } catch(Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    public static String getStatusMovies(String status) {
        String result = "";
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            List<MovieDetails> statusmovies = Arrays.stream(moviedetails).
                    filter(item -> item.getStatus().equals(status)).collect(Collectors.toList());
            result = objectMapper.writeValueAsString(statusmovies);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    public static void main(String[] args) throws JsonProcessingException {
        getAllMovies();
        System.out.print("status");
        System.out.println(getStatusMovies("PUBLISHED"));
    }

}
