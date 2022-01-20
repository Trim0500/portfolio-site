import React from 'react'

export default function TestDB() {
    require('dotenv').config();

    var faunadb = require('faunadb'),
    q = faunadb.query

    var client = new faunadb.Client({
        secret: process.env.REACT_APP_FAUNA_ADMIN_KEY,
        domain: 'db.fauna.com',
        port: 443,
        scheme: 'https',
    })

    var CreateP = client.query(
        q.Create(
            q.Collection('test'),
            {data: {testField: 'testValue'}}
        )
    )

    CreateP.then(function(response) {
        console.log(response.ref);
    })
        .catch((err) => console.error(err));

    return(
        <h1>Let's see if this worked...</h1>
    )
}