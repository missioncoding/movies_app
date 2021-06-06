
package com.upgrad.movieapp.data;

import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "id",
    "first_name",
    "last_name",
    "role_type",
    "profile_description",
    "profile_url",
    "wiki_url"
})
@Generated("jsonschema2pojo")
public class Artist {

    @JsonProperty("id")
    private String id;
    @JsonProperty("first_name")
    private String firstName;
    @JsonProperty("last_name")
    private String lastName;
    @JsonProperty("role_type")
    private String roleType;
    @JsonProperty("profile_description")
    private String profileDescription;
    @JsonProperty("profile_url")
    private String profileUrl;
    @JsonProperty("wiki_url")
    private String wikiUrl;

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @JsonProperty("id")
    public void setId(String id) {
        this.id = id;
    }

    @JsonProperty("first_name")
    public String getFirstName() {
        return firstName;
    }

    @JsonProperty("first_name")
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @JsonProperty("last_name")
    public String getLastName() {
        return lastName;
    }

    @JsonProperty("last_name")
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @JsonProperty("role_type")
    public String getRoleType() {
        return roleType;
    }

    @JsonProperty("role_type")
    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }

    @JsonProperty("profile_description")
    public String getProfileDescription() {
        return profileDescription;
    }

    @JsonProperty("profile_description")
    public void setProfileDescription(String profileDescription) {
        this.profileDescription = profileDescription;
    }

    @JsonProperty("profile_url")
    public String getProfileUrl() {
        return profileUrl;
    }

    @JsonProperty("profile_url")
    public void setProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
    }

    @JsonProperty("wiki_url")
    public String getWikiUrl() {
        return wikiUrl;
    }

    @JsonProperty("wiki_url")
    public void setWikiUrl(String wikiUrl) {
        this.wikiUrl = wikiUrl;
    }

}
