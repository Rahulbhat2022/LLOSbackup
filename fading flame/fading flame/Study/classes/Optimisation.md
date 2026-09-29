z ### Comprehensive List of Optimization Terms and Concepts

#### I. Problem Types and Context
*   **[[Nonlinear Programming (NLP)]]:** A problem type involving a **nonlinear objective and/or constraint function**. Can be unconstrained or constrained [1].
*   **[[Linear Programming (LP)]]:** A problem type involving **linear functions** and is **always constrained** [1].
*   **[[Constrained Optimization Problem]]:** The compact form in which problems are often expressed [2].
*   **[[Nonlinear Least-Squares]]:** Minimization of the **squares of the residuals**; the structure of its objective function can be exploited [3].
*   **[[Continuous Variables]]:** The type of variables used in problems throughout the course [1].
*   **[[Smooth Functions]]:** Functions that are **twice differentiable unless stated otherwise** [1].
*   **[[Minimization]]:** The objective throughout the course [1].
*   **[[Residuals]]:** The quantities whose squares are minimized in [[Nonlinear Least-Squares]] [3].

#### II. Optimality and Solutions
*   **[[Optimum]]:** The result computed in the [[Linear Programming (LP)]] case [1].
*   **[[Local Optimum]]:** A point where **there is no better solution “close to this point”** [2, 4]. This is the focus in the [[Nonlinear Programming (NLP)]] case [2].
*   **[[Global Optimum]]:** The best possible solution, computed in the linear case [4].
*   **[[Local Minima]] / [[Local Maxima]]:** Share common characteristics regarding optimality conditions [5].
*   **[[Stationary Points]]:** Points that satisfy the [[First-order Necessary Condition]] but are neither [[Local Minima]] nor [[Local Maxima]] [5].
*   **[[Optimality Conditions]]:** Mathematical characterization of local minima and maxima [5].
*   **[[First-order Necessary Condition]]:** A requirement for optimality, but not a sufficient condition [5].
*   **[[Second-order Conditions]]:** Conditions used in addition to the first-order requirements [6].
*   **[[Feasible Curves]]:** Concepts required for derivation when dealing with **nonlinear equality constraints** [7, 8].
*   **[[Karush-Kuhn-Tucker (KKT) Conditions]]:** The name often used to refer to the **first-order necessary optimality conditions**, especially for nonlinear constraints [9].

#### III. Feasibility and Constraints
*   **[[Feasible Point]]:** A point that satisfies the constraints [2].
*   **[[Infeasible Point]]:** A point that **does not satisfy the constraints** [2].
*   **[[Binding Constraint]]:** An inequality constraint that is **satisfied as equality** [2].
*   **[[Boundary of S]]:** Formed by all [[Feasible Point]]s with **at least one binding constraint** [2].
*   **[[Boundary Point]]:** A feasible point that has a [[Binding Constraint]] [2].
*   **[[Interior of S]]:** All feasible points **without any binding constraint** [2].
*   **[[Interior Point]]:** A point located within the [[Interior of S]] [2].
*   **[[Active Constraints]]:** Information about these is required to **account for the feasible region** (Q4) [10].
*   **[[Constraint Qualification]]:** Also known as regularity conditions, used to ensure optimality analysis is performed for "regular points" [11].

