# JavaScript Algorithmic Logic & Utility Collection

This repository contains a collection of JavaScript functions designed to solve various algorithmic puzzles and utility calculations. Each file addresses a specific logic-based problem using standard programming constructs like loops, conditionals, and mathematical operations.

## 🚀 Overview of Functions

| File | Function Name | Primary Purpose |
| :--- | :--- | :--- |
| `1.js` | `digit_gatekeeper` | Digit-based prime sum and divisibility filtering. |
| `2.js` | `roll_seed` | Numerical transformation and pattern verification. |
| `3.js` | `mirror_corridor` | Palindrome-based search with an offset. |
| `4.js` | `fare_calculator` | Conditional taxi/ride fare calculation. |
| `5.js` | `skipping_numbers` | Iterative summation with specific multiple exclusion. |
| `6.js` | `contest_judge` | Multi-parameter scoring and evaluation. |

---

## 🛠 Detailed Approach and Complexity Analysis

### 1. Digit Gatekeeper (`1.js`)
- **Approach:** 1. Iterates through the range $[l, r)$.
  2. Filters for numbers divisible by $k$.
  3. Checks every digit of candidates: if a zero is found, the number is rejected.
  4. Calculates the sum of digits and verifies if that sum is a prime number (using a $\sqrt{n}$ prime check).
- **Time Complexity:** $O((r - l) \cdot \sqrt{	ext{digit\_sum}})$. The outer loop is determined by the range size, while the inner logic depends on the number of digits and the prime test.
- **Space Complexity:** $O(1)$.

### 2. Roll Seed (`2.js`)
- **Approach:** 1. Performs a 3-iteration transformation based on the parity of the current value.
  2. Even transformation: $n = (n / 2) + seed$.
  3. Odd transformation: $n = (n * 3) - seed$.
  4. Finally, checks if the resulting number is between 100-999 and if the middle digit matches the initial `seed`.
- **Time Complexity:** $O(1)$ (constant number of steps).
- **Space Complexity:** $O(1)$.

### 3. Mirror Corridor (`3.js`)
- **Approach:** 1. Searches for an integer $x \in [0, 10000)$.
  2. Adds the offset $n$ to $x$ and checks divisibility by $k$.
  3. Reverses the digits of the result to check for a palindromic property (where `num == rev_num`).
- **Time Complexity:** $O(10000 \cdot D)$, where $D$ is the number of digits in the sum.
- **Space Complexity:** $O(1)$.

### 4. Fare Calculator (`4.js`)
- **Approach:** 1. Starts with a base fare + distance-based rate.
  2. Applies conditional surcharges for lateness ($> 15$ mins) and long distances ($> 10$).
  3. Modifies fare based on `seed` parity.
  4. Rounds the final result to the nearest upper multiple of 5.
- **Time Complexity:** $O(1)$.
- **Space Complexity:** $O(1)$.

### 5. Skipping Numbers (`5.js`)
- **Approach:** 1. Uses a `while` loop to build a cumulative sum until it reaches $N$.
  2. Increments a counter $m$ each iteration.
  3. Skips adding $m$ to the sum if $m$ is a multiple of $(seed + 2)$.
- **Time Complexity:** $O(\sqrt{N})$ roughly, as the sum grows quadratically.
- **Space Complexity:** $O(1)$.

### 6. Contest Judge (`6.js`)
- **Approach:** 1. Calculates a weighted score using coefficients ($3, 1, -2$).
  2. Enforces a floor of 0 for the score.
  3. Applies a total-input penalty if $(a + b + c) > 50$.
  4. Returns "PASS" for scores $\ge 60$.
- **Time Complexity:** $O(1)$.
- **Space Complexity:** $O(1)$.

---

## 💻 Environment & Usage

These functions are interactive and designed for a **browser-based environment**. They rely on:
- `prompt()`: To gather user input via dialog boxes.
- `alert()`: To display the final result or notification.

To use them, simply include the script tags in an HTML file or copy the code into a browser's Developer Tools Console.
