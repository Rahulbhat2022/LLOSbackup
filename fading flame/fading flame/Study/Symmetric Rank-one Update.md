***

## Symmetric Rank-one Update: The Simplest Approach

The **[[Symmetric Rank-one Update]]** (often called SR1) is another formula used within the **[[Quasi-Newton Methods]]** framework to update the approximation of the [[Hessian]] matrix. As its name suggests, it is the simplest possible way to create this update while maintaining some essential properties.

Think of it as the minimalist of the Quasi-Newton family. While **[[BFGS]]** and **[[DFP]]** use a more complex (rank-two) update to build their approximate map of the terrain, SR1 uses the most basic correction possible (a rank-one update).

### The Key Difference: Simplicity vs. Safety

The main trade-off between SR1 and its more famous cousins, BFGS and DFP, is simplicity versus robustness.

*   **[[BFGS]] / [[DFP]]**: These are "rank-two" updates. They are more complex but have a crucial safety feature: they are designed to ensure the updated Hessian approximation ($B_{k+1}$) remains positive definite. This guarantees that the next [[Search Direction]] will be a **[[Descent Direction]]**, keeping the algorithm safely moving downhill.
*   **[[Symmetric Rank-one Update]] (This Method)**: This is a "rank-one" update. It is beautifully simple and satisfies the fundamental **[[Secant Condition]]**. However, it comes with a major risk: **it does not guarantee that the updated matrix will be positive definite.** The algorithm might generate a direction that isn't downhill, which can cause it to fail or become unstable.

Because of this lack of a safety guarantee, SR1 is used less often in practice for general-purpose optimization than the more reliable BFGS method.

### The Core Formula

The SR1 formula is the most straightforward of the Quasi-Newton updates. As always, we first define:
*   The change in position: $s_k = x_{k+1} - x_k$
*   The change in the [[Gradient]]: $y_k = \nabla f(x_{k+1}) - \nabla f(x_k)$

The SR1 update formula is:

$B_{k+1} = B_k + \frac{(y_k - B_k s_k)(y_k - B_k s_k)^T}{(y_k - B_k s_k)^T s_k}$

Let's break this down conceptually:
*   **$B_k$**: This is your old map (your previous guess for the Hessian).
*   **$(y_k - B_k s_k)$**: This vector represents the "error" or mismatch between how the gradient actually changed ($y_k$) and how your old map predicted it would change ($B_k s_k$).
*   **The fraction**: This part constructs the simplest possible (rank-one) matrix from that error vector to patch your old map and make it consistent with the new information.

### Why is the SR1 Update Important?

*   **Theoretical Simplicity**: It is the most elementary update that satisfies the [[Secant Condition]] and preserves symmetry, making it very important from a theoretical standpoint.
*   **Niche Applications**: While not the best for general unconstrained optimization, it can be very useful in specific contexts, such as trust-region methods or for problems where the Hessian is known to be indefinite (i.e., not always curving upwards like a bowl).
*   **The Trade-off**: It has a significant weakness: the denominator $(y_k - B_k s_k)^T s_k$ can be zero or close to zero, making the update undefined or numerically unstable. Furthermore, the lack of a positive-definite guarantee is a major drawback for standard line search methods. For these reasons, **[[BFGS]]** remains the more popular and robust choice for most problems.