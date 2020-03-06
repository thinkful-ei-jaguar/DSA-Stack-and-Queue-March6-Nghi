class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// LIFO
class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    if (this.top === null) {
      this.top = new _Node(value, null);
      return;
    }
    const node = new _Node(value, this.top);
    this.top = node;
    return;
  }

  pop() {
    if (this.top === null) {
      return "Stack is empty";
    }
    const node = this.top; // to be removed
    this.top = node.next;
    return node.value;
  }
}

function peek(stack) {
  // allows you to look at the top of the stack without removing it
  return stack.top;
}

function isEmpty(stack) {
  // allows you to check if the stack is empty or not
  return stack.top === null ? true : false;
}

function display(stack) {
  // to display the stack - what is the 1st item in your stack?
  let node = stack.top;
  do {
    console.log(node);
    node = node.next;
  } while (node !== null);
}

function main() {
  let starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  // peek(starTrek);
  // isEmpty(starTrek);
  // display(starTrek);
  // To remove McCoy
  starTrek.pop();
  starTrek.pop();
  display(starTrek);
}

// main();

/**
 * #3 Check for palindromes using a stack
 * A palindrome is a word, phrase, or number that is spelled the same forward
 * and backward. For example, “dad” is a palindrome; “A man, a plan, a canal:
 * Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.
 */
function is_palindrome(s) {
  // Only characters allowed are alphanumeric - removes spaces and punctuations
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let palindrome = "";
  let stack = new Stack();
  for (let char of s) {
    stack.push(char);
  }
  for (let i = 0; i < s.length; i++) {
    palindrome += stack.pop();
  }
  return palindrome === s ? true : false;
}

console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

/**
 * #4 Matching parentheses in an expression
 * A stack can be used to ensure that an arithmetic expression has balanced parentheses.
 * Write a function that takes an arithmetic expression as an argument and returns true or false based on
 * matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing.
 * For example, you are missing a ( or missing a ")".
 *
 * For version 1, the parentheses you need to consider are ( and ).
 * Finding a close parenthesis without an open parenthesis is an error (report the location of the close);
 * reaching the end of the string while still "holding" an open parenthesis is also an error
 * (report the location of the open).
 */

function matchingParentheses(arithmetic) {
  // Check if expression has () and save () only
  const symbols = arithmetic.match(/[()]/g).join("");
  if (symbols.length === 0) {
    return "Arithmetic expression does not include parentheses";
  }
  let stack = new Stack();
  let matches = "";
  for (const element of symbols) {
    stack.push(element);
  }
  for (const element of symbols) {
    matches = stack.pop() + matches;
  }
  console.log(matches, symbols);
  return matches === symbols;
}
// console.log(matchingParentheses("2+5*(4+2)")); // true
console.log(matchingParentheses("2+5*(4+2])")); // Wrong symbol
console.log(matchingParentheses("2+5*(4+2")); // Missing closing )

/**
 * Extension exercise: Recognize 3 pairs of brackets: (), [], and {}.
 * These must be correctly nested; "([)]" is incorrect, and should report an error at the ),
 * stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar,
 * congratulations - you're beginning to write a simple language parser!
 */

function matchingSymbols(arithmetic) {}

// console.log(matchingSymbols("[2 + 5] * (4 + 2))");
// console.log(matchingSymbols("[2 + 5) * [4 + 2))");
// console.log(matchingSymbols("[2 + 5 * 4 + 2))");

/**
 * Extension extension exercise: Also recognize 2 types of quote character: "" and ''.
 * Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the
 * corresponding close quote.
 */

function matchingQuotesToo(arithmetic) {}
// console.log(matchingSymbols("[2 + 5] * (4 + 2))");
