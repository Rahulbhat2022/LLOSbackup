## Sequential Quadratic Programming (SQP): Newton's Method for Constrained Problems

**[[Sequential Quadratic Programming (SQP)]]** is like having Newton's brilliant navigation system ([[Newton's Method for Minimization]]) extended to handle any kind of constraint roadblocks. Instead of solving one big constrained problem directly, SQP breaks it down into a sequence of simpler "quadratic approximation" problems that can be solved efficiently. It's like Newton's method applied to the **[[Lagrangian Function]]**, where each step solves a **[[Constrained Quadratic Problem]]** to decide both where to go and how to handle the constraints.

### The Recipe (Algorithm Steps)

1. **Step 1: Start with Initial Guesses (Initialization)**
   - Pick an initial starting point $x_0$ (doesn't need to be feasible)
   - Initialize **[[Lagrange Multipliers ($\lambda$)]]** estimates $\lambda_0$ for the constraints
   - Set up an initial approximation $B_0$ for the **[[Hessian]]** of the **[[Lagrangian Function]]**

2. **Step 2: Build the Quadratic Approximation**
   - Construct a **[[Constrained Quadratic Problem]]** that approximates the original problem around $x_k$
   - Use the current **[[Gradient]]**, Hessian approximation $B_k$, and linearized constraints
   - This creates a "local quadratic model" of your problem

3. **Step 3: Solve the Quadratic Subproblem**
   - Solve: minimize $\nabla f(x_k)^T d + \frac{1}{2} d^T B_k d$ subject to linearized constraints
   - This gives you the **[[Search Direction]]** $d_k$ and updated multipliers $\lambda_{k+1}$
   - The subproblem captures both the objective curvature and constraint behavior

4. **Step 4: Take a Careful Step**
   - Use **[[Line Search]]** or trust region methods to find appropriate **[[Step Length]]** $\alpha_k$
   - Update: $x_{k+1} = x_k + \alpha_k d_k$
   - This ensures you make progress while respecting the constraint structure

5. **Step 5: Update and Repeat**
   - Update the Hessian approximation $B_k$ using **[[Quasi-Newton Methods]]** like **[[BFGS]]**
   - Repeat until **[[Convergence]]** to a point satisfying the **[[Karush-Kuhn-Tucker (KKT) Conditions]]**

### The Core Formula

The **[[Sequential Quadratic Programming (SQP)]]** subproblem at each iteration is:

minimize $\nabla f(x_k)^T d + \frac{1}{2} d^T B_k d$

subject to $\nabla g_i(x_k)^T d + g_i(x_k) = 0$ (equality constraints)

and $\nabla h_j(x_k)^T d + h_j(x_k) \leq 0$ (inequality constraints)

In plain English, this means:
**Quadratic Model** = **Linear Objective Approximation** + **Quadratic Curvature** + **Linearized Constraints**

The key insight is that we're applying Newton's method to the **[[Karush-Kuhn-Tucker (KKT) Conditions]]**, which naturally leads to solving these quadratic programming subproblems.

### Key Differences from Related Methods

| Method | When to Use | Key Difference |
|--------|-------------|----------------|
| **[[Newton's Method for Minimization]]** | Unconstrained problems | No constraint handling; direct Newton steps |
| **[[Reduced Newton Direction]]** | Linear equality constraints only | Works in constraint null space; maintains feasibility |
| **[[Active-Set Methods]]** | Mixed constraints with good active set guess | Guesses active constraints; solves equality-constrained subproblems |
| **[[Sequential Quadratic Programming (SQP)]]** | General nonlinear constraints | Solves quadratic subproblems; handles all constraint types |
| **[[Penalty Methods]]** | Any constrained problem | Modifies objective; transforms to unconstrained |
| **[[Barrier Methods]]** | Inequality constraints | Stays feasible; modifies objective with barrier terms |

**[[Sequential Quadratic Programming (SQP)]]** is favorable when:
- You have **general nonlinear constraints** (equality and/or inequality)
- The constraints are **smooth** and well-behaved
- You want **superlinear convergence** near the solution
- Efficient quadratic programming solvers are available
- The problem structure doesn't lend itself to simpler specialized methods

### A Simple Example: Minimizing with a Circular Constraint

Let's minimize $f(x, y) = x^2 + (y-2)^2$ subject to $g(x, y) = x^2 + y^2 - 1 = 0$ (unit circle constraint).

1. **Start**: Begin at $x_0 = (1, 0)$ (on the circle) with $\lambda_0 = 0$.

2. **First Quadratic Subproblem**:
   - **Objective gradient**: $\nabla f(1,0) = [2, -4]$  
   - **Constraint gradient**: $\nabla g(1,0) = [2, 0]$
   - **Subproblem**: minimize $2d_1 - 4d_2 + \frac{1}{2}(d_1^2 + d_2^2)$ subject to $2d_1 = 0$

3. **Solve**: From $2d_1 = 0$, we get $d_1 = 0$. Minimizing over $d_2$: $d^* = (0, 4)$.

4. **Line Search**: Take a step $x_1 = (1, 0) + \alpha(0, 4)$. Need to project back to circle.

5. **Result**: After a few iterations, SQP converges to $(0, 1)$, which is indeed the closest point on the unit circle to $(0, 2)$.

The **[[Sequential Quadratic Programming (SQP)]]** method elegantly handles the nonlinear constraint by repeatedly solving simpler quadratic approximations, combining the power of Newton's method with sophisticated constraint handling!