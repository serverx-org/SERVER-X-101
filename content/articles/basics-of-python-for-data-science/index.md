---
title: Basics of Python for Data Science
description: Fundamentals of Python for Data Science
author: Gowrav Sai Veeramallu
lastmod: 2024-04-09
github: https://github.com/SERVER-X-101/SERVER-X-ARCHIVES/blob/main/Gowrav/articles/Python_for_DataScience/index.md
related: 
  - data-and-data-science
tags:
  - data-science
  - basics
meta-tags:
  - Python "Print" function
  - Strings
  - The format method
  - Variable naming
  - Operators and Expressions
  - Evaluation Order
---

This article helps you learn the fundamental and basic concepts of Python required for data science.

## Python "Print()" function

In Python, to print any function we use the "print" keyword. For example: `print("hello world")`. The output will be "hello world". There are some restrictions in the print function. In general, we use the "+" operator for the addition of two or more numbers, but in Python, we use the "+" operator for combining two or more strings. In Python, the print function "+" is called concatenation. For example: `print(2+3)` Output: `2+3`. We can also print a string or any value by assigning it to a variable. For example:

{{< file "python" "example.py" >}}

```python
hello = 'tim'
print(hello)
```

{{< tabgroup >}}

{{< tab icon="terminal" name="terminal">}}

<div class="highlight">
<pre class="chroma">
<span style="color: #ff00ff; user-select: none;">>> </span>tim
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

## Comments in Python

In Python, we usually comment sentences by using the "#" character. For example:

{{< file "python" "example.py" >}}

```python
"""multiline comments
1. Add two number
2. Print their result
"""

a = 2 + 2
print(b) # output 4
```

## Literal Constants

An example of a literal constant is a number like 5, 1.23, or a string like 'This is a string' or "It's a string!". It is called a literal because it is literal - you use its value literally. The number 2 always represents itself and nothing else - it is a constant because its value cannot be changed. Hence, all these are referred to as literal constants.

## Numbers

In Python, there are mainly two types of numbers: integers and floats. An example of an integer is 1, 2, 100, etc. Examples of floating-point numbers (or floats for short) are 3.23 and 52.3E-4. The E notation indicates powers of 10. In this case, 52.3E-4 means 52.3 * 10^-4.

**NOTE:** IN PYTHON, THERE IS NO SEPARATE LONG TYPE; INTEGER CAN BE OF ANY SIZE.

## Strings

A string is a sequence of characters. You can mention a string in single, double, or triple quotes. 'hello' or "hello" or '''hello'''. Using triple quotes indicates multiline strings.

Strings are immutable, i.e., once you have created a string, you cannot change it.

## The format method

When we want to construct a string in a specific format we use the "format" method. For example:

{{< file "python" "example.py" >}}

```python
age = 20
name = 'Swaroop'
print('{0} was {1} years old when he wrote this book'.format(name, age))
print('Why is {0} playing with that python?'.format(name))
```

{{< tabgroup >}}

{{< tab icon="terminal" name="terminal">}}

<div class="highlight">
<pre class="chroma">
<span style="color: #ff00ff; user-select: none;">>> </span>Swaroop was 20 years old when he wrote this book
<span style="color: #ff00ff; user-select: none;">>> </span>Why is Swaroop playing with that python?
</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

## Variable naming

- There are some rules you have to follow for naming identifiers:
  - The first character of the identifier must be a letter of the alphabet (uppercase ASCII or lowercase ASCII or Unicode character) or an underscore (_).
  - The rest of the identifier name can consist of letters (uppercase ASCII or lowercase ASCII or Unicode character), underscores (_) or digits (0-9).
  - Identifier names are case-sensitive. For example, myname and myName are not the same. Note the lowercase n in the former and the uppercase N in the latter.
  - Examples of valid identifier names are i, name_2_3. Examples of invalid identifier names are 2things, this is spaced out, my-name, and >a1b2_c3.

## Input of a variable

In C/C++, for taking input we use `printf("")` or `cin` commands. But in Python, we use `input()` keyword. For example:

{{< file "python" "example.py" >}}

