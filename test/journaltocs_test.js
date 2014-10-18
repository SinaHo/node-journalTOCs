var JournalTOCs = require('../lib/journaltocs.js'),
    should = require('should');

describe("JournalTOCs", function() {

  describe("()", function() {

    it("should set the email address", function() {
      var email = "your@email.com";
      var jt = new JournalTOCs(email);
      jt.email.should.equal(email);
    });

  });

describe(".findJournals()", function() {

  this.timeout(20000);

  it("should return an event emmiter", function() {

  });

  it("should fetch matching journals", function(done) {
    var email = "richardsmith404@gmail.com";
    var jt = new JournalTOCs(email);

    // here we search for 'bioinformatics', and we expect the
    // journal Bioinformatics (http://bioinformatics.oxfordjournals.org/)
    // to be in the results.
    var fetcher = jt.findJournals('bioinformatics');

    fetcher.on('result', function(result) {
      var bioinf_journals = result;
      var bioinf_issn = "1460-2059";
      var result_issns = bioinf_journals.map(function(x) { x['prism:issn'] });
      result_issns.indexOf(bioinf_issn).should.be.above(-1);
      done();
    });
  });

});

describe(".journalDetails()", function() {

  it("should get details of a journal", function() {
    var email = "richardsmith404@gmail.com";
    var jt = new JournalTOCs(email);

    // here we get the details of the journal Bioinformatics using its issn
    // and expect the title to be correct.
    var result = jt.journalDetails('1460-2059');
    result.should.have.property('title', 'Bioinformatics');
  });

});

describe(".journalArticles()", function() {

  it("should get a list of articles from a journal", function() {

  });

});

describe(".articles()", function() {

  it("should find articles matching a query", function() {

  });

});

describe(".user()", function() {

  it("should get a list of journals followed by a user", function() {

  });

});

});
