# JavaScript/Front-end Developer - Exercise 1

## Instructions

- Fork this project.
- Write tests.
- Don't use external libraries for the conversion.
- Commit the important milestones and not just the final result.

## Exercise description

Create an application that contains a web form, which has a numeric input field and a submit button.

When the user gives an arabic number, the system shows the english phrase of that number.

For example:
<pre>
7    == seven
42   == forty-two
2001 == two thousand and one
1999 == nineteen hundred and ninety-nine
17999 == seventeen thousand nine hundred and ninety-nine
</pre>

That's all.


# js-numerals

**A solution to js numerals, allows user to enter a number and outputs that number in words.**

## How It Works

You can input integars between 1~72 digits, I chose up to 72 digits because I fetched all the names of big number names from wikipedia. After `10**70` there was `10**100` directly, and the digits in between had no names.

You can also use decimals or negative numbers and the algorithm will figure it out.


## Why I coded it that way.

Most of the solution's algorithm works with the input as a string instead of a number, as JavaScript takes up to `10**21` and whatever is bigger is not displayed so I needed to use strings to be able to extract the name of the number exactly as it was typed.

There are numerous number of corner cases and invalid cases that is caused because of my approach of using strings, if I implemented this as just a number of maximum value of `10**19` this would have been much cleaner.

In most of the files I used `modules.export` and `exports` to export my functions to be tested through JEST.
I also created a JSON to add all of my test cases that contained cornenr cases like `-0.0`, very large numbers, invalid strings and more.

I did not pay much attention to design as much as I did to the code, I also could have created a ReactJS application and added testing to all of its components but the task stated that its just a form.


