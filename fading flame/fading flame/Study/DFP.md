***

## DFP: The Pioneer of Quasi-Newton Methods

The **[[DFP]]** (Davidon, Fletcher, and Powell) algorithm is one of the original and most influential **update formulas** used within the **[[Quasi-Newton Methods]]** framework. It represents the first major breakthrough in creating a practical and effective method that could approximate the speed of [[Newton's Method for Minimization]] without its high computational cost.

Think of DFP as the respected ancestor in the family of optimization algorithms. It laid the groundwork and proved the concept, but its descendants—most notably **[[BFGS]]**—have since refined the approach and become more effective.

### The Key Difference: The Original vs. The Refinement

DFP and BFGS are very closely related; they are often described as being "duals" of each other. They both aim to build an approximate map of the function's curvature. The main difference lies in their performance and robustness.

*   **[[DFP]] (This Method)**: DFP was the first to show how to effectively update the Hessian approximation. However, its performance can be sensitive. If the **[[Line Search]]** used to find the [[Step Length]] is not very accurate, DFP's approximation can become poor, leading to slower [[Convergence]].
*   **[[BFGS]]**: BFGS is a slightly different update formula that, in extensive testing, has proven to be more robust and less sensitive to inaccuracies in the line search. It generally performs better than DFP in practice.

Because of its superior performance and reliability, BFGS has almost entirely replaced DFP as the go-to Quasi-Newton update formula in modern software.

### The Core Formula

The DFP formula is designed to directly update the *inverse* of the Hessian approximation. Let's call this matrix $H_k$ (so $H_k \approx [\nabla^2 f(x_k)]^{-1}$). This is convenient because it means we don't have to solve a system of equations to find the search direction.

First, we define the same two vectors as in BFGS:
*   The change in position: $s_k = x_{k+1} - x_k$
*   The change in the [[Gradient]]: $y_k = \nabla f(x_{k+1}) - \nabla f(x_k)$

The DFP update formula for the inverse Hessian approximation is:

$H_{k+1} = H_k - \frac{H_k y_k y_k^T H_k}{y_k^T H_k y_k} + \frac{s_k s_k^T}{s_k^T y_k}$

Conceptually, this formula does the same job as the BFGS update:
1.  It starts with the old inverse Hessian approximation ($H_k$).
2.  It subtracts a term to remove outdated information.
3.  It adds a term to incorporate the new curvature information learned from the last step.

Once you have $H_{k+1}$, finding the next [[Search Direction]] is very simple:
$p_{k+1} = -H_{k+1} \nabla f(x_{k+1})$

### Why is DFP Important?

*   **Historical Significance**: DFP was a groundbreaking algorithm that paved the way for modern practical optimization. It was the first truly effective Quasi-Newton method.
*   **Conceptual Foundation**: It provides the theoretical basis from which more advanced methods like BFGS were developed. Understanding DFP helps in understanding the entire family of Quasi-Newton methods.
*   **Current Status**: While you might still encounter it in older texts or software, for any new problem, **[[BFGS]]** is almost always the preferred choice due to its superior robustness and efficiency.