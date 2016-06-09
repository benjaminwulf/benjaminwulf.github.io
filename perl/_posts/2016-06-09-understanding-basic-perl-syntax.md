---

layout: post
title:  Understanding basic Perl syntax
date:   2016-06-09 13:34:00
teaser: You installed Perl. Now what?
image: https://s3.amazonaws.com/wulf.io/img/2016-06-08-getting-started-with-perl.png
author: benjamin_w_wulf
comments: true
shortUrl:

---

Understanding basic Perl syntax
-------------------------------

You installed Perl. Now what?

Variables

```
my $scalar;
my @array;
my %hash
```

You can even declare multiple  variables of the same name with different types.

```
my ($same_name, @same_name, %same_name);
```

Although Perl will not be comfused, it is a poor practice. Using $, @, % are used for scalar, array, and hash variables respectively. Scalar is a term from linear algebra indicates only one of something exist. 

In accessesing an array (think of as a list for now) or hash (key and value). An operatoin known as slicing (uses @ symbol) access an array or hash. Even zero is an element. The = symbol is used to assign value.

```
my @hash_element = @has{ @keys };
my @array_element = @array[ @indexes ];
my %hash
@hash { @keys } = @values;
```

NAMESPACES
----------

Functions and variables can be grouped into unique namespaces. They can be joined together using double colons (::). ```Autodealer::Car``` and ```Autodealer::Car::Sold```

STRINGS
-------

Single quotes are exactly what they appear to be. The only exception is the backslack (\) or escape. Double quotes have more features.  

```my $tab       = "\t";``` 

```my $newline   = "\n";``` 

```my $carriage  = "\r";```

```my $formfeed  = "\f";```

```my $backspace = "\b";```

EMPTY LIST
----------

When () is on the right side of an assignment (=), this indicates an empty list.

```
my $count = () = get_golf_balls();
```

LIST
----

```
my @pars_in_golf_round = (1, 3, 9, 10, 11, 12, 18);
```

Or as targets of an assignment

```
my ($package, $filename, $line) = caller();
```

Or as an expression

```say golf_player(), ' => ' , golf_score();```

This is a range

```my @chars = 'a' .. 'z';```
```my @count = 13 .. 27;```

TERNARY CONDITIONAL OPERATOR
----------------------------

Evaluates conditional expression to one of two alternative

```my $time_suffix = after_noon($time)
                    ? 'afternoon'
                    : 'morning';```

equivalent to

```
my $time_suffix;
if (after_noon(time)) {
    $time_suffix = 'afternoon';
    }
else {
    $time_suffix = 'morning';
    }
```

The (?) and (:) separate the alternative.