#### IV. Algorithmic Components and Strategy
*   **[[General Solution Algorithm]]:** Taking a **sequence of steps** to attempt to improve the objective function [4].
*   **[[Convergence]]:** The state reached when a point is **locally optimal** [4].
*   **[[Search Direction]]:** How to obtain a good/reasonable direction (Q2) [4].
*   **[[Step Length]]:** How to obtain a good length (Q3) [10].
*   **[[Descent Direction]]:** A desirable direction that ensures the **objective function value “decreases”** [10, 12].
*   **[[Globalization Strategies]]:** Techniques used to adjust [[Search Direction]] and [[Step Length]] when the basic method (like [[Newton's Method]]) fails [13].
*   **[[Sufficient Descent]]:** A condition (angle condition) required for convergence when a direction might otherwise get arbitrarily close to being non-descent [14].
*   **[[Gradient Related Condition]]:** A condition ensuring that a direction does not become "smaller and smaller in value" [14].
*   **[[Line Search]]:** The process of finding a **reasonable step size** along the search direction [15].
*   **[[Exact Line Search]]:** Finding and using the **optimal step size** [15].
*   **[[Armijo Condition]]:** Requires a **“non-trivial” decrease** related to the linear approximation of the function [15].
*   **[[Backtracking]]:** A **decreasing sequence of steps** (e.g., $1, \frac{1}{2}, \frac{1}{4}, \ldots$) used with the [[Armijo Condition]] [16].
*   **[[Armijo Line Search]]:** The combination of the [[Armijo Condition]] and [[Backtracking]] [16].
*   **[[Wolfe Condition]]:** A **more efficient way** than [[Backtracking]] for line search [16].
*   **[[Termination Rules]]:** Criteria for ending the algorithm, often based on limiting precision and convergence of function value/solution sequence [3, 17].
*   **[[Zig-Zagging]]:** Behavior observed in [[Steepest Descent]] where successive search directions are orthogonal, resulting in **slow convergence** [18].

#### V. Mathematical and Analytical Tools
*   **[[Gradient]]:** A **Derivative-related Concept** used to characterize the function’s shape [19].
*   **[[Hessian]]:** A **Derivative-related Concept** (a matrix) used to characterize the function’s shape [19, 20].
*   **[[Taylor Series]]:** A tool from calculus used for approximation, notably in deriving [[Newton's Method]] and [[Gauss-Newton Method]] [19, 21, 22].
*   **[[Null Space]]:** A concept from linear algebra [19]. Any two feasible points differ by a vector in the null space [11].
*   **[[Range Space]]:** A concept from linear algebra [19].
*   **[[Null Space Matrix (Z)]]:** A matrix where $AZ=0$, used to express any vector in the [[Null Space]] [23].
*   **[[Linear Functions]] / [[Quadratic Functions]]:** Basic function types required for technical details [24].
*   **[[Convex Set]] / [[Convex Function]]:** Concepts related to ensuring that the first-order conditions are also sufficient for optimality [6, 25].
*   **[[Jacobian]]:** A related matrix whose rank is considered in the context of constraint qualifications [11].
*   **[[Lagrange Multipliers ($\lambda$)]]:** Vector elements that **represent the change in the optimal objective function value for unit change in the corresponding right-hand side** [26].
*   **[[Lagrangian Function]]:** A function whose stationary point must correspond to a (local) optimum $x$ together with some $\lambda$ [27].
*   **[[Reduced Gradient]] / [[Reduced Hessian]]:** Optimality concepts obtained after reformulating a problem with linear equality constraints to eliminate constraints [28].
*   **[[Complementary Slackness]]:** A condition that allows the necessary optimality condition to be stated without explicitly splitting constraints into active and non-active ones [29].
*   **[[Reduced Hessian is Positive Definite]]:** A condition that, if met, provides sufficient conditions for optimality [30].

#### VI. Computational Issues (Sensitivity)
*   **[[Sensitivity (Conditioning)]]:** Measurement of how much the **solution changes relative to the change of data values** [24].
*   **[[Ill-conditioned Problem]]:** A problem where the solution is **very sensitive to the change of data values** [24].
*   **[[Input Data Errors]]:** One reason why sensitivity is a concern, alongside inaccuracies in computer calculations [24].


### Optimization Methods

| Method / Class                                                   | Concept                                                                                                                                      | Use Case / Utility                                                                                                                |     |     |
| :--------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| **[[General Solution Algorithm]]**                               | A fundamental approach using a **sequence of steps** to attempt to improve the objective function.                                           | The general structure underlying most specific optimization methods.                                                              |     |     |
| **[[Newton's Method for Minimization]]**                         | Derived using the **first-order necessary optimality condition** or the **second-order Taylor series approximation**.                        | Generally **superior** to [[Steepest Descent]] in convergence; used for [[Minimization]] problems.                                |     |     |
| **[[Newton's Method for Nonlinear Equations]]** (Newton-Raphson) | Generates a sequence of points as approximate solutions that converges if it approaches a solution of the equation.                          | Used for **root finding** (solving nonlinear equations).                                                                          |     |     |
| **[[Steepest Descent]]**                                         | The search direction is the **opposite of the gradient vector**.                                                                             | A basic method that ensures strict improvements. Can exhibit **slow convergence** due to zig-zagging.                             |     |     |
| **[[Quasi-Newton Methods]]**                                     | Uses a **"simpler matrix" (B-matrix)** instead of the expensive Hessian.                                                                     | Addresses the computational expense of [[Newton's Method]]. The B-matrix should exhibit properties like symmetry.                 |     |     |
| **[[BFGS]]** (Broyden, Fletcher, Goldfarb, and Shanno)           | A specific update formula in the [[Broyden Class]] (where $\phi=0$).                                                                         | One of the common [[Quasi-Newton Methods]]; **more efficient** than [[DFP]].                                                      |     |     |
| **[[DFP]]** (Davidon, Fletcher, and Powell)                      | A specific update formula in the [[Broyden Class]] (where $\phi=1$).                                                                         | An **older and less efficient** [[Quasi-Newton Method]] compared to [[BFGS]].                                                     |     |     |
| **[[Symmetric Rank-one Update]]**                                | A rank-one matrix used to update the B-matrix iteratively.                                                                                   | Guarantees the **[[Secant Condition]]** and preserves symmetry, though positive definiteness is not guaranteed.                   |     |     |
| **[[Secant Method]]**                                            | A related "derivative free" method to [[Newton's Method]] for [[Nonlinear Equations]].                                                       | Used to approximate the derivative using values from iterates. Can also approximate the second-order derivative in one dimension. |     |     |
| **[[Gauss-Newton Method]]**                                      | Derived using **[[Taylor Approximation]]** by omitting the second term (Hessian sum).                                                        | Used for solving **[[Nonlinear Least-Squares]]** problems.                                                                        |     |     |
| **[[Levenberg-Marquardt Method]]**                               | A modification of the [[Gauss-Newton Method]].                                                                                               | Used when the residual is large to prevent breakdown; replaces the omitted Hessian term with a **scaled identity matrix**.        |     |     |
| **[[Compass Search]]** (Pattern Search)                          | A **[[Derivative-Free]]** method that uses a pattern of trial points.                                                                        | Useful when the function is not differentiable everywhere or derivative calculation is time-consuming. Converges linearly.        |     |     |
| **[[Line Search]]**                                              | A method to find a reasonable [[Step Length]] along the [[Search Direction]].                                                                | Used to address issues where the step size might be too big or too small.                                                         |     |     |
| **[[Armijo Line Search]]**                                       | A technique combining the **[[Armijo Condition]]** (requires non-trivial decrease related to linear approximation) and **[[Backtracking]]**. | A strategy for finding a step size that guarantees a "non-trivial" decrease.                                                      |     |     |
| **[[Backtracking]]**                                             | A decreasing sequence of steps (e.g., $1, \frac{1}{2}, \frac{1}{4}, \ldots$).                                                                | Used with the [[Armijo Condition]] to stop once the condition is fulfilled (i.e., not taking smaller steps than necessary).       |     |     |
| **[[Wolfe Condition]]**                                          | A more efficient alternative to [[Backtracking]] for line search.                                                                            | Used to find a more efficient [[Step Length]].                                                                                    |     |     |
| **[[Globalization Strategies]]**                                 | Techniques like adjusting search direction and step size.                                                                                    | Used to ensure convergence when basic methods like [[Newton's Method]] fail or may not produce a descent direction.               |     |     |


### Optimization Methods and Algorithmic Classes

| Method / Class                                 | Concept                                                                                                                                                         | Use Case / Utility                                                                                                                               |
| :--------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| **[[Simplex Methods]]**                        | A method that visits a **sequence of vertices** ([[Basic Feasible Solution (BFS)]]), moving to an adjacent one in each iteration.                               | Used to solve [[Linear Programming (LP)]] problems to optimality.                                                                                |
| **[[Primal Simplex Method]]**                  | The general version of the Simplex Method presented in the sources.                                                                                             | Standard implementation of the [[Simplex Methods]].                                                                                              |
| **[[Dual Simplex Method]]**                    | An alternative version of the [[Simplex Method]].                                                                                                               | Used as an alternative to the primal version.                                                                                                    |
| **[[Phase I]]**                                | A procedure used to **find an initial feasible BFS** when the origin is not necessarily feasible.                                                               | Used to provide a starting point for the main Simplex iterations.                                                                                |
| **[[Reduced Newton Direction]]**               | A specific update direction resulting from applying [[Newton's Method]] to the **reformulated unconstrained problem** derived from linear equality constraints. | Used to update the solution vector $x$ for problems with [[Linear Equality Constraints]].                                                        |
| **[[Active-Set Methods]]**                     | Methods designed to **manage and update an active constraint set** (a guess of which constraints are active at optimum).                                        | Used for solving constrained optimization problems by leveraging existing methods for equality constraints once the active set is assumed known. |
| **[[Sequential Quadratic Programming (SQP)]]** | A method where the Newton's update for the stationary point of the [[Lagrangian Function]] is equivalent to solving a **constrained quadratic problem**.        | A method for solving constrained optimization problems by solving a sequence of quadratic programming subproblems.                               |
| **[[Penalty Methods]]**                        | Use a **modified objective function** with an **increasing [[Penalty Parameter ($\rho$)]]** to make infeasible solutions unattractive.                          | Used to transform a constrained problem into an unconstrained one; **no initial feasible point is required**.                                    |
| **[[Barrier Methods]]**                        | Use a **modified objective function** with a **decreasing [[Barrier Parameter ($\mu$)]]** to make infeasible solutions unattractive.                            | Used to transform a constrained problem into an unconstrained one; **requires an initial feasible point**.                                       |

---

### Key Optimization Terms and Concepts

- **[[Polytope / Polyhedron]]:** The **feasible region** of a [[Linear Programming (LP)]] problem.
- **[[Convex Optimization]]:** A class of problems of which [[Linear Programming (LP)]] is a **special case**.
- **[[Corner Points]]:** The informal term used for optimal points in the geometric view of LP, formally defined as [[Extreme Point]]s.
- **[[Extreme Point (Vertex)]]:** A point of a [[Convex Set]] that **cannot be expressed using a convex combination of other points**.
f(λx + (1-λ)y) ≤ λf(x) + (1-λ)f(y)
- **[[Convex Combination]]:** The mathematical expression of a point that involves a combination of other points.
- **[[Representation Theorem (Theorem 4.6)]]:** States that any non-extreme point can be expressed using a [[Convex Combination]] of [[Extreme Point]]s.
- **[[Ray (Direction of Unboundedness)]]:** A notion incorporated in the general [[Representation Theorem]] for unbounded polyhedrons.
- **[[Standard Form (LP)]]:** The algebraic form of LP requiring **equality constraints, non-negative variables, and non-negative right-hand side**.
- **[[Basic Solution]]:** A solution where $Ax=b$ and the columns of $A$ for non-zero elements of $x$ are **linearly independent**. Obtained by setting $n-m$ variables to zero.
- **[[Basic Variables]]:** The $m$ variables that are solved for when $n-m$ are set to zero.
- **[[Non-Basic Variables]]:** The $n-m$ variables that are set to the value zero.
- **[[Basis Matrix (B)]]:** Formed by the columns in $A$ corresponding to the [[Basic Variables]].
- **[[Basic Feasible Solution (BFS)]]:** A [[Basic Solution]] where the solution $x$ is non-negative ($x \ge 0$). [[Extreme Point]]s are equal to BFSs.
- **[[Adjacent Extreme Points]]:** Two extreme points that are **connected by an edge**.
- **[[Adjacent Basis Matrixes (Bases)]]:** Basis matrices that **differ in one column**.
- **[[Degeneracy (LP)]]:** Occurs if a [[Basic Feasible Solution (BFS)]] has **zero-valued basic variables**.
- **[[Reduced Cost Vector]]:** Indicates the **change per unit in the objective function** if a [[Non-Basic Variable]] increases its value from zero.
- **[[Entering Variable]]:** A [[Non-Basic Variable]] selected to **become basic** in a basis matrix update, typically chosen because it has the most negative reduced cost.
- **[[Leaving Variable]]:** A [[Basic Variable]] that is forced to **become non-basic** (reaching zero first) during the basis update, ensuring all variables remain non-negative.
- **[[Tableau Form]]:** The structure used to execute the [[Simplex Method]] iterations via **updating the entries**.
- **[[Cycling]]:** The worse-case risk associated with [[Degeneracy (LP)]], where the method updates the basis but **stays at the same point** (step size equals zero).
- **[[Bland's Rule]] / [[Perturbation]]:** Two solutions mentioned to handle [[Degeneracy (LP)]] and prevent cycling.
- **[[Primal (LP)]]:** The name given to the **original LP** problem.
- **[[Dual LP]]:** The corresponding LP problem generated for every [[Primal (LP)]].
- **[[Weak Duality (Theorem 6.4)]]:** States that any feasible solution of the primal gives an **upper bound** for the dual (and vice versa for lower bounds).
- **[[Strong Duality (Theorem 6.9)]]:** States that if either the primal or dual has a bounded optimum, then the optimal objective values are **equal**.
- **[[Duality Table]]:** A tool summarizing the correspondence between variables and constraints when forming the [[Dual LP]].
- **[[Complementary Slackness (LP)]] (Theorem 6.11):** At optimum, a primal/dual variable is zero, or the slack of the corresponding constraint of the dual/primal is zero.
- **[[Non-negative Multipliers]]:** Required for optimality conditions under linear inequality constraints.
- **[[Modified Objective Function]]:** Used in [[Barrier Methods]] and [[Penalty Methods]] to make **infeasible solutions “unattractive”**.
- **[[Penalty Parameter ($\rho$)]]:** The parameter in [[Penalty Methods]]; the original problem is approached as $\rho$ gets larger.
- **[[Barrier Parameter ($\mu$)]]:** The parameter in [[Barrier Methods]]; the original problem is approached as $\mu$ gets smaller.
- **[[Constrained Quadratic Problem]]:** A type of problem whose first-order condition is equivalent to the [[Sequential Quadratic Programming (SQP)]] formulation.
- **[[Lagrangian Function]]:** A function whose stationary point satisfies the optimality conditions for both linear equality and inequality constraints.
- **[[Constraint Qualification]]:** Also known as regularity conditions.
- **[[Unconstrained Optimization]]:** The target formulation for constrained problems when linear equality constraints can be eliminated.
- **[[Linear Equality Constraints]]:** A type of constraint for which methods exist, often leading to a **reformulation** as [[Unconstrained Optimization]].