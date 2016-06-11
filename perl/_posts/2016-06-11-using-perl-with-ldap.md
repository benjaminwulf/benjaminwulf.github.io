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

Okay... day five learning perl. In short this this post is  the equiliant of riding a big wheel for a day, upgrading to a bicycle with training wheels and going right to riding a unicycle while juggling!

Unlike most languages that one spends most their time learning upfront writing long and mindless code riddled with syntax errors, Perl is not only intuitive, it is extremely powerful in concise scripts. While I have not taken the time to explain all the basic fundimentals yet, I will wet your pallet by talking the University of Michigan LDAP servers, short for Lightweight Directory Access Protocol. LDAP runs on a layer above TCP/IP and is a client-server mechanism for storing Direcotry data. 

For this example to work, you will need to run:

```cpan Net::LDAP```

It is also possible there are some dependencies, depending on your individual case. In that event grab those as well. We will be connecting to:

```ldap.itd.umich.edu```

Because <a href="https://en.wikipedia.org/wiki/Charles_Woodson">Charles Woodson</a> (NCAA national champian, Heisman recipiant, and Super Bowl XLV champian) a U of Michigan alumni, he is use in our example.

Via the command line type:

```touch learn_ldap.pl```

Then open up in Vim or your editor of choice. Type in this code block (FYI, even though copy/paste works...) Come on man! Vim will be covered in a future post.


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


###_And it should return:_


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
