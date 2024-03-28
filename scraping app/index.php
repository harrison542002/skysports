<?php

/**
 * Main client for calling functions.
 */

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  include_once("./db_related.php");
  include_once("./simple_html_dom.php");
  include_once("./tasks.php");
  include_once("./data.php");

  collect_sport_information($meta_data);
  echo "DATA CREATION DONE!";
} else {
?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scrapping data</title>
  </head>

  <body>
    <form action="" method="post">
      <button type="submit">Click to Scrap Data!</button>
    </form>
  </body>

  </html>
<?php
}