```python
name = int(input())
```

This is the input format for an integer type data. Similarly, we can also take input datatype for other datatypes.

We can also change the input format for being more precise.

{{< file "python" "example.py" >}}

```python
name = int(input("Enter the input number: "))
```

Output: `Enter the input number:`

{{< tabgroup >}}

{{< tab icon="terminal" name="terminal">}}

<div class="highlight">
<pre class="chroma">
<span style="color: #ff00ff; user-select: none;">>> </span>Enter the input number:

</pre>
</div>

{{< /tab >}}

{{< /tabgroup >}}

## Operators and Expressions

### Operators

Here is a quick overview of the available operators arranged according to their precedence order:

| Operator | Description                                           | Example        | Result    |
| :------: | ----------------------------------------------------- | -------------- | --------- |
|    **    | Raises x to the power of y                            | 3 ** 4         | 81        |
|    *     | Multiplies the two numbers or repeats the string      | 2 * 3          | 6         |
|    /     | Divides x by y                                        | 13 / 3         | 4.3333... |
|    //    | Divides x by y and rounds down to the nearest integer | 13 // 3        | 4         |
|    %     | Returns the remainder of the division                 | 13 % 3         | 1         |
|    +     | Adds two objects                                      | 3 + 5          | 8         |
|    -     | Subtracts one number from the other                   | 50 - 24        | 26        |
|    <<    | Shifts the bits of the number to the left             | 2 << 2         | 8         |
|    >>    | Shifts the bits of the number to the right            | 11 >> 1        | 5         |
|    &     | Bitwise AND of the numbers                            | 5 & 3          | 1         |
|    ^     | Bitwise XOR of the numbers                            | 5 ^ 3          | 6         |
|    \|    | Bitwise OR of the numbers                             | 5 \| 3         | 7         |
|    <     | Checks if x is less than y                            | 5 < 3          | False     |
|    <=    | Checks if x is less than or equal to y                | 3 <= 6         | True      |
|    >     | Checks if x is greater than y                         | 5 > 3          | True      |
|    >=    | Checks if x is greater than or equal to y             | 4 >= 3         | True      |
|    ==    | Compares if the objects are equal                     | 2 == 2         | True      |
|    !=    | Compares if the objects are not equal                 | 2 != 3         | True      |
|   not    | Boolean NOT                                           | not True       | False     |
|   and    | Boolean AND                                           | True and False | False     |
|    or    | Boolean OR                                            | True or False  | True      |

These examples demonstrate the usage and behavior of each operator in Python.

### Evaluation Order

When you have a set of operations in a single statement, which operation will you choose first to do? For example: `2 + 3 * 5 + (5 - 3) / 2`

There is a sequence for the operations to be done.

| Operator                                     | Description                                                |
| -------------------------------------------- | ---------------------------------------------------------- |
| lambda                                       | Lambda Expression                                          |
| if - else                                    | Conditional expression                                     |
| or                                           | Boolean OR                                                 |
| and                                          | Boolean AND                                                |
| not x                                        | Boolean NOT                                                |
| in, not in, is, is not, <, <=, >, >=, !=, == | Comparisons, including membership tests and identity tests |
| \|                                           | Bitwise OR                                                 |
| ^                                            | Bitwise XOR                                                |
| &                                            | Bitwise AND                                                |
| <<, >>                                       | Shifts                                                     |
| +, -                                         | Addition and subtraction                                   |
| *, /, //, %                                  | Multiplication, Division, Floor Division, and Remainder    |
| +x, -x, ~x                                   | Positive, Negative, bitwise NOT                            |
| **                                           | Exponentiation                                             |

In the next article, we will learn about control flow statements, functions, and modules.

For resources on how to understand and work with Python:

- [**YouTube: Python Programming Tutorial**](https://www.youtube.com/watch?v=VchuKL44s6E&t=501s)
- [**GeeksforGeeks: Python Exercises, Practice, Questions, and Solutions**](https://www.geeksforgeeks.org/python-exercises-practice-questions-and-solutions/)
- [**W3Resource: Python Exercises**](https://www.w3resource.com/python-exercises/)
