<?php

namespace App\Action;

use App\Connection\Connection;

$connection = new Connection();

var_dump($connection->getClient()->info());
