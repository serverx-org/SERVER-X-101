---
title: Master Number Theory
description: Guide to master the concepts of Number Theory
author: Geetika Nahak
lastmod: 2024-03-23T08:36:36-07:00
hidden: false
recommended:
    - dsa-mastery
tags:
    - cp
    - programming
    - numbertheory
---

<div class="box box-blue">
  
> A Powerful tool for competitive programmers
</div>

</br>

<p class="drop-cap">
Number Theory is a branch of Mathematics which deals with the properties and relationships of Positive Numbers and arithmetic operations based on them. Used for counting, numbers have captivated mathematicians throught the history. By mastering key concepts in the number theory, you will gain a significant edge in tackling the problems involving divisibility, primality, modular arithmetic and more.
</p>

## Fundamental concepts of Number Theory

- [**The Peono Axioms**](#the-peano-axioms)
- [**GCD and LCM**](#gcd-and-lcm)
- [**Prime Numbers**](#prime-numbers)
- [**Prime Factors**](https://www.geeksforgeeks.org/prime-factor/)
- [**Modular Arithmetic**](#modular-arithmetic)
- [**Integer Factorization**](#integer-factorization)
- [**Chinese Remainder Theorem**](#chinese-remainder-theorem)
- [**Euclidean Algorithm**](#euclidean-algorithm)

### The Peano Axioms

1. 0 ∈ N ; 0 is a natural number
2. If x ∈ N  ⇒ S(x) ∈ N - Every natural number has a successor, which is also a natural number.
3. If n ∈ N ; S(n) ≠ 0 - If  n ∈ N, then the successor of n cannot be  0.
4. ∀ a, b ∈ N;  if S(a) = S(b) ⇒  a = b - Different Natural numbers have different successors.
5. If 0 belongs to set V and V contains the successor of every number in S then, S contains every natural number.
This axiom is popularlu known as 'Principle of Induction

- Further Reading - [**Wikipedia**](https://en.wikipedia.org/wiki/Peano_axioms)

### GCD and LCM

#### Greatest Common Divisor (GCD)

GCD of two or more numbers is defined as the largest positive integer that divides them, exactly.

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<strong>ways to find gcd of two numbers</strong>
<li>Prime Factorization</li>
       <li>Divisions By prime</li>
       <li><a target="_blank" href="https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/">Euclidean Algorithm</a></li>
   </ul>
</div>

#### Least Common Factor (LCM)

LCM of two or more numbers is defined as the smallest positive integer that is divisible by each of the numbers.

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<strong>ways to find gcd of two numbers</strong>
<li>Prime Factorization</li>
       <li>Divisions By prime</li>
       <li><a target="_blank" href="https://www.geeksforgeeks.org/program-to-find-lcm-of-two-numbers/">Using the relation between GCD and LCM</a></li>
   </ul>

</div>

###### GCD and LCM are related by a very simple equation: LCM(a,b) *GCD(a,b) = a*b. This gives a very fast way to calculate LCM of two numbers

### Prime Numbers

A prime number is definde as a natural number greater than one that has no positive divisors other than 1 and itself.
Prime Numbers are central to number theory because of the funcamental theorem of Arithmetic which states that 1 is either prime itself or can be factorized as product of primes.
Some of the prime numbers include 2,3,5,7,11,13,.....etc.

- <b>Further reading</b>  :  [**Sieve of Eratosthenes**](https://server-x-101.github.io/articles/sieve-of-eratosthenes/)

### Prime Factors

A Prime Factor of a number is a factor of the number that is only divisible by 1 and itself.
Example : The Prime factors of 15 and 3 are 5 ( because 3*5 =15 and 2 and 5 are prime numbers)

- Further Reading - [**geeksforgeeks**](https://www.geeksforgeeks.org/prime-factor/)

### Modular Arithmetic

Modular Arithmetic deals with remainders after division. We write a ≡ b (mod n) to signify that a and b leave the same remainder when divided by n (the modulus).

#### Modular Addition

(a + b) mod m = ((a mod m) + (b mod m)) mod m

#### Modular Multiplication

(a x b) mod m = ((a mod m) x (b mod m)) mod m

#### Modular Division

(a / b) mod m is not equal to ((a mod m) / (b mod m)) mod m.

#### Modular Exponentiation (Fast Exponentiation)

Efficiently compute large powers under modulo<br>
a<sup>b</sup>mod m

#### Modular Inverse

The modular inverse of a mod m exists only if a and m are relatively prime i.e. gcd(a, m) = 1.

- Further Reading -  [**Quotient-Remainder Theorem**](https://www.geeksforgeeks.org/quotient-remainder-theorem/), [**Modular Arithmetic**](https://www.geeksforgeeks.org/quotient-remainder-theorem/)

### Integer Factorization

<div>
Integer Factorization, also known as prime factorization, is the process of breaking down a positive integer into a product of integers.
The most commonly used algorithm for the integer factorization is <b><a href="https://server-x-101.github.io/articles/sieve-of-eratosthenes/">Sieve of Eratosthenes</a></b>. It is the efficient way of to calculate the prime factorization of a number 'n'. For every integer x between 1 and n, we can maintain a single prime that divides k and ist highest power.

- Further Reading - [**Wikipedia**](https://en.wikipedia.org/wiki/Integer_factorization)

### Euclidean Algorithm

The Euclidean algorithm can be used to find the greatest common divisor of two positive integers. GCD of two numbers is the largest number that divides both of them. A simple way to find GCD is to factorize both numbers and multiply common prime factors.
<div>
<strong> Basic Euclidean Algorithm to find GCD</strong>
<ul>
<li>GCD of two numbers doesn't change even if we subtract smaller number from the larger number. So if we keep subtracting repeatedly the larger of two, we end up with GCD.</li><li>
Now instead of subtraction, if we divide the smaller number, the algorithm stops when we find the remainder 0.</li>
</div>

- Further Reading - [**Euclidean Algorithm**](https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/)

### Chinese Remainder Theorem

<div>The Chinese remainder Theorem (CRT) is used to solve a set of different congruent equations with one variable but different moduli which are relatively prime as shown below.
<br>x = a<sub>1</sub> mod m<sub>1</sub><br>x = a<sub>2</sub> mod m<sub>2</sub><br>...<br>x = a<sub>n</sub> mod m<sub>n</sub><br>
Where all pairs of m<sub>1</sub>, m<sub>2</sub>, ..., m<sub>n</sub> are coprimes.<br>
CRT states that the above equations have a unique solution of the moduli are relatively prime.<br>
x = (a<sub>1</sub>M<sub>1</sub>M<sub>1</sub><sup>-1</sup> + a<sub>2</sub>M<sub>2</sub>M<sub>2</sub><sup>-1</sup> + ... + a<sub>n</sub>M<sub>n</sub>M<sub>n</sub><sup>-1</sup>)mod M
<br>
</div>

- Further Reading - [**geeksforgeeks**](https://www.geeksforgeeks.org/introduction-to-chinese-remainder-theorem/)

## Practice Makes Perfect

The key to master number theory lies in consistent practice. Here are some resourses to help you hone your skills.

- Basic Number Theory-1 : [**Hackerearth**](https://www.hackerearth.com/practice/math/number-theory/basic-number-theory-1/practice-problems/)
- Basic Number Theory-2 : [**Hackerearth**](https://www.hackerearth.com/practice/math/number-theory/basic-number-theory-2/practice-problems/)
- Number Theory : [**Leetcode**](https://leetcode.com/tag/number-theory/)
- Number Theory : [**CodeForces**](https://codeforces.com/problemset?tags=number+theory)

By investing time and effort into learning number theory, you will equip yourself with a powerful arsenal of techniques to tackle wide range of problems in competitive programming.
