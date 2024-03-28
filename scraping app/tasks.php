<?php

/**
 * Primary functions for inserting data into db
 * **Require db connection file to be included beforehand**
 */

function get_standing($standing, $league_id)
{
  global $insert_stmt_for_standing;
  global $team;

  $team['team_name'] = $standing->children(1)->getAttribute('data-long-name');
  $team['played'] = (int) $standing->children(2)->text();
  $team['won'] = (int) $standing->children(3)->text();
  $team['draw'] = (int) $standing->children(4)->text();
  $team['lost'] = (int) $standing->children(5)->text();
  $team['goals_for'] = (int) $standing->children(6)->text();
  $team['goals_against'] = (int) $standing->children(7)->text();
  $team['goals_diff'] = (int) $standing->children(8)->text();
  $team['points'] = (int) $standing->children(9)->text();
  $team['detail_url'] =  $standing->children(1)->children(0)->getAttribute("href");
  $team['league_id'] = $league_id;
  $insert_stmt_for_standing->execute();
}

function get_football_standing_info($league_meta)
{
  global $league;
  global $insert_stmt_for_league;
  global $conn;

  $html = file_get_html($league_meta['info_link']);
  $standings = $html->find("tr.standing-table__row");
  $logo = $html->find(".promotion-panel__inner-wrap");

  array_shift($standings);

  $league['league_name'] = $league_meta['league_name'];
  $league['season'] = $league_meta['season'];
  $league['slug'] = $league_meta['slug'];
  $league['league_logo'] = count($logo) > 0 ? $logo[0]->getAttribute("href") : "";

  $insert_stmt_for_league->execute();
  $league_id = (int) $conn->insert_id;
  foreach ($standings as $standing) {
    get_standing($standing, $league_id);
  }
}

function collect_sport_information($meta_data)
{
  foreach ($meta_data as $league_meta) {
    get_football_standing_info($league_meta);
  }
}
