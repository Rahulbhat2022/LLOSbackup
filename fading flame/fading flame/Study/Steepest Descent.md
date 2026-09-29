Division
***

## Steepest Descent: A Simple Guide

The **[[Steepest Descent]]** method is one of the most fundamental and intuitive optimization algorithms. It follows the [[General Solution Algorithm]] with a very simple strategy: at any given point, it determines the direction that goes "downhill" the fastest and takes a step in that direction.

Think of it like being lost on a foggy mountain and wanting to get to the bottom. The most straightforward approach is to look at the ground right where you are and walk in the direction of the steepest slope downwards.

### The Key Difference: Simple Slope vs. Smart Curvature

The main distinction lies in the information used to pick a direction.

*   **[[Steepest Descent]] (This Method):** Only uses the first derivative, the **[[Gradient]]**. It finds the direction of the steepest slope at the *current point* and follows it. It's simple and computationally cheap but short-sighted.
*   **[[Newton's Method for Minimization]]**: Uses both the first derivative ([[Gradient]]) and the second derivative (the **[[Hessian]]**). The Hessian describes the *curvature* of the function (is it a wide-open valley or a narrow canyon?). By using this extra information, Newton's method can take a much more direct and intelligent path to the bottom, like a shortcut.

Steepest Descent is like a hiker who only looks at their feet to find the steepest way down, which might lead them on a long, winding path. Newton's method is like a skier who looks ahead at the shape of the whole valley to chart a much faster course.

### The Recipe (Algorithm Steps)

1.  **Step 1: Start Somewhere (Initialization)**
    *   Pick an initial starting point, $x_0$.

2.  **Step 2: Find the Steepest Downhill Direction**
    *   At your current point $x_k$, calculate the **[[Gradient]]**, $\nabla f(x_k)$. This vector points in the direction of the steepest *ascent* (uphill).
    *   The **[[Search Direction]]** ($p_k$) is simply the opposite of the gradient: $p_k = -\nabla f(x_k)$. This is a guaranteed **[[Descent Direction]]**.

3.  **Step 3: Decide How Far to Walk (Find [[Step Length]])**
    *   Find a suitable **[[Step Length]]** $\alpha_k$ that determines how far you go in the chosen direction. This is typically done using a **[[Line Search]]** method like **[[Armijo Line Search]]**.

4.  **Step 4: Take the Step (Update)**
    *   Calculate the new point using the general formula: $x_{k+1} = x_k + \alpha_k p_k$.

5.  **Step 5: Repeat**
    *   Keep repeating steps 2-4 from your new spot until you reach the minimum (**[[Convergence]]**).

### The Core Formula

The update rule for Steepest Descent is:

$x_{k+1} = x_k - \alpha_k \nabla f(x_k)$

Where:
*   $x_k$ is the current point.
*   $\nabla f(x_k)$ is the [[Gradient]] at that point.
*   $\alpha_k$ is the [[Step Length]].

### A Simple Example: Taking the First Step Down the Valley

Let's use our familiar function $f(x, y) = (x-2)^2 + (y-1)^2$, starting at $x_0 = (0, 0)$.

1.  **Start**: $x_0 = (0, 0)$.

2.  **Find the Direction**:
    *   The [[Gradient]] at $(0,0)$ is $\nabla f(x_0) = [-4, -2]$.
    *   The [[Search Direction]] is the opposite: $p_0 = -[-4, -2] = [4, 2]$.

3.  **Choose a Step Length**: For simplicity, let's pick $\alpha_0 = 0.1$.

4.  **Update**:
    $x_1 = (0, 0) + 0.1 \times [4, 2] = [0.4, 0.2]$

This is the exact same first step we took in the [[General Solution Algorithm]] example because we used Steepest Descent as the method there. However, if we continued, we would notice that the path starts to zig-zag, with each new direction being perpendicular to the last, slowing down progress.

### Why Use Steepest Descent?

*   **Pros**: It's simple to understand and implement. Each step is computationally cheap since you only need the gradient. It is guaranteed to make progress towards the minimum at every step (as long as the gradient isn't zero).
*   **Cons**: Its **[[Convergence]]** can be extremely slow, especially in narrow valleys (for [[Ill-conditioned Problem|ill-conditioned problems]]). This leads to a characteristic "zig-zagging" behavior where it overshoots the minimum back and forth, making it far less efficient than methods like [[Newton's Method for Minimization]] or **[[Quasi-Newton Methods]]**.