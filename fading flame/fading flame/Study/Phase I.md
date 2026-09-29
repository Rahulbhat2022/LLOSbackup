## Phase I: Finding Your Starting Point in the Maze

**[[Phase I]]** is like having a GPS that first needs to figure out where you are before it can give you directions to your destination. In **[[Linear Programming (LP)]]**, the **[[Simplex Methods]]** need to start at a **[[Basic Feasible Solution (BFS)]]** - a corner point of the feasible region. But what if you don't know where such a corner is, or the obvious starting point (the origin) isn't even allowed? Phase I solves this "Where am I?" problem by creating a temporary auxiliary problem that's guaranteed to have an easy starting point, then uses that to find a proper starting point for your real problem.

### The Recipe (Algorithm Steps)

1. **Step 1: Recognize the Problem (When Origin Isn't Feasible)**
   - Check if the origin $(0, 0, ..., 0)$ satisfies all constraints
   - If any constraint has a negative right-hand side or the origin violates constraints, you need Phase I
   - The **[[Standard Form (LP)]]** assumes non-negative right-hand sides, but real problems often violate this

2. **Step 2: Build the Auxiliary Problem**
   - Add artificial variables to each constraint that doesn't have an obvious **[[Basic Variables]]** candidate
   - Create a new objective: minimize the sum of all artificial variables
   - The optimal solution of this auxiliary problem will either be 0 (feasible original problem) or positive (infeasible original problem)

3. **Step 3: Solve the Auxiliary Problem**
   - Use the **[[Primal Simplex Method]]** on this modified problem
   - The artificial variables give you an obvious starting **[[Basic Feasible Solution (BFS)]]**
   - The simplex method will try to drive all artificial variables to zero

4. **Step 4: Check Feasibility of Original Problem**
   - If the optimal value is 0, the original problem is feasible
   - If the optimal value is positive, the original problem has no feasible solutions
   - The final solution gives you a **[[Basic Feasible Solution (BFS)]]** for the original problem

5. **Step 5: Transition to Phase II (Main Simplex)**
   - Remove the artificial variables and restore the original objective function
   - Use the **[[Basic Feasible Solution (BFS)]]** found in Phase I as the starting point
   - Now run the main **[[Simplex Methods]]** iterations (Phase II) to find the optimum

### The Core Strategy

The **[[Phase I]]** strategy can be summarized as:

**Create Easy Problem → Solve It → Extract Starting Point → Begin Real Problem**

The key insight is that we temporarily change the problem to one where finding a starting **[[Basic Feasible Solution (BFS)]]** is trivial, then use the solution to bootstrap the real problem.

### Key Differences from Related Methods

| Method | When to Use | Key Difference |
|--------|-------------|----------------|
| **[[Phase I]]** | When no obvious starting BFS exists | Solves auxiliary problem to find starting point |
| **[[Primal Simplex Method]]** | When you have a starting BFS | Main optimization algorithm; assumes feasible start |
| **[[Dual Simplex Method]]** | Alternative when dual is more convenient | Different approach; still needs starting point |
| **[[Penalty Methods]]** | Any constrained problem | No need for starting feasible point; transforms problem |
| **[[Active-Set Methods]]** | Mixed constraints | Needs feasible starting point; different problem class |

**[[Phase I]]** is necessary when:
- The origin is **not feasible** for your **[[Linear Programming (LP)]]** problem
- Some constraints have **negative right-hand sides** initially  
- You need to convert to **[[Standard Form (LP)]]** but don't have obvious **[[Basic Variables]]**
- No **[[Basic Feasible Solution (BFS)]]** is immediately apparent from the problem structure

### A Simple Example: Starting from Scratch

Let's solve: minimize $x_1 + 2x_2$ subject to:
- $x_1 + x_2 \geq 3$ (rewritten as $-x_1 - x_2 \leq -3$)
- $2x_1 + x_2 \leq 5$
- $x_1, x_2 \geq 0$

The origin $(0,0)$ violates the first constraint: $0 + 0 = 0 \not\geq 3$.

1. **Convert to Standard Form**:
   - $-x_1 - x_2 + s_1 = -3$ (negative right-hand side!)
   - $2x_1 + x_2 + s_2 = 5$
   - We can't start with $s_1$ as a basic variable since it would be $-3 < 0$

2. **Phase I Auxiliary Problem**:
   - Add artificial variable $a_1$: $-x_1 - x_2 + s_1 + a_1 = -3$
   - Keep: $2x_1 + x_2 + s_2 = 5$
   - **New objective**: minimize $a_1$ (we want to eliminate the artificial variable)

3. **Starting BFS**: $(x_1, x_2, s_1, s_2, a_1) = (0, 0, 0, 5, -3)$
   - Wait, this violates non-negativity! We need $a_1 = 3$ to make it feasible
   - Actually: $(0, 0, 0, 5, 3)$ with basic variables $\{s_2, a_1\}$

4. **Phase I Solution**: The simplex method finds $(x_1, x_2, s_1, s_2, a_1) = (1.5, 1.5, 0, 2, 0)$
   - Since $a_1 = 0$, the original problem is feasible!

5. **Phase II**: Start the main problem with BFS $(1.5, 1.5, 0, 2)$ and original objective $x_1 + 2x_2$

**[[Phase I]]** successfully found us a valid starting point $(1.5, 1.5)$ when the obvious choice (origin) wasn't allowed!