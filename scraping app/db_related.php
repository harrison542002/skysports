<?php

/**
 * This file is for db connection and preparation of statements for insertion.
 * Note: require to enter db credentials
 */

$servername = "";
$username = "";
$password = "";
$db_name = "";

$conn = new mysqli($servername, $username, $password, $db_name);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$team = [
  "team_name" => "",
  "played" => 0,
  "won" => 0,
  "draw" => 0,
  "lost" => 0,
  "goals_for" => 0,
  "goals_against" => 0,
  "goals_diff" => 0,
  "points" => 0,
  "detail_url" => '',
  "league_id" => 0
];

$league = [
  "league_name" => "",
  "league_logo" => "",
  "season" => "",
  "slug" => ""
];

$insert_stmt_for_league = $conn->prepare("INSERT INTO league (league_name,league_logo,season,slug) VALUES (?,?,?,?)");
$insert_stmt_for_league->bind_param("ssss", $league["league_name"], $league["league_logo"], $league["season"], $league["slug"]);

$insert_stmt_for_standing = $conn->prepare("INSERT INTO standing (team_name,played,won,draw,lost,goals_for,goals_against,goals_diff,points, detail_url, league_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)");
$insert_stmt_for_standing->bind_param("sddddddddsd", $team["team_name"], $team["played"], $team["won"], $team["draw"], $team["lost"], $team["goals_for"], $team["goals_against"], $team["goals_diff"], $team["points"], $team["detail_url"], $team["league_id"]);
