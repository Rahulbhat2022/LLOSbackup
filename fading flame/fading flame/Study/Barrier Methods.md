## Barrier Methods: The Invisible Fence Approach

**[[Barrier Methods]]** are like having an invisible electric fence for optimization - instead of allowing you to break the rules and then fining you afterward (**[[Penalty Methods]]**), they create an increasingly strong "force field" that pushes you away from constraint boundaries as you get close to them. These methods transform constrained problems into unconstrained ones by adding "barrier terms" that become infinitely expensive as you approach the boundary of the **[[Feasible Point]]** region. It's like being inside a shrinking bubble where the walls become more and more repulsive, forcing you to find the best solution within the ever-tightening space.

### The Recipe (Algorithm Steps)

1. **Step 1: Start Inside the Safe Zone (Feasible Initialization)**
   - Pick an initial starting point $x_0$ that satisfies ALL constraints - this is crucial!
   - Choose an initial **[[Barrier Parameter ($\mu$)]]** value, say $\mu_0 = 1$
   - Unlike **[[Penalty Methods]]**, you must begin with a **[[Feasible Point]]**

2. **Step 2: Build the Barrier Problem**
   - Create a **[[Modified Objective Function]]**: $B(x, \mu_k) = f(x) - \mu_k \sum_j \log(-h_j(x))$
   - The barrier terms create "repulsive forces" near constraint boundaries
   - For inequality constraints $h_j(x) \leq 0$, the logarithmic barriers $-\mu_k \log(-h_j(x))$ blow up as $h_j(x) \to 0$
   - This keeps you strictly in the **[[Interior of S]]** (feasible region)

3. **Step 3: Solve the Unconstrained Problem**
   - Use any unconstrained method like **[[Newton's Method for Minimization]]** or **[[Steepest Descent]]**
   - Minimize $B(x, \mu_k)$ to get solution $x_k^*$
   - The solution will be pulled toward the optimum while being pushed away from boundaries

4. **Step 4: Check for Convergence**
   - If the barrier parameter $\mu_k$ is small enough and constraints are nearly satisfied, you're done!
   - Otherwise, the "bubble" needs to shrink more...

5. **Step 5: Decrease the Barrier and Repeat**
   - Decrease the **[[Barrier Parameter ($\mu$)]]**: $\mu_{k+1} = c \cdot \mu_k$ where $0 < c < 1$ (typically $c = 0.1$)
   - Use $x_k^*$ as the starting point for the next iteration (it will remain feasible)
   - Repeat until **[[Convergence]]** to a solution on the boundary of the feasible region

### The Core Formula

The **[[Barrier Methods]]** **[[Modified Objective Function]]** is:

$B(x, \mu) = f(x) - \mu \sum_{j} \log(-h_j(x))$

where $h_j(x) \leq 0$ are inequality constraints.

In plain English, this means:
**Barrier Objective** = **Original Objective** - **Barrier Parameter** $\times$ **Sum of Logarithmic Repulsion Terms**

The key insight is that as $\mu \to 0$, the solution of the unconstrained barrier problem approaches the solution of the original constrained problem from the interior.

### Key Differences from Related Methods

| Method | When to Use | Key Difference |
|--------|-------------|----------------|
| **[[Newton's Method for Minimization]]** | Unconstrained problems | No constraints; direct optimization |
| **[[Reduced Newton Direction]]** | Linear equality constraints only | Maintains feasibility; works in null space |
| **[[Active-Set Methods]]** | Mixed constraints with sparse active set | Guesses active constraints; switches between constraint sets |
| **[[Sequential Quadratic Programming (SQP)]]** | General nonlinear constraints | Solves quadratic subproblems; sophisticated constraint handling |
| **[[Penalty Methods]]** | Any constrained problem | Allows infeasibility; penalty parameter **increases** |
| **[[Barrier Methods]]** | Inequality constraints | Stays strictly feasible; barrier parameter **decreases** |

**[[Barrier Methods]]** are favorable when:
- You can easily find an initial **[[Feasible Point]]** in the **[[Interior of S]]**
- You have **only inequality constraints** (no equality constraints)
- You want to maintain **strict feasibility** throughout all iterations
- The constraint functions are well-behaved and allow logarithmic barriers
- Approaching the optimum from the interior is preferable to crossing constraint boundaries

### A Simple Example: Circle Meets Square (From Inside)

Let's minimize $f(x, y) = x^2 + y^2$ subject to $h(x, y) = 1 - x - y \leq 0$ (or equivalently, $x + y \geq 1$).

The true solution should be on the line $x + y = 1$, closest to the origin at $(0.5, 0.5)$.

1. **Start**: Begin at $x_0 = (0.6, 0.6)$ with $\mu_0 = 1$ (this satisfies $0.6 + 0.6 = 1.2 > 1$, so it's feasible).

2. **First Barrier Problem**:
   - **Modified objective**: $B(x, y, 1) = x^2 + y^2 - 1 \cdot \log(-(1-x-y)) = x^2 + y^2 - \log(x+y-1)$
   - **Minimize**: Taking derivatives and solving gives us a solution like $(0.52, 0.52)$
   - **Check**: This point satisfies $0.52 + 0.52 = 1.04 > 1$ (still feasible)

3. **Second Barrier Problem**:
   - **Decrease barrier**: $\mu_1 = 0.1$
   - **Modified objective**: $B(x, y, 0.1) = x^2 + y^2 - 0.1 \cdot \log(x+y-1)$
   - **Minimize**: Solution is approximately $(0.501, 0.501)$
   - **Check**: $0.501 + 0.501 = 1.002$ (very close to the constraint boundary!)

4. **Continue**: As $\mu$ gets smaller (0.01, 0.001, ...), the solution approaches $(0.5, 0.5)$ and gets arbitrarily close to the constraint boundary $x + y = 1$.

The **[[Barrier Methods]]** successfully navigated to the optimal point while always staying strictly inside the feasible region - like being guided by an invisible fence that got stronger as we approached the boundary!