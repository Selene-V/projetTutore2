const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })
const fs = require('fs');


const csv = require('fast-csv');

function createBDD(file){
    const stream = fs.createReadStream('CSV/'+file+'.csv')
        .pipe(csv.parse({ headers: true }))
        .on('data', function (data){
            // Let's start by indexing some data
            client.index({
                index: file,
                body: {
                    data
                }
            });
        })
        .on('end', function (){
            console.log('Read finish');
    });

}

function init(){
    createBDD('steam');
    createBDD('steam_description_data');
    createBDD('steam_media_data');
    createBDD('steam_requirements_data');
    createBDD('steam_support_info');
    createBDD('steamspy_tag_data');
}

init();
