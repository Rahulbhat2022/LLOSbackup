
***

## Line Search: How Far Should We Step?

**[[Line Search]]** is not a standalone optimization algorithm, but rather a crucial sub-problem that must be solved at each step of most iterative optimization methods (like [[Steepest Descent]] or [[Quasi-Newton Methods]]).

Once an algorithm has determined a good **[[Search Direction]]** ($p_k$), the question becomes: how far should we travel in that direction? This "how far" is the **[[Step Length]]**, $\alpha_k$. A bad choice can ruin the algorithm's performance:
*   **Too big a step**: You might completely overshoot the minimum and end up at a worse point than where you started.
*   **Too small a step**: You will make progress, but it will be agonizingly slow, requiring thousands of tiny steps to get to the solution.

Line search is the procedure for finding a "good enough" step length $\alpha_k$ that balances these two extremes.

### The Key Difference: Perfect vs. Practical

The core trade-off in line search is between finding the absolute best step and finding a decent step quickly.

*   **[[Exact Line Search]]**: This is the "perfect" solution. It involves solving a one-dimensional minimization problem along the search direction to find the *optimal* step length $\alpha_k$ that gives the largest possible decrease. While this sounds great, it's often computationally expensive—sometimes as hard as the original problem—so it's rarely used in practice.
*   **Inexact Line Search (This Method)**: This is the practical, real-world approach. The goal is not to find the *perfect* step, but to find a step that is *good enough* to guarantee reasonable progress towards the minimum. This is done by ensuring the chosen step length satisfies certain conditions.

### The "Good Enough" Conditions

To ensure progress, an inexact line search typically enforces one or more conditions. The most common is:

*   **[[Armijo Condition]]**: This is the most fundamental condition. It guarantees that the step provides a **"sufficient decrease"** in the function value. It ensures that the actual reduction we get is at least some fraction of the reduction we would expect based on a linear approximation of the function. This prevents us from taking trivially small steps that make almost no progress.
*   **[[Wolfe Condition]]**: This is a more advanced set of conditions that includes the Armijo condition but also adds a second check to ensure the step is not *too short*. It does this by looking at the slope of the function at the new point.

### A Practical Strategy: [[Armijo Line Search]]

The most common and intuitive way to implement an inexact line search is the **[[Armijo Line Search]]**, which combines the [[Armijo Condition]] with a simple strategy called **[[Backtracking]]**.

1.  **Start with a big step**: Begin by trying a full step, typically $\alpha = 1$. This is especially useful for methods like [[Newton's Method for Minimization]], where a full step is often the best choice.
2.  **Check the condition**: See if the step $\alpha=1$ satisfies the **[[Armijo Condition]]**.
3.  **Backtrack if needed**:
    *   If the condition is met, you're done! Use that step length.
    *   If the condition is *not* met (meaning the step was too ambitious and didn't provide enough of a decrease), you **backtrack** by reducing the step size (e.g., $\alpha = \alpha / 2$).
4.  **Repeat**: Keep checking the condition and halving the step size until the [[Armijo Condition]] is finally satisfied.

### Why is Line Search Important?

Line search is a core part of **[[Globalization Strategies]]**. It's what makes algorithms like Newton's method and Quasi-Newton methods robust. Without a proper line search, these powerful methods could easily diverge or fail if they start far from the solution. By ensuring that every single step makes sufficient progress, a line search procedure guarantees that the algorithm will reliably move towards a **[[Local Optimum]]**.