## Newton's Method for Minimization: The Smart Shortcut

**[[Newton's Method for Minimization]]** is like having a GPS for optimization that doesn't just tell you which way is downhill, but also predicts how the landscape curves ahead. Unlike simpler methods that only look at the slope ([[Gradient]]), Newton's method also considers how fast the slope is changing (the **[[Hessian]]**). It's like the difference between walking blindfolded downhill versus having a detailed topographic map.

### The Recipe (Algorithm Steps)

1. **Step 1: Start Somewhere (Initialization)**
   - Pick an initial starting point, $x_0$. This is your first guess.

2. **Step 2: Calculate the Landscape Information**
   - Compute the **[[Gradient]]** $\nabla f(x_k)$ to see which way is downhill
   - Compute the **[[Hessian]]** $\nabla^2 f(x_k)$ to see how the slope curves

3. **Step 3: Find the Smart Direction**
   - The **[[Search Direction]]** is: $p_k = -[\nabla^2 f(x_k)]^{-1} \nabla f(x_k)$
   - This direction accounts for both the slope and the curvature of the function

4. **Step 4: Take the Full Newton Step**
   - Unlike other methods, Newton's method typically uses a **[[Step Length]]** of $\alpha_k = 1$
   - This means we trust the quadratic approximation completely

5. **Step 5: Update and Repeat**
   - Move to the new position and repeat until **[[Convergence]]**

### The Core Formula

Newton's method uses this powerful update formula:

$x_{k+1} = x_k - [\nabla^2 f(x_k)]^{-1} \nabla f(x_k)$

In plain English, this means:
**New Position** = **Old Position** - **Curvature Info**$^{-1}$ $\times$ **Slope Info**

The key insight is that we're not just moving opposite to the gradient - we're scaling that movement by the inverse of the Hessian, which tells us how to adjust for the curvature.

### A Simple Example: Quadratic Bowl

Let's find the minimum of $f(x, y) = x^2 + 4y^2 - 4x - 8y + 21$. The true minimum is at $(2, 1)$ with $f(2,1) = 1$.

1. **Start**: Let's begin at $x_0 = (0, 0)$.

2. **First Step**:
   - **Gradient**: $\nabla f(0,0) = [2(0) - 4, 8(0) - 8] = [-4, -8]$
   - **Hessian**: $\nabla^2 f = \begin{bmatrix} 2 & 0 \\ 0 & 8 \end{bmatrix}$ (constant for quadratic functions)
   - **Direction**: $p_0 = -\begin{bmatrix} 2 & 0 \\ 0 & 8 \end{bmatrix}^{-1} \begin{bmatrix} -4 \\ -8 \end{bmatrix} = -\begin{bmatrix} 1/2 & 0 \\ 0 & 1/8 \end{bmatrix} \begin{bmatrix} -4 \\ -8 \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$
   - **New Position**: $x_1 = (0, 0) + (2, 1) = (2, 1)$

Amazing! Newton's method found the exact minimum in just one step because our function was quadratic, and Newton's method is based on a quadratic approximation. This shows why Newton's method has **[[Quadratic Convergence]]** - it's incredibly fast when you're near the minimum.