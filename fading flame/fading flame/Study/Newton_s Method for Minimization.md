

***

## Newton's Method for Minimization: A Simple Guide

**[[Newton's Method for Minimization]]** is a powerful optimization technique that follows the [[General Solution Algorithm]] but uses a more intelligent way to choose the [[Search Direction]]. Instead of just looking at the slope (the [[Gradient]]), it also uses the curvature of the function (the [[Hessian]]) to find a better path to the minimum.

The core idea is to approximate the function at your current location with a [[Quadratic Functions|quadratic function]] (which looks like a bowl) and then jump directly to the bottom of that bowl. This often gets you to the true minimum much faster than just following the steepest path.

### The Recipe (Algorithm Steps)

1.  **Step 1: Start Somewhere (Initialization)**
    *   Pick an initial starting point, $x_0$.

2.  **Step 2: Find the Newton Direction (The Smart [[Search Direction]])**
    *   At your current point $x_k$, calculate both the **[[Gradient]]** ($\nabla f(x_k)$) and the **[[Hessian]]** ($\nabla^2 f(x_k)$).
    *   Solve the following equation to find the search direction $p_k$:
        $\nabla^2 f(x_k) p_k = -\nabla f(x_k)$

3.  **Step 3: Take the Step (Update)**
    *   Move from your current spot to the new, better spot. "Pure" Newton's method assumes the best [[Step Length]] is $\alpha_k = 1$.
    *   Calculate the new point: $x_{k+1} = x_k + p_k$.

4.  **Step 4: Repeat**
    *   Keep repeating steps 2 and 3 until you reach the minimum ([[Convergence]]).

### The Core Formula

The search direction, known as the Newton direction, is calculated as:

$p_k = -[\nabla^2 f(x_k)]^{-1} \nabla f(x_k)$

This means the full update step is:

$x_{k+1} = x_k - [\nabla^2 f(x_k)]^{-1} \nabla f(x_k)$

Where:
*   $x_k$ is the current point.
*   $\nabla f(x_k)$ is the [[Gradient]] (first derivative) at that point.
*   $[\nabla^2 f(x_k)]^{-1}$ is the inverse of the [[Hessian]] matrix (second derivative) at that point.

### A Simple Example: Finding the Bottom of a Valley Instantly

Let's use the same function: $f(x, y) = (x-2)^2 + (y-1)^2$. The minimum is at $(2, 1)$.

1.  **Start**: We begin at $x_0 = (0, 0)$.

2.  **Calculate Derivatives**:
    *   **[[Gradient]]**: $\nabla f(x,y) = [2(x-2), 2(y-1)]$. At $(0,0)$, this is $\nabla f(x_0) = [-4, -2]$.
    *   **[[Hessian]]**: $\nabla^2 f(x,y) = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$. This matrix is constant for this function.
    *   **Inverse Hessian**: $[\nabla^2 f(x_0)]^{-1} = \begin{pmatrix} 1/2 & 0 \\ 0 & 1/2 \end{pmatrix}$.

3.  **Find the Newton Direction ($p_0$)**:
    $p_0 = - \begin{pmatrix} 1/2 & 0 \\ 0 & 1/2 \end{pmatrix} \begin{pmatrix} -4 \\ -2 \end{pmatrix} = - \begin{pmatrix} -2 \\ -1 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$

4.  **Update to find $x_1$**:
    $x_1 = x_0 + p_0 = (0, 0) + (2, 1) = (2, 1)$

In this special case, because our function was a perfect quadratic, Newton's method found the exact minimum in a single step! For more complex functions, it would take a few steps but would still be very fast.

### Why Use Newton's Method?

*   **Pros**: It has extremely fast [[Convergence]], much faster than [[Steepest Descent]], especially when you are near the solution.
*   **Cons**: Calculating the [[Hessian]] matrix and its inverse can be very computationally expensive. The method can also fail if the Hessian is not positive definite (i.e., if the function doesn't curve upwards like a bowl). This is why methods like **[[Quasi-Newton Methods]]** were developed.