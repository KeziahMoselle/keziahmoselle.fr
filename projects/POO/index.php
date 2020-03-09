  <!DOCTYPE html>
    <html>
      <head>
        <title>POO</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="css/style.css" media="screen,projection"/>
      </head>

      <body>
        <header class="row">
          <nav>
              <div class="nav-wrapper blue">
                <div class="col s10 offset-s1">
                  <a href="#" class="brand-logo">POO</a>
                  <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#">Link</a></li>
                  </ul>
                </div>
              </div>
            </nav>
        </header>

        <main class="center">

          <?php
            require 'personnage.php';

            $merlin = new personnage("Merlin");
            $merlin->heal();
            echo 'Nom : '.$merlin->nom.'<br/>';
            echo 'Vie : '.$merlin->vie.'<br/>';
            echo 'Atk : '.$merlin->atk.'<br/>';
            $merlin->mort();
            echo '<br/>';
            echo '<br/>';

            $harry = new personnage("Harry");
            $harry->hurt();
            echo 'Nom : '.$harry->nom.'<br/>';
            echo 'Vie : '.$harry->vie.'<br/>';
            echo 'Atk : '.$harry->atk.'<br/>';
            $harry->mort();
          ?>

        </main>

        <footer>

        </footer>


        <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="js/materialize.min.js"></script>
      </body>
    </html>
