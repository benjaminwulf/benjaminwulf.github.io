---

layout: post
title:  Using Perl with LDAP
date:   2016-06-11 05:56:00
teaser: 
image: https://s3.amazonaws.com/wulf.io/img/2016-06-11-perl_and_ldap.png
author: benjamin_w_wulf
comments: true
shortUrl:

---

Using Perl with LDAP
====================

Going for the Heisman with LDAP
-------------------------------

<img src="https://s3.amazonaws.com/wulf.io/img/2016-06-11-charles_c_woodson.jpg">

Day five learning Perl. In short this this post is the equivalent of riding a big wheel for a day, upgrading to a bicycle with training wheels, then riding a unicycle while juggling!

Usually learning a new lanuage upfront writing is long and mindless code riddled with syntax errors. While that is still bound to occur, Perl is intuitive, it is extremely powerful concise. Today I will wet your pallet by talking the University of Michigan LDAP server. Short for Lightweight Directory Access Protocol, LDAP runs on a layer above TCP/IP and is a client-server mechanism for storing Direcotry data. 

For this example to work, you will need to run:

```cpan Net::LDAP```

It is also possible there are some dependencies, depending on your individual case. In that event grab those as well.

```ldap.itd.umich.edu```

<a href="https://en.wikipedia.org/wiki/Charles_Woodson">Charles Woodson</a> (NCAA national champion, Heisman recipient, and Super Bowl XLV champion). He also is a U of Michigan alumni, so we will use him in our example.

<br>
Via the command name a file something like: ```touch learn_ldap.pl```

Open up in Vim or your editor of choice. Type in this code block (FYI, even though copy/paste works...) Come on man!

<pre class="prettyprint linenums language-perl">
#!/usr/bin/env perl
use strict;
use warnings;

use Net::LDAP;

my $server = "ldap.itd.umich.edu";
my $ldap = Net::LDAP->new( $server ) or die $@;
$ldap->bind;

my $result = $ldap->search(
  base => "",
  filter => "(&(cn=Charle*) (sn=Woodso*))",
);

die $result->error if $result->code;

printf "COUNT: %s\n", $result->count;

foreach my $entry ($result->entries) {
  $entry->dump;
}

print "========================================\n";

foreach my $entry ($result->entries) {
  printf "%s <%s>\n",
    $entry->get_value("displayName"),
      ($entry->get_value("mail") || '');
}

$ldap->unbind;
</pre>


*And it should return:*


<pre class="linenums">
------------------------------------------------------------------------
dn:uid=cwoodson,ou=People,dc=umich,dc=edu

      objectClass: umichPerson
                   top
                   person
                   inetOrgPerson
                   posixAccount
              uid: cwoodson
               sn: Woodson
               cn: Charles C Woodson
                   Charles Woodson
        uidNumber: 58473
        gidNumber: 10
    homeDirectory: /users/cwoodson
RealtimeBlockList: TRUE
      displayName: Charles C Woodson
          krbName: cwoodson@umich.edu
               ou: Alumni
\========================================
</pre>
