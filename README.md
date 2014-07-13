# journalTOCs [![Build Status](https://secure.travis-ci.org/ContentMine/node-journalTOCs.png?branch=master)](http://travis-ci.org/ContentMine/node-journalTOCs)

> JournalTOCs API client and cli

**NOTE** - this module is not supposed to work yet! The documentation below is a design spec.

This is a very simple wrapper for the [JournalTOCs API](http://www.journaltocs.ac.uk/develop.php) that exposes methods for searching journals by keyword or user and retrieving articles by keyword or journal ISSN.

## Installation

Install the module:

```sh
$ npm install --save journaltocs
```

Install with command-line interface:

```sh
$ npm install -g journaltocs
$ journaltocs --help
$ journaltocs --version
```

## Documentation

The _(Journals)_, _(Articles)_, and _(User)_ APIs are supported. The _(Institution)_ API is not supported (if you particularly want it, please open an issue requesting it).

## Examples

```js
// load the module
var JournalTOCs = require('journaltocs');
var email = "your@email.com"
var jt = new JournalTOCs(email);

// get a list of the journals you follow
jt.user(email);

// find journals matching a query
var bioinf_journals = jt.findJournals('bioinformatics');

// get ISSN of the first match
var issn = bioinf_journals[0].issn;

// get details of the journal
jt.journalDetails(issn);

// get latest articles from the journal
jt.journalArticles(issn);

// find articles by Julian Hibberd
jt.articles(['Julian', 'Hibberd']);

// find articles about snakes AND planes
jt.articles(['snake', 'plane']);

// find articles by authors from the University of Cambridge
jt.articles("University of Cambridge");
```

## Contributing

This is intended to be a lightweight client, so new features are unlikely to be accepted. However, bug reports are welcome.


## License

Copyright (c) 2014 Shuttleworth Foundation
Licensed under the MIT license.