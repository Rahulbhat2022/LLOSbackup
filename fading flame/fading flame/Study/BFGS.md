***

## BFGS: The Gold Standard of Quasi-Newton Methods

The **[[BFGS]]** (Broyden, Fletcher, Goldfarb, and Shanno) algorithm isn't a complete optimization method on its own. Rather, it is the most famous and effective **update formula** used within the **[[Quasi-Newton Methods]]** framework.

If a Quasi-Newton method is like a hiker building an approximate map of the terrain as they go, then BFGS is the specific, highly effective technique they use to update that map after each step.

### The Key Difference: A Better Way to Update the Map

The main goal of any Quasi-Newton update is to modify the current Hessian approximation ($B_k$) to create a new one ($B_{k+1}$) that better reflects the curvature of the function, based on the step just taken.

*   **[[DFP]] (Davidon, Fletcher, and Powell)**: This is the older sibling to BFGS. It was a pioneering method but was later found to be less efficient and less robust, especially when the [[Line Search]] isn't perfect.
*   **[[Symmetric Rank-one Update]]**: This is a simpler update formula. While it's easy to understand, it has a major drawback: it doesn't guarantee that the new B-matrix will be positive definite, which means it might not produce a [[Descent Direction]].
*   **[[BFGS]] (This Method)**: BFGS emerged as the clear winner. It is more robust than DFP and, crucially, it preserves the positive-definiteness of the B-matrix (as long as the line search is decent). This guarantees that the algorithm will always be heading downhill, making it much more reliable.

For these reasons, BFGS is considered the most successful and widely used Quasi-Newton update formula.

### The Core Formula

The heart of the algorithm is the BFGS update formula, which tells you how to get from your old Hessian approximation ($B_k$) to your new one ($B_{k+1}$).

First, after taking a step from $x_k$ to $x_{k+1}$, we define two vectors:
*   The change in position: $s_k = x_{k+1} - x_k$
*   The change in the [[Gradient]]: $y_k = \nabla f(x_{k+1}) - \nabla f(x_k)$

The BFGS update formula is:

$B_{k+1} = B_k - \frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k} + \frac{y_k y_k^T}{y_k^T s_k}$

Let's break this down conceptually:
*   **$B_k$**: This is your old map (your previous guess for the Hessian).
*   **$-\frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k}$**: This part **removes** information from the old map that is now outdated or inconsistent with the step you just took.
*   **$+\frac{y_k y_k^T}{y_k^T s_k}$**: This part **adds** new, better information about the curvature that you learned from observing how the gradient changed during your last step.

### Why is BFGS so Popular?

*   **Excellent Performance**: It provides a superb balance of speed and computational cost, converging much faster than [[Steepest Descent]] without the expense of [[Newton's Method for Minimization]].
*   **Robustness**: Its ability to maintain a positive-definite Hessian approximation makes it very reliable. You can trust it to keep finding a downhill direction.
*   **Efficiency**: In practice, it has proven to be more efficient and reliable than other Quasi-Newton updates like [[DFP]]. It is the default choice in most optimization software packages for a reason.