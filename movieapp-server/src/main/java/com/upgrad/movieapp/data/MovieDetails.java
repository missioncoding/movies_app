
package com.upgrad.movieapp.data;

import java.util.List;
import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "id",
    "title",
    "storyline",
    "genres",
    "duration",
    "poster_url",
    "trailer_url",
    "wiki_url",
    "release_date",
    "censor_board_rating",
    "critics_rating",
    "status",
    "artists"
})
@Generated("jsonschema2pojo")
public class MovieDetails {

    @JsonProperty("id")
    private String id;
    @JsonProperty("title")
    private String title;
    @JsonProperty("storyline")
    private String storyline;
    @JsonProperty("genres")
    private List<String> genres = null;
    @JsonProperty("duration")
    private Integer duration;
    @JsonProperty("poster_url")
    private String posterUrl;
    @JsonProperty("trailer_url")
    private String trailerUrl;
    @JsonProperty("wiki_url")
    private String wikiUrl;
    @JsonProperty("release_date")
    private String releaseDate;
    @JsonProperty("censor_board_rating")
    private String censorBoardRating;
    @JsonProperty("critics_rating")
    private Double criticsRating;
    @JsonProperty("status")
    private String status;
    @JsonProperty("artists")
    private List<Artist> artists = null;

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @JsonProperty("id")
    public void setId(String id) {
        this.id = id;
    }

    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @JsonProperty("title")
    public void setTitle(String title) {
        this.title = title;
    }

    @JsonProperty("storyline")
    public String getStoryline() {
        return storyline;
    }

    @JsonProperty("storyline")
    public void setStoryline(String storyline) {
        this.storyline = storyline;
    }

    @JsonProperty("genres")
    public List<String> getGenres() {
        return genres;
    }

    @JsonProperty("genres")
    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    @JsonProperty("duration")
    public Integer getDuration() {
        return duration;
    }

    @JsonProperty("duration")
    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    @JsonProperty("poster_url")
    public String getPosterUrl() {
        return posterUrl;
    }

    @JsonProperty("poster_url")
    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    @JsonProperty("trailer_url")
    public String getTrailerUrl() {
        return trailerUrl;
    }

    @JsonProperty("trailer_url")
    public void setTrailerUrl(String trailerUrl) {
        this.trailerUrl = trailerUrl;
    }

    @JsonProperty("wiki_url")
    public String getWikiUrl() {
        return wikiUrl;
    }

    @JsonProperty("wiki_url")
    public void setWikiUrl(String wikiUrl) {
        this.wikiUrl = wikiUrl;
    }

    @JsonProperty("release_date")
    public String getReleaseDate() {
        return releaseDate;
    }

    @JsonProperty("release_date")
    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    @JsonProperty("censor_board_rating")
    public String getCensorBoardRating() {
        return censorBoardRating;
    }

    @JsonProperty("censor_board_rating")
    public void setCensorBoardRating(String censorBoardRating) {
        this.censorBoardRating = censorBoardRating;
    }

    @JsonProperty("critics_rating")
    public Double getCriticsRating() {
        return criticsRating;
    }

    @JsonProperty("critics_rating")
    public void setCriticsRating(Double criticsRating) {
        this.criticsRating = criticsRating;
    }

    @JsonProperty("status")
    public String getStatus() {
        return status;
    }

    @JsonProperty("status")
    public void setStatus(String status) {
        this.status = status;
    }

    @JsonProperty("artists")
    public List<Artist> getArtists() {
        return artists;
    }

    @JsonProperty("artists")
    public void setArtists(List<Artist> artists) {
        this.artists = artists;
    }

}
