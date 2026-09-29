## Active-Set Methods: The Smart Constraint Detective

**[[Active-Set Methods]]** are like having a detective that makes educated guesses about which constraints are actually "binding" you at the optimal solution. Instead of worrying about all constraints at once, these methods cleverly guess which constraints will be **[[Active Constraints]]** (satisfied as equalities) at the optimum, then solve the simpler problem with only those constraints. It's like figuring out which walls you'll actually bump into in a maze, then navigating only around those walls.

### The Recipe (Algorithm Steps)

1. **Step 1: Start with an Initial Guess (Initialization)**
   - Pick an initial starting point $x_0$ that satisfies all constraints
   - Make an initial guess about which constraints are **[[Active Constraints]]** - call this set $\mathcal{W}_0$

2. **Step 2: Solve the Equality-Constrained Subproblem**
   - Treat all constraints in $\mathcal{W}_k$ as **[[Linear Equality Constraints]]**
   - Use methods like **[[Reduced Newton Direction]]** to solve the subproblem with only these active constraints
   - Find the optimal solution $x_k^*$ for this reduced problem

3. **Step 3: Check if We're Done (Optimality Test)**
   - Compute the **[[Lagrange Multipliers ($\lambda$)]]** for the active constraints
   - If all multipliers are non-negative ($\lambda_i \geq 0$) and $x_k^*$ satisfies all original constraints, we're done!

4. **Step 4: Update the Active Set (Add or Remove Constraints)**
   - **Add constraints**: If $x_k^*$ violates any inactive constraints, add the most violated one to $\mathcal{W}_k$
   - **Remove constraints**: If any $\lambda_i < 0$, remove the corresponding constraint from $\mathcal{W}_k$
   - This gives us a new active set $\mathcal{W}_{k+1}$

5. **Step 5: Repeat Until Convergence**
   - Go back to Step 2 with the updated active set until **[[Convergence]]** is achieved

### The Core Strategy

The **[[Active-Set Methods]]** strategy can be summarized as:

**Guess → Solve → Check → Update → Repeat**

The key insight is that we're iteratively refining our guess about which constraints are **[[Binding Constraint]]**s at the optimum, allowing us to leverage powerful methods for equality-constrained problems at each step.

### Key Differences from Related Methods

| Method | When to Use | Key Difference |
|--------|-------------|----------------|
| **[[Newton's Method for Minimization]]** | Unconstrained problems | No constraints to worry about |
| **[[Reduced Newton Direction]]** | Linear equality constraints only | Fixed set of constraints; no active set management |
| **[[Active-Set Methods]]** | Mixed equality/inequality constraints | Dynamically manages which constraints are active |
| **[[Sequential Quadratic Programming (SQP)]]** | General nonlinear constraints | Solves quadratic subproblems; handles constraints differently |
| **[[Penalty Methods]]** | Any constrained problem | Transforms to unconstrained; no constraint set management |
| **[[Barrier Methods]]** | Inequality constraints | Stays in interior; no active constraint identification |

**[[Active-Set Methods]]** are favorable when:
- You have **mixed equality and inequality constraints**
- The number of **[[Active Constraints]]** at the optimum is much smaller than the total number of constraints
- You want to maintain **exact feasibility** at every iteration
- The problem structure allows efficient solution of equality-constrained subproblems

### A Simple Example: Navigating a Rectangular Box

Let's minimize $f(x, y) = (x-3)^2 + (y-3)^2$ subject to:
- $x \geq 0, y \geq 0$ (stay in first quadrant)
- $x \leq 2, y \leq 2$ (stay in a 2×2 box)

The unconstrained minimum is at $(3, 3)$, but this violates our box constraints.

1. **Start**: Begin at $x_0 = (1, 1)$ with initial active set $\mathcal{W}_0 = \emptyset$ (no active constraints).

2. **First Iteration**:
   - **Solve**: Unconstrained optimum is $(3, 3)$, but this violates $x \leq 2$ and $y \leq 2$
   - **Update**: Add constraints $x = 2$ and $y = 2$ to active set: $\mathcal{W}_1 = \{x = 2, y = 2\}$

3. **Second Iteration**:
   - **Solve**: With $x = 2, y = 2$, we get $x_1^* = (2, 2)$
   - **Check**: Compute multipliers - both are positive (constraints are "pulling us back")
   - **Result**: $(2, 2)$ is optimal!

The **[[Active-Set Methods]]** correctly identified that we'll be "bumping into" the upper bounds $x \leq 2$ and $y \leq 2$ at the optimum, allowing us to solve the simpler equality-constrained problem $x = 2, y = 2$.

This method is particularly powerful because it adapts its constraint handling based on the geometry of the problem, making it efficient for problems where only a subset of constraints matter at the solution!