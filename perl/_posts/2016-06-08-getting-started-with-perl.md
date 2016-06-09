---

layout: post
title:  Getting Started With Perl
date:   2016-06-08 18:05:00
teaser: Day 1 using Perl Programming Lanuage
image: https://s3.amazonaws.com/wulf.io/img/2016-06-08-getting-started-with-perl.png
author: benjamin_w_wulf
comments: true
shortUrl:

---


Getting Started With Perl
=========================

This blog entry makes the assumption that you already have perl installed. If you answered NULL, simply visit:

<a href="http://learn.perl.org/installing/">http://learn.perl.org/installing</a>

Okay! Now that you have endured that, lets familiarize ourselves with the help document of Perl.

Perldoc
-------

Try out these commands:

```
perldoc List::Util
```

```
perldoc perltoc
```

```
perldoc Moose::Manual
```

Perhaps you noticed that ```perdoc Moose::Manual``` errors out. To fix this we utilize the cpan command, short for Comprehensive Perl Archive Network. It is a module repository. Run ```cpan Moose::Manual``` to get a more extensive help documentation.

Perl is one of the best documented programming languages. See *perldoc perdoc and read through to see how usefull the help is in fact.

Use the -q option with a keyword to search the Perl FAQ.

The -f option shows the documentation for a bullentin Perl functions.

The -v option looks up a bulletin variable.

The -l option shows the path to the file containing the documentation.

The -m option displays the entire contents of the module, code and all, without any special formatting.
