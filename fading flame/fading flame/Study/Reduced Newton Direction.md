## Reduced Newton Direction: Newton's Method for Equality-Constrained Problems

**[[Reduced Newton Direction]]** is like applying Newton's smart GPS navigation ([[Newton's Method for Minimization]]) to a problem where you're forced to stay on specific highways (linear equality constraints). Instead of being able to go anywhere in the landscape, you can only move in directions that keep you on the constraint "roads." It's Newton's method adapted for problems where you must satisfy $Ax = b$ at every step, making it perfect for **[[Linear Equality Constraints]]**.

### The Recipe (Algorithm Steps)

1. **Step 1: Start on the Highway (Feasible Initialization)**
   - Pick an initial starting point $x_0$ that satisfies the constraints: $Ax_0 = b$
   - This ensures you begin on the "constraint highway"

2. **Step 2: Find the Allowed Directions**
   - Compute the **[[Null Space Matrix (Z)]]** where $AZ = 0$
   - Any movement in the direction $Zp$ will keep you on the constraint surface
   - The columns of $Z$ span all directions you're allowed to move

3. **Step 3: Calculate the Reduced Problem Information**
   - Compute the **[[Reduced Gradient]]**: $Z^T \nabla f(x_k)$ 
   - Compute the **[[Reduced Hessian]]**: $Z^T \nabla^2 f(x_k) Z$
   - This gives you Newton's information projected onto the feasible directions

4. **Step 4: Solve the Reduced Newton System**
   - Solve: $(Z^T \nabla^2 f(x_k) Z) p_y = -Z^T \nabla f(x_k)$
   - The **[[Search Direction]]** is: $p_k = Z p_y$
   - This ensures the direction stays feasible while using Newton's curvature information

5. **Step 5: Take the Step and Repeat**
   - Update: $x_{k+1} = x_k + \alpha_k p_k$ (typically $\alpha_k = 1$)
   - Since $AZ = 0$, we have $A(x_k + Zp_y) = Ax_k = b$, maintaining feasibility

### The Core Formula

The **[[Reduced Newton Direction]]** formula is:

$p_k = -Z (Z^T \nabla^2 f(x_k) Z)^{-1} Z^T \nabla f(x_k)$

In plain English, this means:
**Feasible Newton Direction** = **Feasible Space** $\times$ **Reduced Curvature**$^{-1}$ $\times$ **Reduced Slope**

The key insight is that we're applying Newton's method in the **[[Null Space]]** of the constraints, ensuring every step remains feasible.

### Key Differences from Related Methods

| Method | When to Use | Key Difference |
|--------|-------------|----------------|
| **[[Newton's Method for Minimization]]** | Unconstrained problems | No constraint handling - can go anywhere |
| **[[Reduced Newton Direction]]** | Linear equality constraints | Projects Newton's method onto feasible directions |
| **[[Sequential Quadratic Programming (SQP)]]** | General nonlinear constraints | Solves quadratic subproblems; handles inequality constraints |
| **[[Active-Set Methods]]** | Problems with inequality constraints | Guesses which constraints are active; switches between constraint sets |
| **[[Penalty Methods]]** | Any constrained problem | Modifies objective to penalize constraint violations |

**[[Reduced Newton Direction]]** is favorable when:
- You have **only linear equality constraints** (no inequalities)
- The **[[Null Space Matrix (Z)]]** is easy to compute and not too large
- You want to maintain **exact feasibility** at every iteration
- The problem structure makes computing the **[[Reduced Hessian]]** efficient

### A Simple Example: Minimizing on a Line

Let's minimize $f(x, y) = x^2 + 4y^2$ subject to the constraint $x + y = 3$.

1. **Start**: Choose $x_0 = (3, 0)$ (satisfies $x + y = 3$).

2. **Null Space**: For constraint $A = [1, 1]$, the null space matrix is $Z = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$.

3. **Reduced Information**:
   - **Gradient**: $\nabla f(3,0) = [6, 0]$
   - **Reduced Gradient**: $Z^T \nabla f = [1, -1] [6, 0] = 6$
   - **Hessian**: $\nabla^2 f = \begin{bmatrix} 2 & 0 \\ 0 & 8 \end{bmatrix}$
   - **Reduced Hessian**: $Z^T \nabla^2 f Z = [1, -1] \begin{bmatrix} 2 & 0 \\ 0 & 8 \end{bmatrix} \begin{bmatrix} 1 \\ -1 \end{bmatrix} = 10$

4. **Direction**: $p_y = -\frac{6}{10} = -0.6$, so $p_k = Z p_y = \begin{bmatrix} 1 \\ -1 \end{bmatrix} (-0.6) = \begin{bmatrix} -0.6 \\ 0.6 \end{bmatrix}$

5. **Update**: $x_1 = (3, 0) + (-0.6, 0.6) = (2.4, 0.6)$

Check: $2.4 + 0.6 = 3$ ✓ (constraint satisfied), and this moves toward the true minimum at $(1.5, 1.5)$.

The **[[Reduced Newton Direction]]** guarantees we stay exactly on the constraint line while using Newton's superior convergence properties!