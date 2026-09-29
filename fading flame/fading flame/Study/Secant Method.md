
***

## The Secant Method: A Clever Alternative to Newton's Method

The **[[Secant Method]]** is a root-finding algorithm, meaning its goal is to solve equations of the form $f(x)=0$. It is famous for being a "derivative-free" alternative to **[[Newton's Method for Nonlinear Equations]]**.

The core idea is simple: instead of using a *tangent* line at a single point to approximate the function, the Secant Method uses a *secant* line drawn through **two** previous points. The next guess for the root is simply where this secant line crosses the x-axis.

### The Key Difference: Tangent vs. Secant

This method is best understood by comparing it directly to its more famous cousin.

*   **[[Newton's Method for Nonlinear Equations]]**:
    *   **Requires**: One starting point and the function's **first derivative**, $f'(x)$.
    *   **How it works**: At a point $x_k$, it calculates the slope using the exact derivative to form a *tangent line*. The next guess, $x_{k+1}$, is where this tangent hits the x-axis.
    *   **Analogy**: A highly skilled surveyor who uses precise (but expensive) laser tools to measure the exact slope of the ground at their feet.

*   **[[Secant Method]] (This Method)**:
    *   **Requires**: Two starting points, but **no derivative**.
    *   **How it works**: Given two points, $x_k$ and $x_{k-1}$, it calculates the slope of the line connecting them (the *secant line*). The next guess, $x_{k+1}$, is where this line hits the x-axis.
    *   **Analogy**: A clever hiker who doesn't have a laser tool, but can approximate the slope by looking at where they are now and where they were one step ago.

The Secant Method is the direct inspiration for **[[Quasi-Newton Methods]]**. Just as the Secant Method approximates the *first* derivative using previous points, Quasi-Newton methods approximate the *second* derivative ([[Hessian]]) using previous points and gradients.

### The Recipe (Algorithm Steps)

1.  **Step 1: Start with Two Guesses (Initialization)**
    *   Pick two initial points, $x_0$ and $x_1$, that are reasonably close to the root.

2.  **Step 2: Draw the Secant Line and Find its Root**
    *   Calculate the function values at your two most recent points, $f(x_k)$ and $f(x_{k-1})$.
    *   Use the formula to find the point $x_{k+1}$ where the line connecting $(x_{k-1}, f(x_{k-1}))$ and $(x_k, f(x_k))$ crosses the x-axis.

3.  **Step 3: Update and Repeat**
    *   Discard the oldest point ($x_{k-1}$) and repeat Step 2 with your new pair of points ($x_k$ and $x_{k+1}$).
    *   Continue until the process achieves **[[Convergence]]**.

### The Core Formula

The update formula for the Secant Method is:

$x_{k+1} = x_k - f(x_k) \frac{x_k - x_{k-1}}{f(x_k) - f(x_{k-1})}$

If you look closely, you'll see this is just Newton's method, $x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}$, where the derivative $f'(x_k)$ has been replaced by the finite difference approximation:

$f'(x_k) \approx \frac{f(x_k) - f(x_{k-1})}{x_k - x_{k-1}}$

### A Simple Example: Finding the Square Root of 2

Let's again find the root of $f(x) = x^2 - 2$.

1.  **Start**: We need two initial guesses. Let's pick $x_0 = 1$ and $x_1 = 2$.
    *   $f(x_0) = f(1) = 1^2 - 2 = -1$
    *   $f(x_1) = f(2) = 2^2 - 2 = 2$

2.  **First Step (k=1)**: We find $x_2$ using $x_0$ and $x_1$.
    $x_2 = x_1 - f(x_1) \frac{x_1 - x_0}{f(x_1) - f(x_0)} = 2 - 2 \frac{2 - 1}{2 - (-1)} = 2 - 2 \frac{1}{3} \approx 1.3333$

3.  **Second Step (k=2)**: We find $x_3$ using our new pair of points, $x_1=2$ and $x_2=1.3333$.
    *   $f(x_1) = 2$
    *   $f(x_2) = (1.3333)^2 - 2 \approx 1.7777 - 2 = -0.2223$
    $x_3 = x_2 - f(x_2) \frac{x_2 - x_1}{f(x_2) - f(x_1)} = 1.3333 - (-0.2223) \frac{1.3333 - 2}{-0.2223 - 2} \approx 1.4118$

After just two steps, we are already very close to the true root of $\sqrt{2} \approx 1.4142$.

### Why Use the Secant Method?

*   **Pros**: Its main advantage is that it does not require the calculation of derivatives, which can be very difficult or computationally expensive. It is almost as fast as Newton's method.
*   **Cons**: Its rate of [[Convergence]] (superlinear) is slightly slower than Newton's method (quadratic). It can also be less stable than Newton's method if the initial guesses are poor.