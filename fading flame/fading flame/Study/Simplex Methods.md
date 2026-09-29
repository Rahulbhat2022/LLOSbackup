## The Simplex Algorithm: A Simple Guide

The **[[Simplex Algorithm]]** solves **[[Linear Programming]]** problems by moving from one corner of the feasible region to another until the best solution is found.

---

### ✅ Intuitive Understanding

The feasible region of a linear programming problem is a **convex polytope** (a multi-dimensional polygon). The optimal solution always lies at a **vertex (corner)** of this polytope.

Think of it like standing at a corner of a polygon and wanting to reach the highest point (maximum profit). Instead of searching everywhere:
- You move along the edges to adjacent corners.
- At each step, you pick the direction that improves your objective the most.
- Repeat until no adjacent corner is better.

---

### ✅ What Can It Be Used For?

Simplex is widely used in:
- **Operations Research**: Resource allocation, production planning.
- **Supply Chain Optimization**: Minimizing transportation costs.
- **Finance**: Portfolio optimization.
- **Manufacturing**: Scheduling and capacity planning.
- **Energy Systems**: Optimal power flow.

Anywhere you have **linear relationships** and need to optimize under constraints, Simplex shines.

---

### ✅ How Does It Compare to Similar Methods?

**1. Simplex vs. Interior Point Methods**
- Simplex moves along the **boundary** (edges).
- Interior Point moves through the **interior** using barrier functions.
- Simplex is great for small/medium problems; Interior Point is better for very large ones.

**2. Simplex vs. Gradient-Based Methods**
- Gradient methods (like Steepest Descent) are for **continuous, unconstrained or nonlinear problems**.
- Simplex is for **linear, constrained problems**.

**3. Simplex vs. Branch and Bound**
- Branch and Bound handles **Integer Programming**.
- Simplex can’t handle integer constraints directly but is often used inside mixed-integer solvers.

---

### ✅ Why is Simplex Still Relevant?
- **Conceptually simple** and easy to implement.
- Provides **exact solutions** at vertices.
- **Robust for practical-sized problems**.

---

## ✅ Variants of the Simplex Method

### **Primal Simplex Method**
- Starts with a **feasible solution** (all constraints satisfied).
- Iteratively improves the **objective function** while maintaining feasibility.
- Commonly used when an initial feasible solution is easy to find.

#### **Mathematical Steps**
1. Write the LP in **standard form**:
$$
\text{Maximize } Z = c^T x \\
\text{Subject to } Ax = b, \; x \geq 0
$$

2. Form the **Simplex Tableau**:
- Rows: Constraints
- Columns: Decision variables + Slack variables + Objective row

3. **Optimality Check**:
- If all reduced costs in the objective row ≥ 0 → Optimal.

4. **Pivoting**:
- **Entering variable**: Most negative reduced cost.
- **Leaving variable**: Minimum ratio test:
$$
\text{Ratio} = \frac{\text{Right-hand side}}{\text{Pivot column entry}}
$$

5. Update tableau using **Gauss-Jordan elimination**.

---

### **Dual Simplex Method**
- Starts with an **optimal but infeasible solution**.
- Iteratively restores feasibility while keeping the objective optimal.
- Useful when constraints change or new constraints are added.

#### **Mathematical Steps**
1. Start with a tableau where the **objective row is optimal** but some RHS values are negative (infeasible).

2. **Feasibility Check**:
- If all RHS ≥ 0 → Feasible → Done.

3. **Pivoting**:
- **Leaving variable**: Row with most negative RHS.
- **Entering variable**: Column with negative coefficient in that row that minimizes:
$$
\frac{\text{Reduced cost}}{\text{Pivot row entry}}
$$

4. Perform pivot and update tableau.

---

### **Main Difference**
- **Primal Simplex**: Feasibility first → improve objective.
- **Dual Simplex**: Optimality first → restore feasibility.

---

### The Core Formula
$$
x_{k+1} = x_k + \alpha_k p_k
$$

---

### Example: Maximizing Profit
Maximize:
$$
Z = 3x_1 + 2x_2
$$

Subject to:
$$
x_1 + x_2 \leq 4 \\
x_1 \leq 2 \\
x_2 \leq 3 \\
x_1, x_2 \geq 0
$$

Add slack variables:
$$
x_1 + x_2 + s_1 = 4 \\
x_1 + s_2 = 2 \\
x_2 + s_3 = 3
$$

Initial solution:
$x_1 = 0, x_2 = 0, s_1 = 4, s_2 = 2, s_3 = 3$