import type { InterviewQuestion } from "../types";

export const practicalQuestions: InterviewQuestion[] = [
  {
    question: "Reverse a string",
    ans: {
      text: "Reverse the characters of a string. Common approaches: split/reverse/join, a loop, or two pointers.",
      script:
        "function reverseString(str) {\n  return str.split('').reverse().join('');\n}\n\n// Two-pointer approach\nfunction reverseStringTwoPointer(str) {\n  const arr = str.split('');\n  let left = 0;\n  let right = arr.length - 1;\n  while (left < right) {\n    [arr[left], arr[right]] = [arr[right], arr[left]];\n    left++;\n    right--;\n  }\n  return arr.join('');\n}\n\nconsole.log(reverseString('hello')); // olleh",
    },
  },
  {
    question: "Check if a string is a palindrome",
    ans: {
      text: "A palindrome reads the same forwards and backwards. Ignore case and non-alphanumeric characters when required.",
      script:
        "function isPalindrome(str) {\n  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleaned === cleaned.split('').reverse().join('');\n}\n\n// Two-pointer approach\nfunction isPalindromeTwoPointer(str) {\n  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  let left = 0;\n  let right = cleaned.length - 1;\n  while (left < right) {\n    if (cleaned[left] !== cleaned[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}\n\nconsole.log(isPalindrome('A man, a plan, a canal: Panama')); // true",
    },
  },
  {
    question: "Factorial of a number",
    ans: {
      text: "Factorial of n (n!) is the product of all positive integers up to n. Can be solved with a loop or recursion.",
      script:
        "function factorial(n) {\n  if (n < 0) return undefined;\n  let result = 1;\n  for (let i = 2; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}\n\n// Recursive\nfunction factorialRecursive(n) {\n  if (n < 0) return undefined;\n  if (n <= 1) return 1;\n  return n * factorialRecursive(n - 1);\n}\n\nconsole.log(factorial(5)); // 120",
    },
  },
  {
    question: "Fibonacci sequence",
    ans: {
      text: "Each number is the sum of the two preceding ones (0, 1, 1, 2, 3, 5, ...). Prefer an iterative solution for interviews to avoid stack overflow.",
      script:
        "function fibonacci(n) {\n  if (n <= 0) return 0;\n  if (n === 1) return 1;\n  let a = 0;\n  let b = 1;\n  for (let i = 2; i <= n; i++) {\n    const next = a + b;\n    a = b;\n    b = next;\n  }\n  return b;\n}\n\n// Return first n numbers\nfunction fibonacciSeries(n) {\n  const series = [];\n  let a = 0;\n  let b = 1;\n  for (let i = 0; i < n; i++) {\n    series.push(a);\n    [a, b] = [b, a + b];\n  }\n  return series;\n}\n\nconsole.log(fibonacci(7)); // 13\nconsole.log(fibonacciSeries(7)); // [0, 1, 1, 2, 3, 5, 8]",
    },
  },
  {
    question: "FizzBuzz",
    ans: {
      text: "Print numbers from 1 to n. Multiples of 3 → 'Fizz', of 5 → 'Buzz', of both → 'FizzBuzz'.",
      script:
        "function fizzBuzz(n) {\n  const result = [];\n  for (let i = 1; i <= n; i++) {\n    if (i % 15 === 0) result.push('FizzBuzz');\n    else if (i % 3 === 0) result.push('Fizz');\n    else if (i % 5 === 0) result.push('Buzz');\n    else result.push(String(i));\n  }\n  return result;\n}\n\nconsole.log(fizzBuzz(15));\n// ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']",
    },
  },
  {
    question: "Find the maximum and minimum in an array",
    ans: {
      text: "Scan the array once, tracking the current max and min. Avoid sorting unless required.",
      script:
        "function findMinMax(arr) {\n  if (!arr.length) return null;\n  let min = arr[0];\n  let max = arr[0];\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] < min) min = arr[i];\n    if (arr[i] > max) max = arr[i];\n  }\n  return { min, max };\n}\n\nconsole.log(findMinMax([3, 1, 8, 4, 2])); // { min: 1, max: 8 }",
    },
  },
  {
    question: "Remove duplicates from an array",
    ans: {
      text: "Use a Set for uniqueness, or track seen values with an object/Map while preserving order.",
      script:
        "function removeDuplicates(arr) {\n  return [...new Set(arr)];\n}\n\n// Without Set\nfunction removeDuplicatesManual(arr) {\n  const seen = {};\n  const result = [];\n  for (const item of arr) {\n    if (!seen[item]) {\n      seen[item] = true;\n      result.push(item);\n    }\n  }\n  return result;\n}\n\nconsole.log(removeDuplicates([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]",
    },
  },
  {
    question: "Check if two strings are anagrams",
    ans: {
      text: "Anagrams contain the same characters with the same frequencies (e.g. 'listen' and 'silent').",
      script:
        "function areAnagrams(str1, str2) {\n  const normalize = (s) =>\n    s.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');\n  return normalize(str1) === normalize(str2);\n}\n\n// Frequency map approach\nfunction areAnagramsCount(str1, str2) {\n  const a = str1.toLowerCase().replace(/[^a-z]/g, '');\n  const b = str2.toLowerCase().replace(/[^a-z]/g, '');\n  if (a.length !== b.length) return false;\n  const count = {};\n  for (const ch of a) count[ch] = (count[ch] || 0) + 1;\n  for (const ch of b) {\n    if (!count[ch]) return false;\n    count[ch]--;\n  }\n  return true;\n}\n\nconsole.log(areAnagrams('listen', 'silent')); // true",
    },
  },
  {
    question: "Count vowels in a string",
    ans: {
      text: "Count occurrences of a, e, i, o, u (case-insensitive).",
      script:
        "function countVowels(str) {\n  const matches = str.match(/[aeiou]/gi);\n  return matches ? matches.length : 0;\n}\n\n// Loop approach\nfunction countVowelsLoop(str) {\n  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);\n  let count = 0;\n  for (const ch of str.toLowerCase()) {\n    if (vowels.has(ch)) count++;\n  }\n  return count;\n}\n\nconsole.log(countVowels('Interview')); // 4",
    },
  },
  {
    question: "Find the first non-repeating character",
    ans: {
      text: "Build a frequency map, then return the first character with count 1.",
      script:
        "function firstNonRepeatingChar(str) {\n  const count = {};\n  for (const ch of str) {\n    count[ch] = (count[ch] || 0) + 1;\n  }\n  for (const ch of str) {\n    if (count[ch] === 1) return ch;\n  }\n  return null;\n}\n\nconsole.log(firstNonRepeatingChar('aabbcde')); // c",
    },
  },
  {
    question: "Flatten a nested array",
    ans: {
      text: "Convert a multi-level nested array into a single flat array. Use recursion or Array.flat().",
      script:
        "function flatten(arr) {\n  const result = [];\n  for (const item of arr) {\n    if (Array.isArray(item)) {\n      result.push(...flatten(item));\n    } else {\n      result.push(item);\n    }\n  }\n  return result;\n}\n\n// Built-in\nfunction flattenBuiltIn(arr) {\n  return arr.flat(Infinity);\n}\n\nconsole.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]",
    },
  },
  {
    question: "Two Sum — find indices that add up to a target",
    ans: {
      text: "Given an array of numbers and a target, return indices of two numbers that sum to the target. Use a hash map for O(n) time.",
      script:
        "function twoSum(nums, target) {\n  const map = {};\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map[complement] !== undefined) {\n      return [map[complement], i];\n    }\n    map[nums[i]] = i;\n  }\n  return null;\n}\n\nconsole.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]",
    },
  },
  {
    question: "Check if a number is prime",
    ans: {
      text: "A prime number is greater than 1 and divisible only by 1 and itself. Check divisibility up to sqrt(n).",
      script:
        "function isPrime(n) {\n  if (n <= 1) return false;\n  if (n <= 3) return true;\n  if (n % 2 === 0 || n % 3 === 0) return false;\n  for (let i = 5; i * i <= n; i += 6) {\n    if (n % i === 0 || n % (i + 2) === 0) return false;\n  }\n  return true;\n}\n\nconsole.log(isPrime(17)); // true\nconsole.log(isPrime(18)); // false",
    },
  },
  {
    question: "Capitalize the first letter of each word",
    ans: {
      text: "Split on spaces, capitalize the first character of each word, then join.",
      script:
        "function capitalizeWords(str) {\n  return str\n    .split(' ')\n    .map((word) =>\n      word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ''\n    )\n    .join(' ');\n}\n\nconsole.log(capitalizeWords('hello world')); // Hello World",
    },
  },
  {
    question: "Find the missing number in a sequence",
    ans: {
      text: "Given numbers from 1 to n with one missing, find it using the sum formula or XOR.",
      script:
        "function findMissingNumber(arr, n) {\n  const expectedSum = (n * (n + 1)) / 2;\n  const actualSum = arr.reduce((sum, num) => sum + num, 0);\n  return expectedSum - actualSum;\n}\n\nconsole.log(findMissingNumber([1, 2, 4, 5], 5)); // 3",
    },
  },
  {
    question: "Reverse words in a sentence",
    ans: {
      text: "Reverse the order of words while keeping each word intact (e.g. 'hello world' → 'world hello').",
      script:
        "function reverseWords(str) {\n  return str.trim().split(/\\s+/).reverse().join(' ');\n}\n\nconsole.log(reverseWords('  hello   world  ')); // world hello",
    },
  },
  {
    question: "Find the largest word in a string",
    ans: {
      text: "Split the string into words and track the longest one.",
      script:
        "function largestWord(str) {\n  const words = str.trim().split(/\\s+/);\n  let largest = '';\n  for (const word of words) {\n    if (word.length > largest.length) largest = word;\n  }\n  return largest;\n}\n\nconsole.log(largestWord('I love JavaScript interviews')); // JavaScript",
    },
  },
  {
    question: "Check if parentheses are balanced",
    ans: {
      text: "Use a stack. Push opening brackets; for closing brackets, pop and match. The stack must be empty at the end.",
      script:
        "function isBalanced(str) {\n  const stack = [];\n  const pairs = { ')': '(', ']': '[', '}': '{' };\n  for (const ch of str) {\n    if (ch === '(' || ch === '[' || ch === '{') {\n      stack.push(ch);\n    } else if (ch === ')' || ch === ']' || ch === '}') {\n      if (stack.pop() !== pairs[ch]) return false;\n    }\n  }\n  return stack.length === 0;\n}\n\nconsole.log(isBalanced('{[()]}')); // true\nconsole.log(isBalanced('{[(])}')); // false",
    },
  },
  {
    question: "Debounce a function",
    ans: {
      text: "Debounce delays invoking a function until after a wait period has passed since the last call. Common for search inputs.",
      script:
        "function debounce(fn, delay) {\n  let timer;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n\nconst onSearch = debounce((query) => {\n  console.log('Searching:', query);\n}, 300);",
    },
  },
  {
    question: "Throttle a function",
    ans: {
      text: "Throttle ensures a function runs at most once every given interval. Common for scroll and resize handlers.",
      script:
        "function throttle(fn, limit) {\n  let lastCall = 0;\n  return function (...args) {\n    const now = Date.now();\n    if (now - lastCall >= limit) {\n      lastCall = now;\n      fn.apply(this, args);\n    }\n  };\n}\n\nconst onScroll = throttle(() => {\n  console.log('Scroll handled');\n}, 200);",
    },
  },
];
