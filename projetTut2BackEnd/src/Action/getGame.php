<?php

namespace App\Action;

use App\Core\Connection\Connection;
use Elasticsearch\Client;

/**
 * @Route("/getGame/{id}", name="games")
 */
class getGame
{
    private Client $client;

    public function __construct(Connection $connection)
    {
        $this->client = $connection->getClient();
    }

    /**
     * @Route("", name="list")
     * @param int $id
     */
    public function game(int $id)
    {
        $params = [
            'index' => 'my_index',
            'id' => 'my_id'
        ];

        $result = $this->client->get($params);
        var_dump($result);
    }
}
