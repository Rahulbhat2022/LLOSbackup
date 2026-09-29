
***

## Quasi-Newton Methods: The Best of Both Worlds

**[[Quasi-Newton Methods]]** are a family of optimization algorithms that seek to capture the speed of [[Newton's Method for Minimization]] without its biggest drawback: the high computational cost.

Think of it this way:
*   **[[Steepest Descent]]** is like a hiker who only looks at the ground at their feet to find the steepest way down. It's simple, but can lead to a long, zig-zagging path.
*   **[[Newton's Method for Minimization]]** is like a skier who has a perfect satellite map of the entire mountain's curvature ([[Hessian]]). They can chart the fastest possible route, but getting that map is very expensive and time-consuming.
*   **[[Quasi-Newton Methods]]** are like a clever hiker who can't see the whole mountain but remembers the terrain they've just walked over. They use this memory of recent slope changes to build a rough, approximate map of the mountain's curvature, allowing them to pick a much better path than the simple hiker, without needing the expensive satellite map.

### The Key Difference: Exact vs. Approximate Curvature

The core idea that separates these methods is how they handle the function's curvature (the second derivative).

*   **[[Steepest Descent]]**: Ignores curvature completely. It only uses the [[Gradient]].
*   **[[Newton's Method for Minimization]]**: Uses the exact, true curvature by calculating the full [[Hessian]] matrix at every step.
*   **[[Quasi-Newton Methods]]**: **Approximates** the curvature. It uses a simpler matrix (often called the "B-matrix") that acts as a stand-in for the true [[Hessian]]. This matrix is updated at each step using only readily available information (the change in position and the change in the [[Gradient]]).

### The Recipe (Algorithm Steps)

The algorithm is very similar to Newton's method, but with one key difference.

1.  **Step 1: Start Somewhere (Initialization)**
    *   Pick an initial starting point, $x_0$.
    *   Initialize your Hessian approximation, $B_0$. A common choice is the identity matrix ($B_0 = I$).

2.  **Step 2: Find the Quasi-Newton Direction**
    *   At your current point $x_k$, calculate the [[Gradient]], $\nabla f(x_k)$.
    *   Solve the following equation to find the search direction $p_k$:
        $B_k p_k = -\nabla f(x_k)$

3.  **Step 3: Decide How Far to Walk (Find [[Step Length]])**
    *   Find a suitable **[[Step Length]]** $\alpha_k$ using a **[[Line Search]]** method.

4.  **Step 4: Take the Step (Update Position)**
    *   Calculate the new point: $x_{k+1} = x_k + \alpha_k p_k$.

5.  **Step 5: Update the Map (Update the B-matrix)**
    *   This is the crucial step. Use the information from the step you just took (the change in position, $s_k = x_{k+1} - x_k$, and the change in the gradient, $y_k = \nabla f(x_{k+1}) - \nabla f(x_k)$) to update your approximation matrix from $B_k$ to $B_{k+1}$.

6.  **Step 6: Repeat**
    *   Go back to Step 2 and repeat until **[[Convergence]]**.

### The Core Formula

The search direction is calculated using the B-matrix:

$p_k = -B_k^{-1} \nabla f(x_k)$

The "magic" is in the update formulas that turn $B_k$ into $B_{k+1}$. The most famous and effective of these are:

*   **[[BFGS]] (Broyden, Fletcher, Goldfarb, and Shanno)**: The most popular and generally most effective Quasi-Newton update formula.
*   **[[DFP]] (Davidon, Fletcher, and Powell)**: An older and generally less efficient method than BFGS.
*   **[[Symmetric Rank-one Update]]**: A simpler update that guarantees the **[[Secant Condition]]** but has some numerical stability issues.

### Why Use Quasi-Newton Methods?

*   **Pros**: They are the "go-to" method for many real-world optimization problems. They offer a fantastic balance, providing much faster [[Convergence]] than [[Steepest Descent]] while avoiding the extreme computational cost of calculating and inverting the [[Hessian]] required by [[Newton's Method for Minimization]].
*   **Cons**: They are more complex to implement than Steepest Descent. While their convergence is very fast (superlinear), it is technically not as fast as the quadratic convergence of a pure Newton's method (though in terms of total wall-clock time, they are often faster because each step is so much cheaper).