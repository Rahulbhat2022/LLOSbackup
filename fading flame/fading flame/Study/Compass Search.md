
***

## Compass Search: Finding the Way Without a Map

**[[Compass Search]]**, also known as a Pattern Search, is a simple yet effective optimization algorithm that belongs to a special class of **derivative-free** methods. It doesn't need any information about the function's slope ([[Gradient]]) or curvature ([[Hessian]]).

Instead, it works like a person playing the "hotter/colder" game in the dark. From its current position, it takes a test step in a few pre-defined directions (like the points on a compass: North, South, East, West), and if it finds a better spot, it moves there. If not, it concludes it must be close to the minimum and reduces its step size to search more locally.

### The Key Difference: Calculus vs. Trial-and-Error

This method represents a complete departure from the philosophy of all the previous methods.

*   **Derivative-Based Methods ([[Steepest Descent]], [[Newton's Method for Minimization]], [[Quasi-Newton Methods]])**: These are like expert navigators with advanced tools. They use calculus (derivatives) to analyze the "landscape" of the function and calculate an intelligent [[Search Direction]] that is likely to lead toward the minimum.
*   **[[Compass Search]] (This Method)**: This is like a simple robot with only one ability: it can evaluate its current altitude. It doesn't know which way is "downhill." It can only try moving one step in each cardinal direction, check its new altitude at each spot, and then decide to move to the lowest point it found. It relies purely on trial-and-error, not on analytical insight.

This makes it incredibly useful when the "map" (the function's derivatives) is unavailable or doesn't exist.

### The Recipe (Algorithm Steps)

1.  **Step 1: Start Somewhere (Initialization)**
    *   Pick an initial starting point, $x_k$.
    *   Choose an initial step size, $\Delta$.

2.  **Step 2: Explore the Compass Points (Exploratory Moves)**
    *   From the current point $x_k$, define a set of test points. For a 2D problem, this would be:
        *   $x_N = x_k + (0, \Delta)$ (North)
        *   $x_S = x_k - (0, \Delta)$ (South)
        *   $x_E = x_k + (\Delta, 0)$ (East)
        *   $x_W = x_k - (\Delta, 0)$ (West)
    *   Evaluate the function's value at the current point and at all the test points.

3.  **Step 3: Make a Decision**
    *   **Success**: If you find any test point where the function value is lower than at your current point, the iteration is a success. Move to the *best* of these new points ($x_{k+1} = \text{best point}$) and keep the step size $\Delta$ the same for the next iteration.
    *   **Failure**: If *none* of the test points are better than your current spot, the iteration is a failure. Stay where you are ($x_{k+1} = x_k$) and **reduce the step size** (e.g., $\Delta_{new} = \Delta_{old} / 2$).

4.  **Step 4: Repeat**
    *   Go back to Step 2 and repeat the process. The algorithm stops when the step size $\Delta$ becomes smaller than some pre-defined tolerance, meaning you have zoomed in on a solution.

### A Simple Example: Probing the Valley

Let's use our function $f(x, y) = (x-2)^2 + (y-1)^2$, starting at $x_0 = (0, 0)$ with a step size $\Delta = 1$.

1.  **Start**: $x_0 = (0, 0)$. Current function value is $f(0,0) = 5$.

2.  **Explore**:
    *   **North**: Test point is $(0, 1)$. $f(0, 1) = (0-2)^2 + (1-1)^2 = 4$.
    *   **South**: Test point is $(0, -1)$. $f(0, -1) = (0-2)^2 + (-1-1)^2 = 8$.
    *   **East**: Test point is $(1, 0)$. $f(1, 0) = (1-2)^2 + (0-1)^2 = 2$.
    *   **West**: Test point is $(-1, 0)$. $f(-1, 0) = (-1-2)^2 + (0-1)^2 = 10$.

3.  **Decision**: The best point found was $(1, 0)$ with a value of 2. This is a **success**.
    *   Our new point is $x_1 = (1, 0)$.
    *   The step size $\Delta$ remains 1.

4.  **Next Iteration**: We would repeat the process from $x_1 = (1, 0)$, testing the points $(1,1)$, $(1,-1)$, $(2,0)$, and $(0,0)$.

### Why Use Compass Search?

*   **Pros**: Its single greatest advantage is that it is **derivative-free**. This makes it invaluable for problems where:
    *   The function is not **[[Smooth Functions|smooth]]** or continuous (e.g., has sharp corners).
    *   The function is a "black box" from a simulation or experiment, where you can only get a value out but have no idea about its internal formula.
    *   Calculating derivatives is prohibitively difficult or time-consuming.
    *   It is also very simple to understand and implement.

*   **Cons**: It is generally much slower than derivative-based methods. Its **[[Convergence]]** is only linear, and it can be particularly slow on problems that are rotated, as it is forced to "zig-zag" along the axes.