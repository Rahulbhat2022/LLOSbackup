

***

## Newton's Method for Nonlinear Equations: A Simple Guide

**[[Newton's Method for Nonlinear Equations]]**, also known as the Newton-Raphson method, is a technique for finding the "roots" of a function—that is, finding the input value $x$ where the function's output is zero ($f(x)=0$).

The core idea is to start with a guess, draw a tangent line to the function at that point, and see where that tangent line crosses the x-axis. This crossing point becomes your new, better guess. You repeat this process, and each new tangent line gets you closer and closer to the actual root.

### The Key Difference: Root-Finding vs. Minimization

It's crucial to understand how this differs from **[[Newton's Method for Minimization]]**:

*   **Goal of This Method (Root-Finding):** Find the point $x$ where the **function's value is zero**. We are solving the equation $f(x) = 0$.
*   **Goal of Minimization Method:** Find the point $x$ where the **function's slope is zero**. We are solving the equation $\nabla f(x) = 0$ to find a valley floor.

Essentially, the minimization method is just this root-finding method applied to the *derivative* of a function.

### The Recipe (Algorithm Steps)

1.  **Step 1: Start with a Guess (Initialization)**
    *   Pick an initial starting point, $x_0$, that you think is close to the root.

2.  **Step 2: Find the Tangent Line's Root**
    *   At your current point $x_k$, calculate the function's value $f(x_k)$ and its first derivative, $f'(x_k)$ (or the Jacobian matrix in multiple dimensions).
    *   Use these to find the step that will take you to where the tangent line hits zero.

3.  **Step 3: Take the Step (Update)**
    *   Calculate the new, improved guess using the formula.

4.  **Step 4: Repeat**
    *   Keep repeating steps 2 and 3. The guesses will rapidly get closer to the true root until you achieve **[[Convergence]]**.

### The Core Formula

For a single-variable function, the update formula is:

$x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}$

For a system of equations with multiple variables, the formula uses the Jacobian matrix (J), which is the multi-dimensional version of the first derivative:

$x_{k+1} = x_k - [J(x_k)]^{-1} F(x_k)$

Where:
*   $x_k$ is the current guess.
*   $F(x_k)$ is the vector of function values at that point.
*   $[J(x_k)]^{-1}$ is the inverse of the Jacobian matrix.

### A Simple Example: Finding the Square Root of 2

Let's find the value of $\sqrt{2}$. This is the same as finding the root of the equation $x^2 - 2 = 0$. So, our function is $f(x) = x^2 - 2$.

1.  **Start**: Let's guess that the answer is $x_0 = 1$.

2.  **Calculate Derivatives**:
    *   The function is $f(x) = x^2 - 2$.
    *   The first derivative is $f'(x) = 2x$.

3.  **First Step (k=0)**:
    *   Current guess: $x_0 = 1$.
    *   Function value: $f(1) = 1^2 - 2 = -1$.
    *   Derivative value: $f'(1) = 2(1) = 2$.
    *   **New Guess ($x_1$)**:
        $x_1 = 1 - \frac{-1}{2} = 1 + 0.5 = 1.5$

4.  **Second Step (k=1)**:
    *   Current guess: $x_1 = 1.5$.
    *   Function value: $f(1.5) = (1.5)^2 - 2 = 2.25 - 2 = 0.25$.
    *   Derivative value: $f'(1.5) = 2(1.5) = 3$.
    *   **New Guess ($x_2$)**:
        $x_2 = 1.5 - \frac{0.25}{3} \approx 1.5 - 0.0833 = 1.4167$

The actual value of $\sqrt{2}$ is approximately 1.4142. After just two steps, our guess is already extremely close! This demonstrates the method's very fast convergence.