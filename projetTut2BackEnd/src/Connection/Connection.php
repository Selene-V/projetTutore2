<?php

namespace App\Connection;

use Elasticsearch\Client;
use Elasticsearch\ClientBuilder;

class Connection
{
    private Client $client;

    public function __construct()
    {
        $this->client = ClientBuilder::create()
            ->setHosts(['localhost:9200'])
            ->build();
    }

    public function getClient(): Client
    {
        return $this->client;
    }
}
