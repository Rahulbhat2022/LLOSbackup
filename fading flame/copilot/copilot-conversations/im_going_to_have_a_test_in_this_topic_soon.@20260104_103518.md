---
epoch: 1767519318259
modelKey: "claude-sonnet-4-20250514|anthropic"
topic: "LaTeX Test Cheat Sheet Request"


tags:
  - copilot-conversation
---

**user**: im going to have a test in this topic soon.  the test focuses on methods and their applications. i want you to make a me a latex formatted cheat sheet as it is permitted on the test. the parameters are 2 pages latex formatted font size 10. use latex to format it as tihgtly as possible so i can fit as much info as possible on 2 a4 pages. the content should focus on: different methods and their key differences(abbiveate use single words i need a quick reminder since i already know most of this stuff), always have with formulas, and keep notation consistent(dont use different varaibles when denoting the same thing between methods). add to this page a small note on defintion of convexity. and the theorum of proof for it. 
[Context: Notes: fading flame/Study/classes/Optimisation.md]
[Timestamp: 2026/01/04 10:35:18]

**ai**: 
<think>The user wants a LaTeX formatted cheat sheet for an optimization test. They want it to be:
1. 2 pages A4
2. Font size 10
3. Tightly formatted to fit maximum information
4. Focus on methods and their key differences (abbreviated)
5. Include formulas
6. Consistent notation
7. Add definition of convexity and its theorem

From the content, I need to extract the key methods and their formulas/characteristics. Let me organize this:

Key Methods:
1. Newton's Method
2. Steepest Descent
3. Quasi-Newton (BFGS, DFP)
4. Gauss-Newton
5. Levenberg-Marquardt
6. Compass Search
7. Simplex Method
8. Active-Set Methods
9. SQP
10. Penalty Methods
11. Barrier Methods

I'll need to include:
- Formulas for each method
- Key characteristics
- Line search conditions (Armijo, Wolfe)
- Optimality conditions
- Convexity definition and theorem

I'll use compact LaTeX formatting with small margins, multiple columns, and tight spacing.</think>```latex
\documentclass[10pt,a4paper]{article}
\usepackage[margin=0.3in]{geometry}
\usepackage{amsmath,amssymb,multicol,array}
\usepackage{graphicx}
\setlength{\columnsep}{0.2in}
\setlength{\parindent}{0pt}
\setlength{\parskip}{1pt}

\begin{document}
\begin{multicols}{3}
\tiny

\section*{Unconstrained Methods}

\textbf{Newton's Method}
$x_{k+1} = x_k - H_f(x_k)^{-1}\nabla f(x_k)$
- Uses Hessian $H_f$
- Quadratic convergence
- Expensive: $O(n^3)$ per iter
- May fail if $H_f$ not pos-def

\textbf{Steepest Descent}
$x_{k+1} = x_k - \alpha_k \nabla f(x_k)$
- Direction: $d_k = -\nabla f(x_k)$
- Linear convergence
- Zig-zagging behavior
- Simple, robust

\textbf{Quasi-Newton}
$x_{k+1} = x_k - \alpha_k B_k^{-1}\nabla f(x_k)$
$B_{k+1} = B_k + \Delta B_k$ (rank-1/2 update)

\textbf{BFGS Update:}
$B_{k+1} = B_k - \frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k} + \frac{y_k y_k^T}{y_k^T s_k}$

\textbf{DFP Update:}
$H_{k+1} = H_k - \frac{H_k y_k y_k^T H_k}{y_k^T H_k y_k} + \frac{s_k s_k^T}{y_k^T s_k}$

Where: $s_k = x_{k+1} - x_k$, $y_k = \nabla f(x_{k+1}) - \nabla f(x_k)$
- Secant condition: $B_{k+1}s_k = y_k$
- BFGS > DFP (more efficient)
- Superlinear convergence

\textbf{Gauss-Newton} (Nonlinear LS)
$\min \frac{1}{2}\|r(x)\|^2$ where $r(x) = [r_1(x),...,r_m(x)]^T$
$x_{k+1} = x_k - (J_k^T J_k)^{-1}J_k^T r_k$
$J_k = \nabla r(x_k)$ (Jacobian)
- Ignores 2nd-order terms
- Fast for small residuals
- May fail for large residuals

\textbf{Levenberg-Marquardt}
$x_{k+1} = x_k - (J_k^T J_k + \mu_k I)^{-1}J_k^T r_k$
- $\mu_k > 0$: damping parameter
- $\mu_k$ large $\rightarrow$ steepest descent
- $\mu_k$ small $\rightarrow$ Gauss-Newton
- Robust for large residuals

\textbf{Compass Search} (Derivative-Free)
- Pattern search with coordinate directions
- $\{e_1, -e_1, e_2, -e_2, ..., e_n, -e_n\}$
- Linear convergence
- Use when $\nabla f$ unavailable

\section*{Line Search}

\textbf{Exact Line Search:}
$\alpha^* = \arg\min_{\alpha > 0} f(x_k + \alpha d_k)$

\textbf{Armijo Condition:}
$f(x_k + \alpha d_k) \leq f(x_k) + c_1\alpha\nabla f(x_k)^T d_k$
- $0 < c_1 < 1$ (typically $c_1 = 10^{-4}$)
- Ensures sufficient decrease

\textbf{Wolfe Conditions:}
1. Armijo: $f(x_k + \alpha d_k) \leq f(x_k) + c_1\alpha\nabla f(x_k)^T d_k$
2. Curvature: $\nabla f(x_k + \alpha d_k)^T d_k \geq c_2\nabla f(x_k)^T d_k$
- $0 < c_1 < c_2 < 1$ (e.g., $c_2 = 0.9$)

\textbf{Backtracking:}
$\alpha_0 = 1$, $\alpha_{i+1} = \tau\alpha_i$ ($0 < \tau < 1$)
Stop when Armijo satisfied

\section*{Optimality Conditions}

\textbf{Unconstrained:}
1st-order: $\nabla f(x^*) = 0$
2nd-order: $H_f(x^*) \succ 0$ (pos-def)

\textbf{Equality Constraints:}
$\min f(x)$ s.t. $h(x) = 0$
$\mathcal{L}(x,\lambda) = f(x) + \lambda^T h(x)$
KKT: $\nabla_x \mathcal{L} = \nabla f(x^*) + \nabla h(x^*)^T \lambda^* = 0$
$h(x^*) = 0$

\textbf{Inequality Constraints:}
$\min f(x)$ s.t. $g(x) \leq 0$, $h(x) = 0$
$\mathcal{L}(x,\lambda,\mu) = f(x) + \lambda^T h(x) + \mu^T g(x)$
KKT: $\nabla_x \mathcal{L} = 0$, $h(x^*) = 0$, $g(x^*) \leq 0$
$\mu^* \geq 0$, $\mu_i^* g_i(x^*) = 0$ (complementary slackness)

\section*{Constrained Methods}

\textbf{Reduced Newton Method}
Eliminate linear equality constraints $Ax = b$:
$x = x_0 + Zv$ where $AZ = 0$
$\min f(x_0 + Zv)$ (unconstrained in $v$)
Newton step: $Z^T H_f(x_k) Z \Delta v = -Z^T \nabla f(x_k)$

\textbf{Active-Set Methods}
- Guess active set $\mathcal{W}_k$
- Solve equality problem: $\min f(x)$ s.t. $g_i(x) = 0, i \in \mathcal{W}_k$
- Update $\mathcal{W}_k$ (add/remove constraints)

\textbf{Sequential Quadratic Programming (SQP)}
Solve QP subproblem:
$\min_p \nabla f(x_k)^T p + \frac{1}{2}p^T B_k p$
s.t. $\nabla h(x_k)^T p + h(x_k) = 0$
$\nabla g(x_k)^T p + g(x_k) \leq 0$
$x_{k+1} = x_k + \alpha_k p_k$

\textbf{Penalty Methods}
$\min f(x) + \rho P(x)$
Exterior: $P(x) = \sum_i \max(0, g_i(x))^2 + \sum_j h_j(x)^2$
- $\rho \to \infty$
- No initial feasible point needed

\textbf{Barrier Methods}
$\min f(x) + \mu B(x)$
Logarithmic: $B(x) = -\sum_i \ln(-g_i(x))$
- $\mu \to 0^+$
- Requires initial feasible point
- Stay strictly feasible

\section*{Linear Programming}

\textbf{Standard Form:}
$\min c^T x$ s.t. $Ax = b$, $x \geq 0$
- $A$: $m \times n$, rank$(A) = m$, $m < n$

\textbf{Basic Solution:}
Set $n-m$ variables to 0, solve $Ax = b$
$x_B = B^{-1}b$ where $B$ is $m \times m$ basis matrix

\textbf{Basic Feasible Solution (BFS):}
Basic solution with $x \geq 0$
BFS $\leftrightarrow$ Extreme Point

\textbf{Simplex Method:}
1. Start with BFS
2. Check optimality: $c_N^T - c_B^T B^{-1}N \geq 0$
3. Choose entering variable (most negative reduced cost)
4. Choose leaving variable (min ratio test)
5. Pivot and repeat

\textbf{Reduced Cost:} $\bar{c}_j = c_j - c_B^T B^{-1}A_j$

\textbf{Dual Problem:}
Primal: $\min c^T x$ s.t. $Ax = b$, $x \geq 0$
Dual: $\max b^T y$ s.t. $A^T y \leq c$

\textbf{Strong Duality:} $c^T x^* = b^T y^*$

\textbf{Complementary Slackness:}
$x_j^*(c_j - A_j^T y^*) = 0$, $y_i^*(b_i - A_i^T x^*) = 0$

\section*{Convexity}

\textbf{Definition:}
Set $S$ is convex if $\forall x,y \in S$, $\lambda \in [0,1]$:
$\lambda x + (1-\lambda)y \in S$

Function $f$ is convex if $\forall x,y$, $\lambda \in [0,1]$:
$f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y)$

\textbf{Key Theorems:}
1. $f$ convex $\Rightarrow$ every local min is global min
2. $f$ convex, differentiable $\Rightarrow f(y) \geq f(x) + \nabla f(x)^T(y-x)$
3. $f$ twice differentiable $\Rightarrow f$ convex $\Leftrightarrow H_f(x) \succeq 0$ $\forall x$

\textbf{Jensen's Inequality:}
$f(\sum_{i=1}^n \lambda_i x_i) \leq \sum_{i=1}^n \lambda_i f(x_i)$
where $\sum \lambda_i = 1$, $\lambda_i \geq 0$

\section*{Convergence Rates}

\textbf{Linear:} $\|x_{k+1} - x^*\| \leq c\|x_k - x^*\|$, $0 < c < 1$
\textbf{Superlinear:} $\lim_{k \to \infty} \frac{\|x_{k+1} - x^*\|}{\|x_k - x^*\|} = 0$
\textbf{Quadratic:} $\|x_{k+1} - x^*\| \leq c\|x_k - x^*\|^2$

Method Rates:
- Steepest Descent: Linear
- Newton: Quadratic (near solution)
- Quasi-Newton: Superlinear
- Gauss-Newton: Quadratic (small residuals)

\section*{Key Notation}

$x_k$: iterate at step $k$
$\nabla f(x)$: gradient
$H_f(x)$: Hessian matrix
$\alpha_k$: step size
$d_k$: search direction
$B_k$: quasi-Newton approximation
$\lambda, \mu$: Lagrange multipliers
$\mathcal{L}$: Lagrangian function
$A, b, c$: LP matrices/vectors
$g(x), h(x)$: inequality/equality constraints
$\rho, \mu$: penalty/barrier parameters

\end{multicols}
\end{document}
```
[Timestamp: 2026/01/04 10:36:14]

**user**: you can include way more, this was barely 1 page. and reduce the size of the sections
[Context: Notes: fading flame/Study/classes/Optimisation.md]
[Timestamp: 2026/01/04 10:38:18]

**ai**: 
<think>The user is right - I need to pack much more information into the 2-page cheat sheet and reduce the section sizes. Looking at the comprehensive optimization notes provided, there's a lot more content I can include. I should:

1. Make sections smaller/more compact
2. Include more methods and formulas
3. Add more theoretical content
4. Include more specific formulas and conditions
5. Add more LP content
6. Include more constraint handling methods
7. Add sensitivity analysis
8. Include more optimality conditions

Let me restructure this to be much denser and include way more content.</think>```latex
\documentclass[10pt,a4paper]{article}
\usepackage[margin=0.25in]{geometry}
\usepackage{amsmath,amssymb,multicol,array,enumitem}
\setlength{\columnsep}{0.15in}
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.5pt}
\setlength{\itemsep}{0pt}

\begin{document}
\begin{multicols}{4}
\scriptsize

\section*{Unconstrained Methods}

\textbf{Newton:} $x_{k+1} = x_k - H_f^{-1}\nabla f$
• Quadratic convergence
• $O(n^3)$ per iteration
• Requires $H_f \succ 0$

\textbf{Steepest Descent:} $d_k = -\nabla f$
• Linear convergence
• Zig-zagging on ill-conditioned problems

\textbf{BFGS:} $B_{k+1} = B_k - \frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k} + \frac{y_k y_k^T}{y_k^T s_k}$
\textbf{DFP:} $H_{k+1} = H_k - \frac{H_k y_k y_k^T H_k}{y_k^T H_k y_k} + \frac{s_k s_k^T}{y_k^T s_k}$
• $s_k = x_{k+1} - x_k$, $y_k = \nabla f_{k+1} - \nabla f_k$
• Secant: $B_{k+1}s_k = y_k$
• BFGS updates $B$, DFP updates $H$

\textbf{SR1:} $B_{k+1} = B_k + \frac{(y_k - B_k s_k)(y_k - B_k s_k)^T}{(y_k - B_k s_k)^T s_k}$
• Rank-1 update
• May lose pos-def

\textbf{Broyden Class:} $B_{k+1} = (1-\phi)B_{k+1}^{BFGS} + \phi B_{k+1}^{DFP}$
• $\phi = 0$: BFGS, $\phi = 1$: DFP

\section*{Nonlinear Least Squares}

\textbf{Problem:} $\min \frac{1}{2}\|r(x)\|^2 = \frac{1}{2}\sum_{i=1}^m r_i(x)^2$
$\nabla f = J^T r$, $H_f = J^T J + \sum_{i=1}^m r_i \nabla^2 r_i$

\textbf{Gauss-Newton:} $x_{k+1} = x_k - (J_k^T J_k)^{-1}J_k^T r_k$
• Ignores $\sum r_i \nabla^2 r_i$ term
• Fast for small residuals

\textbf{Levenberg-Marquardt:} $(J_k^T J_k + \mu_k I)\Delta x = -J_k^T r_k$
• $\mu_k$ large $\rightarrow$ steepest descent
• $\mu_k$ small $\rightarrow$ Gauss-Newton
• Robust for large residuals

\section*{Line Search}

\textbf{Exact:} $\alpha^* = \arg\min_{\alpha > 0} f(x + \alpha d)$

\textbf{Armijo:} $f(x + \alpha d) \leq f(x) + c_1\alpha\nabla f^T d$
• $c_1 \in (0,1)$, typically $10^{-4}$

\textbf{Wolfe:}
1. Armijo condition
2. $\nabla f(x + \alpha d)^T d \geq c_2\nabla f(x)^T d$
• $0 < c_1 < c_2 < 1$

\textbf{Strong Wolfe:}
2'. $|\nabla f(x + \alpha d)^T d| \leq c_2|\nabla f(x)^T d|$

\textbf{Backtracking:} $\alpha_0 = 1$, $\alpha_{j+1} = \tau\alpha_j$
• $\tau \in (0,1)$, stop when Armijo satisfied

\section*{Derivative-Free}

\textbf{Compass Search:}
• Directions: $\{\pm e_1, \pm e_2, ..., \pm e_n\}$
• Pattern search with step reduction
• Linear convergence

\textbf{Nelder-Mead Simplex:}
• Reflection, expansion, contraction, shrinkage
• $n+1$ vertices in $\mathbb{R}^n$

\section*{Optimality Conditions}

\textbf{Unconstrained:}
1st: $\nabla f(x^*) = 0$
2nd: $H_f(x^*) \succ 0$

\textbf{Equality Constrained:}
$\min f(x)$ s.t. $h(x) = 0$
$\mathcal{L} = f(x) + \lambda^T h(x)$
KKT: $\nabla f + \nabla h^T \lambda = 0$, $h(x) = 0$
2nd: $Z^T H_{xx} \mathcal{L} Z \succ 0$ where $AZ = 0$

\textbf{Inequality Constrained:}
$\min f(x)$ s.t. $g(x) \leq 0$
$\mathcal{L} = f(x) + \mu^T g(x)$
KKT: $\nabla f + \nabla g^T \mu = 0$
$g(x) \leq 0$, $\mu \geq 0$, $\mu_i g_i(x) = 0$

\textbf{General Form:}
$\min f(x)$ s.t. $h(x) = 0$, $g(x) \leq 0$
$\mathcal{L} = f + \lambda^T h + \mu^T g$
$\nabla_x \mathcal{L} = 0$, $h = 0$, $g \leq 0$, $\mu \geq 0$, $\mu^T g = 0$

\textbf{Constraint Qualification:}
LICQ: $\{\nabla h_i, \nabla g_j : j \in \mathcal{A}\}$ linearly independent
MFCQ: No feasible direction for $\nabla g_j^T d < 0, j \in \mathcal{A}$

\section*{Constrained Methods}

\textbf{Null Space Method:}
$Ax = b \Rightarrow x = x_0 + Zv$ where $AZ = 0$
Reduced problem: $\min f(x_0 + Zv)$
Newton: $Z^T H_f Z \Delta v = -Z^T \nabla f$

\textbf{Range Space Method:}
$\begin{bmatrix} H & A^T \\ A & 0 \end{bmatrix} \begin{bmatrix} p \\ \lambda \end{bmatrix} = \begin{bmatrix} -\nabla f \\ 0 \end{bmatrix}$

\textbf{Active Set:}
1. Guess active set $\mathcal{W}_k$
2. Solve EQP: $\min \nabla f^T p + \frac{1}{2}p^T H p$ s.t. $\nabla g_i^T p = 0, i \in \mathcal{W}_k$
3. If $p = 0$: check $\mu_i \geq 0$, drop constraint if $\mu_i < 0$
4. Else: find blocking constraint, add to $\mathcal{W}_k$

\textbf{SQP:}
Solve QP: $\min \nabla f^T p + \frac{1}{2}p^T B p$
s.t. $\nabla h^T p + h = 0$, $\nabla g^T p + g \leq 0$
Merit function: $\phi(x) = f(x) + \sum \sigma_i |h_i| + \sum \sigma_j \max(0, g_j)$

\textbf{Penalty:} $\min f(x) + \rho P(x)$
Exterior: $P = \sum \max(0, g_i)^2 + \sum h_j^2$
Exact: $P = \sum |h_j| + \sum \max(0, g_j)$
• $\rho \to \infty$, no initial feasible point needed

\textbf{Barrier:} $\min f(x) + \mu B(x)$
Log: $B = -\sum \ln(-g_i)$, $g_i < 0$
• $\mu \to 0^+$, requires initial feasible point

\section*{Linear Programming}

\textbf{Standard Form:}
$\min c^T x$ s.t. $Ax = b$, $x \geq 0$
$A \in \mathbb{R}^{m \times n}$, $\text{rank}(A) = m < n$

\textbf{Basic Solution:}
Choose basis $B$ ($m \times m$), set $x_N = 0$
$x_B = B^{-1}b$

\textbf{BFS:} Basic solution with $x \geq 0$
BFS $\leftrightarrow$ Extreme Point $\leftrightarrow$ Vertex

\textbf{Optimality:} $\bar{c}_N^T = c_N^T - c_B^T B^{-1}N \geq 0$
Reduced cost: $\bar{c}_j = c_j - c_B^T B^{-1}A_j$

\textbf{Simplex Tableau:}
$\begin{array}{c|c|c} & x_B & x_N \\ \hline x_B & I & B^{-1}N \\ \hline z & c_B^T & c_B^T B^{-1}N - c_N^T \end{array}$

\textbf{Entering:} Most negative $\bar{c}_j$
\textbf{Leaving:} Min ratio: $\min_i \{b_i/a_{iq} : a_{iq} > 0\}$

\textbf{Degeneracy:} BFS with zero basic variables
Risk: cycling. Solutions: Bland's rule, perturbation

\textbf{Phase I:} Find initial BFS
$\min \sum w_i$ s.t. $Ax + w = b$, $x, w \geq 0$

\section*{Duality}

\textbf{Primal:} $\min c^T x$ s.t. $Ax = b$, $x \geq 0$
\textbf{Dual:} $\max b^T y$ s.t. $A^T y \leq c$

\textbf{General Form:}
$\min c^T x$ s.t. $Ax \leq b$ $\leftrightarrow$ $\max b^T y$ s.t. $A^T y \geq c$, $y \geq 0$

\textbf{Weak Duality:} $c^T x \geq b^T y$ for feasible $x, y$
\textbf{Strong Duality:} $c^T x^* = b^T y^*$ at optimum

\textbf{Complementary Slackness:}
$x_j^*(c_j - A_j^T y^*) = 0$
$y_i^*(b_i - A_i^T x^*) = 0$

\textbf{Economic Interpretation:}
$\lambda_i = \frac{\partial z^*}{\partial b_i}$ (shadow price)

\section*{Sensitivity Analysis}

\textbf{RHS Changes:} $b \to b + \Delta b$
New solution: $x_B^{new} = B^{-1}(b + \Delta b)$
Feasible if $B^{-1}(b + \Delta b) \geq 0$

\textbf{Cost Changes:} $c_B \to c_B + \Delta c_B$
New reduced costs: $\bar{c}_N^{new} = \bar{c}_N - \Delta c_B^T B^{-1}N$

\textbf{Adding Variable:} $\bar{c}_{n+1} = c_{n+1} - c_B^T B^{-1}A_{n+1}$

\textbf{Adding Constraint:} Dual simplex if primal infeasible

\section*{Convexity}

\textbf{Convex Set:} $\lambda x + (1-\lambda)y \in S$ $\forall x,y \in S$, $\lambda \in [0,1]$

\textbf{Convex Function:} $f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y)$

\textbf{Key Properties:}
• Local min = Global min
• $f(y) \geq f(x) + \nabla f(x)^T(y-x)$ (1st order)
• $H_f(x) \succeq 0$ (2nd order)

\textbf{Jensen:} $f(\sum \lambda_i x_i) \leq \sum \lambda_i f(x_i)$

\textbf{Epigraph:} $\text{epi } f = \{(x,t) : f(x) \leq t\}$
$f$ convex $\leftrightarrow$ epi $f$ convex

\section*{Special Problems}

\textbf{Transportation:}
$\min \sum_{ij} c_{ij}x_{ij}$
s.t. $\sum_j x_{ij} = a_i$, $\sum_i x_{ij} = b_j$, $x_{ij} \geq 0$

\textbf{Assignment:} Special case with $a_i = b_j = 1$

\textbf{Network Flow:}
Node balance: $\sum_{j \in \text{out}(i)} x_{ij} - \sum_{j \in \text{in}(i)} x_{ji} = b_i$

\section*{Integer Programming}

\textbf{Branch & Bound:}
1. Solve LP relaxation
2. If integer: update bound
3. Else: branch on fractional variable
4. Prune if bound worse than incumbent

\textbf{Cutting Planes:} Add valid inequalities to cut fractional solutions

\textbf{Gomory Cut:} $\sum_{j \in N} f_j x_j \geq f_0$ where $f_j = \bar{a}_{ij} - \lfloor \bar{a}_{ij} \rfloor$

\section*{Convergence}

\textbf{Rates:}
• Linear: $\|x_{k+1} - x^*\| \leq c\|x_k - x^*\|$, $c < 1$
• Superlinear: $\lim \frac{\|x_{k+1} - x^*\|}{\|x_k - x^*\|} = 0$
• Quadratic: $\|x_{k+1} - x^*\| \leq c\|x_k - x^*\|^2$

\textbf{Method Rates:}
• Steepest Descent: Linear (slow)
• Newton: Quadratic (near solution)
• Quasi-Newton: Superlinear
• Gauss-Newton: Quadratic (small residuals)
• Compass: Linear

\section*{Computational Issues}

\textbf{Condition Number:} $\kappa(A) = \|A\|\|A^{-1}\|$
• Large $\kappa$ = ill-conditioned
• Affects convergence rate

\textbf{Scaling:} Transform variables/constraints for better conditioning

\textbf{Numerical Stability:}
• Pivoting strategies in LP
• Modified Cholesky for indefinite Hessians
• Trust regions for globalization

\section*{Trust Region}

\textbf{Subproblem:}
$\min m_k(p) = f_k + \nabla f_k^T p + \frac{1}{2}p^T B_k p$
s.t. $\|p\| \leq \Delta_k$

\textbf{Solution:}
• If $B_k \succ 0$ and $\|p^{Newton}\| \leq \Delta_k$: $p^* = p^{Newton}$
• Else: $(B_k + \sigma I)p^* = -\nabla f_k$ with $\|p^*\| = \Delta_k$

\textbf{Trust Region Update:}
$\rho_k = \frac{f(x_k) - f(x_k + p_k)}{m_k(0) - m_k(p_k)}$
• $\rho_k < 0.25$: $\Delta_{k+1} = 0.25\Delta_k$
• $\rho_k > 0.75$: $\Delta_{k+1} = 2\Delta_k$
• Accept step if $\rho_k > 0.1$

\section*{Global Optimization}

\textbf{Multi-start:} Run local solver from multiple starting points

\textbf{Simulated Annealing:} Accept worse solutions with probability $e^{-\Delta f/T}$

\textbf{Genetic Algorithm:} Population-based evolutionary approach

\textbf{Particle Swarm:} Social optimization inspired by bird flocking

\section*{Key Formulas}

\textbf{Taylor:} $f(x+p) \approx f(x) + \nabla f^T p + \frac{1}{2}p^T H_f p$

\textbf{Sherman-Morrison:} $(A + uv^T)^{-1} = A^{-1} - \frac{A^{-1}uv^T A^{-1}}{1 + v^T A^{-1}u}$

\textbf{Matrix Inversion Lemma:}
$(A + BCD)^{-1} = A^{-1} - A^{-1}B(C^{-1} + DA^{-1}B)^{-1}DA^{-1}$

\textbf{Woodbury:} $(A + UCV)^{-1} = A^{-1} - A^{-1}U(C^{-1} + VA^{-1}U)^{-1}VA^{-1}$

\end{multicols}
\end{document}
```
[Timestamp: 2026/01/04 10:39:39]

**user**: you can use a bit more context on each of the methods actually, its quite barebones right now and i still have 1 more page, this barely fits 1 page
[Context: Notes: fading flame/Study/classes/Optimisation.md]
[Timestamp: 2026/01/04 10:40:52]

**ai**: 
<think>The user wants me to expand the cheat sheet with more context on each method since they still have another full page to fill. I need to look at the comprehensive optimization notes provided and add much more detail to each method while keeping it concise but informative. Let me expand significantly on:

1. More detailed formulas and derivations
2. More context on when to use each method
3. More specific algorithmic steps
4. More theoretical background
5. More conditions and theorems
6. More practical considerations

I'll restructure to be much more comprehensive while keeping it organized.</think>```latex
\documentclass[10pt,a4paper]{article}
\usepackage[margin=0.25in]{geometry}
\usepackage{amsmath,amssymb,multicol,array,enumitem}
\setlength{\columnsep}{0.15in}
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.5pt}
\setlength{\itemsep}{0pt}

\begin{document}
\begin{multicols}{3}
\scriptsize

\section*{Problem Classifications}

\textbf{Linear Programming (LP):} Linear objective \& constraints, always constrained, global optimum guaranteed
\textbf{Nonlinear Programming (NLP):} Nonlinear objective/constraints, focus on local optima
\textbf{Nonlinear Least Squares:} $\min \frac{1}{2}\sum r_i(x)^2$, exploits residual structure
\textbf{Convex Programming:} Local = global optimum, LP is special case

\section*{Unconstrained Optimization}

\subsection*{Newton's Method}
\textbf{Formula:} $x_{k+1} = x_k - H_f(x_k)^{-1}\nabla f(x_k)$

\textbf{Derivation:} 2nd-order Taylor approximation:
$f(x_k + p) \approx f_k + \nabla f_k^T p + \frac{1}{2}p^T H_f p$
Minimize w.r.t. $p$: $\nabla f_k + H_f p = 0$

\textbf{Properties:}
• Quadratic convergence near solution: $\|x_{k+1} - x^*\| \leq c\|x_k - x^*\|^2$
• Requires $H_f \succ 0$ (positive definite)
• $O(n^3)$ per iteration (Cholesky factorization)
• May diverge if started far from optimum
• Exact for quadratic functions in one step

\textbf{When to use:} Smooth functions, good initial guess, can afford Hessian computation

\subsection*{Steepest Descent}
\textbf{Formula:} $x_{k+1} = x_k - \alpha_k \nabla f(x_k)$
\textbf{Direction:} $d_k = -\nabla f(x_k)$ (steepest descent direction)

\textbf{Properties:}
• Linear convergence: $\|x_{k+1} - x^*\| \leq c\|x_k - x^*\|$
• Convergence rate depends on condition number $\kappa(H_f) = \frac{\lambda_{max}}{\lambda_{min}}$
• Rate: $c \leq \frac{\kappa - 1}{\kappa + 1}$
• Zig-zagging on ill-conditioned problems
• Successive directions orthogonal: $d_{k+1}^T d_k = 0$

\textbf{When to use:} Simple implementation, far from optimum, noisy gradients

\subsection*{Quasi-Newton Methods}
\textbf{Motivation:} Avoid expensive Hessian computation while maintaining superlinear convergence

\textbf{General Form:} $x_{k+1} = x_k - \alpha_k B_k^{-1}\nabla f_k$
where $B_k \approx H_f(x_k)$ or $H_k \approx H_f^{-1}(x_k)$

\textbf{Secant Condition:} $B_{k+1}s_k = y_k$ where:
• $s_k = x_{k+1} - x_k$ (step)
• $y_k = \nabla f(x_{k+1}) - \nabla f(x_k)$ (gradient change)

\textbf{BFGS (updates $B_k$):}
$B_{k+1} = B_k - \frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k} + \frac{y_k y_k^T}{y_k^T s_k}$

\textbf{DFP (updates $H_k = B_k^{-1}$):}
$H_{k+1} = H_k - \frac{H_k y_k y_k^T H_k}{y_k^T H_k y_k} + \frac{s_k s_k^T}{y_k^T s_k}$

\textbf{Properties:}
• BFGS generally superior to DFP
• Superlinear convergence
• $O(n^2)$ storage and computation
• Maintains positive definiteness if $y_k^T s_k > 0$
• Self-correcting property

\textbf{Symmetric Rank-1 (SR1):}
$B_{k+1} = B_k + \frac{(y_k - B_k s_k)(y_k - B_k s_k)^T}{(y_k - B_k s_k)^T s_k}$
• Satisfies secant condition exactly
• May lose positive definiteness
• Good for trust region methods

\textbf{Broyden Family:}
$B_{k+1} = (1-\phi_k)B_{k+1}^{BFGS} + \phi_k B_{k+1}^{DFP}$
• $\phi = 0$: BFGS, $\phi = 1$: DFP

\section*{Line Search Strategies}

\subsection*{Exact Line Search}
$\alpha_k^* = \arg\min_{\alpha > 0} f(x_k + \alpha d_k)$
• Optimal step size along search direction
• Usually too expensive computationally
• Used when cheap (e.g., quadratic functions)

\subsection*{Armijo Backtracking}
\textbf{Armijo Condition:} $f(x_k + \alpha d_k) \leq f(x_k) + c_1\alpha\nabla f_k^T d_k$
• $c_1 \in (0, 0.5)$, typically $c_1 = 10^{-4}$
• Ensures sufficient decrease

\textbf{Algorithm:}
1. Start with $\alpha = 1$
2. While Armijo not satisfied: $\alpha \leftarrow \tau\alpha$ ($\tau \in (0,1)$, typically $0.5$)
3. Accept $\alpha$

\subsection*{Wolfe Conditions}
\textbf{Sufficient Decrease:} $f(x + \alpha d) \leq f(x) + c_1\alpha\nabla f^T d$
\textbf{Curvature:} $\nabla f(x + \alpha d)^T d \geq c_2\nabla f^T d$
• $0 < c_1 < c_2 < 1$, typically $c_1 = 10^{-4}$, $c_2 = 0.9$
• Prevents steps that are too small

\textbf{Strong Wolfe:} $|\nabla f(x + \alpha d)^T d| \leq c_2|\nabla f^T d|$
• Ensures step not too long either
• Guarantees finite termination

\section*{Nonlinear Least Squares}

\textbf{Problem:} $\min F(x) = \frac{1}{2}\|r(x)\|^2 = \frac{1}{2}\sum_{i=1}^m r_i(x)^2$

\textbf{Gradient:} $\nabla F = J(x)^T r(x)$ where $J_{ij} = \frac{\partial r_i}{\partial x_j}$

\textbf{Hessian:} $H_F = J^T J + \sum_{i=1}^m r_i \nabla^2 r_i$

\subsection*{Gauss-Newton}
\textbf{Approximation:} Ignore $\sum r_i \nabla^2 r_i$ term
$H_F \approx J^T J$ (always positive semidefinite)

\textbf{Step:} $(J_k^T J_k)\Delta x_k = -J_k^T r_k$

\textbf{Properties:}
• Quadratic convergence for small residuals
• Linear for large residuals  
• May fail if $J^T J$ singular
• $O(mn^2 + n^3)$ per iteration

\textbf{Normal Equations:} Solve $(J^T J)\Delta x = -J^T r$
\textbf{QR Factorization:} $J = QR$, solve $R\Delta x = -Q^T r$

\subsection*{Levenberg-Marquardt}
\textbf{Step:} $(J_k^T J_k + \mu_k I)\Delta x_k = -J_k^T r_k$

\textbf{Parameter Update:}
• If $\rho_k > 0.75$: $\mu_{k+1} = 0.5\mu_k$ (more Newton-like)
• If $\rho_k < 0.25$: $\mu_{k+1} = 2\mu_k$ (more steepest descent)

\textbf{Trust Region Interpretation:}
Minimizes $\|J\Delta x + r\|^2$ subject to $\|\Delta x\| \leq \delta$

\textbf{Properties:}
• Robust for large residuals
• Smooth transition between Gauss-Newton and steepest descent
• Always produces descent direction

\section*{Trust Region Methods}

\textbf{Subproblem:} 
$\min_{p} m_k(p) = f_k + \nabla f_k^T p + \frac{1}{2}p^T B_k p$ s.t. $\|p\| \leq \Delta_k$

\textbf{Solution Cases:}
1. $B_k \succ 0$ and $\|p^{Newton}\| \leq \Delta_k$: $p^* = -B_k^{-1}\nabla f_k$
2. Otherwise: $(B_k + \sigma I)p^* = -\nabla f_k$ with $\|p^*\| = \Delta_k$

\textbf{Trust Region Update:}
$\rho_k = \frac{\text{actual reduction}}{\text{predicted reduction}} = \frac{f(x_k) - f(x_k + p_k)}{m_k(0) - m_k(p_k)}$

\textbf{Strategy:}
• $\rho_k < 0.25$: $\Delta_{k+1} = 0.25\Delta_k$ (shrink)
• $\rho_k > 0.75$ and $\|p_k\| = \Delta_k$: $\Delta_{k+1} = 2\Delta_k$ (expand)
• Accept step if $\rho_k > \eta$ (typically $\eta = 0.1$)

\section*{Derivative-Free Methods}

\subsection*{Compass Search (Pattern Search)}
\textbf{Directions:} $D = \{e_1, -e_1, e_2, -e_2, ..., e_n, -e_n\}$

\textbf{Algorithm:}
1. Try each direction $d \in D$ with step $\alpha_k$
2. If improvement found: $x_{k+1} = x_k + \alpha_k d$, keep $\alpha_k$
3. Else: reduce $\alpha_{k+1} = \tau\alpha_k$, $x_{k+1} = x_k$

\textbf{Properties:}
• Linear convergence
• $O(n)$ function evaluations per iteration
• Robust but slow
• Suitable for noisy/discontinuous functions

\subsection*{Nelder-Mead Simplex}
\textbf{Operations:} Reflection, expansion, contraction, shrinkage on $n+1$ vertices

\textbf{Coefficients:} $\alpha = 1$ (reflect), $\gamma = 2$ (expand), $\rho = 0.5$ (contract), $\sigma = 0.5$ (shrink)

\section*{Constrained Optimization}

\subsection*{Optimality Conditions}

\textbf{Equality Constrained:}
$\min f(x)$ s.t. $h(x) = 0$ ($h: \mathbb{R}^n \to \mathbb{R}^m$)

\textbf{Lagrangian:} $\mathcal{L}(x, \lambda) = f(x) + \lambda^T h(x)$

\textbf{1st-Order (KKT):}
$\nabla_x \mathcal{L} = \nabla f(x^*) + \sum_{i=1}^m \lambda_i^* \nabla h_i(x^*) = 0$
$h(x^*) = 0$

\textbf{2nd-Order:} $Z^T \nabla_{xx}^2 \mathcal{L} Z \succ 0$
where $Z$ is null space matrix: $\nabla h(x^*)^T Z = 0$

\textbf{Constraint Qualification (LICQ):} $\{\nabla h_i(x^*)\}$ linearly independent

\textbf{General Constrained:}
$\min f(x)$ s.t. $h(x) = 0$, $g(x) \leq 0$

\textbf{KKT Conditions:}
$\nabla f(x^*) + \sum \lambda_i^* \nabla h_i(x^*) + \sum \mu_j^* \nabla g_j(x^*) = 0$
$h(x^*) = 0$, $g(x^*) \leq 0$
$\mu_j^* \geq 0$, $\mu_j^* g_j(x^*) = 0$ (complementary slackness)

\subsection*{Lagrange Multiplier Interpretation}
$\lambda_i^* = \frac{\partial f^*}{\partial b_i}$ (sensitivity of optimal value to RHS changes)
Economic interpretation: shadow prices

\section*{Methods for Equality Constraints}

\subsection*{Null Space Method}
\textbf{Idea:} Eliminate constraints $Ax = b$ by parameterization

\textbf{Parameterization:} $x = x_0 + Zv$ where $Az = 0$, $Ax_0 = b$

\textbf{Reduced Problem:} $\min f(x_0 + Zv)$ (unconstrained in $v$)

\textbf{Reduced Newton:} $Z^T H_f(x_k) Z \Delta v = -Z^T \nabla f(x_k)$
Then $\Delta x = Z \Delta v$

\textbf{Computing $Z$:} QR factorization of $A^T = QR = [Q_1 \quad Q_2][R_1; 0]$
$Z = Q_2$ (last $n-m$ columns)

\subsection*{Range Space Method}
\textbf{System:} 
$\begin{bmatrix} H_f & A^T \\ A & 0 \end{bmatrix} \begin{bmatrix} \Delta x \\ \lambda \end{bmatrix} = \begin{bmatrix} -\nabla f \\ 0 \end{bmatrix}$

\textbf{Solution:} 
$\lambda = (AH_f^{-1}A^T)^{-1}AH_f^{-1}\nabla f$
$\Delta x = H_f^{-1}(-\nabla f + A^T \lambda)$

\section*{Methods for Inequality Constraints}

\subsection*{Active Set Methods}
\textbf{Strategy:} Guess active set $\mathcal{A}_k$, solve equality problem, update $\mathcal{A}_k$

\textbf{Algorithm:}
1. Solve EQP: $\min \nabla f_k^T p + \frac{1}{2}p^T H_k p$ s.t. $\nabla g_i^T p = 0, i \in \mathcal{A}_k$
2. If $p_k = 0$: compute multipliers, drop constraint with $\mu_i < 0$
3. Else: find step to boundary, add blocking constraint

\textbf{Multiplier Computation:} From EQP solution:
$H_k p_k + \sum_{i \in \mathcal{A}_k} \mu_i \nabla g_i = -\nabla f_k$

\subsection*{Sequential Quadratic Programming}
\textbf{Subproblem:} 
$\min \nabla f_k^T p + \frac{1}{2}p^T B_k p$
s.t. $\nabla h_k^T p + h_k = 0$, $\nabla g_k^T p + g_k \leq 0$

\textbf{Update:} $x_{k+1} = x_k + \alpha_k p_k$

\textbf{Hessian Approximation:} BFGS update on $\nabla_x \mathcal{L}$:
$B_{k+1} = B_k + \frac{q_k q_k^T}{q_k^T s_k} - \frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k}$
where $q_k = \nabla_x \mathcal{L}(x_{k+1}, \lambda_{k+1}) - \nabla_x \mathcal{L}(x_k, \lambda_{k+1})$

\textbf{Merit Function:} $\phi(x) = f(x) + \sum_{i} \sigma_i |h_i(x)| + \sum_{j} \sigma_j \max(0, g_j(x))$

\section*{Penalty and Barrier Methods}

\subsection*{Exterior Penalty}
\textbf{Problem:} $\min f(x) + \rho P(x)$

\textbf{Quadratic Penalty:} $P(x) = \sum_{i} h_i(x)^2 + \sum_{j} [\max(0, g_j(x))]^2$

\textbf{Exact Penalty:} $P(x) = \sum_{i} |h_i(x)| + \sum_{j} \max(0, g_j(x))$

\textbf{Properties:}
• Approach optimum as $\rho \to \infty$
• No feasibility requirement for starting point
• Ill-conditioning for large $\rho$

\subsection*{Interior Point (Barrier)}
\textbf{Problem:} $\min f(x) + \mu B(x)$ where $x$ feasible

\textbf{Logarithmic Barrier:} $B(x) = -\sum_{j} \ln(-g_j(x))$ for $g_j(x) < 0$

\textbf{Central Path:} $x^*(\mu)$ minimizes barrier function
$\nabla f(x^*(\mu)) + \mu \sum_j \frac{\nabla g_j(x^*(\mu))}{-g_j(x^*(\mu))} = 0$

\textbf{Properties:}
• Approach optimum as $\mu \to 0^+$
• Requires strictly feasible starting point
• Naturally maintains feasibility

\section*{Linear Programming}

\subsection*{Standard Form}
$\min c^T x$ s.t. $Ax = b$, $x \geq 0$

\textbf{Assumptions:} $A \in \mathbb{R}^{m \times n}$, rank$(A) = m < n$, $b \geq 0$

\textbf{Geometric Interpretation:} Feasible region is polyhedron, optimum at vertex

\subsection*{Basic Solutions}
\textbf{Basic Solution:} Choose $m$ linearly independent columns (basis $B$)
Set non-basic variables to zero: $x_N = 0$
Solve: $x_B = B^{-1}b$

\textbf{Basic Feasible Solution (BFS):} Basic solution with $x_B \geq 0$
\textbf{Theorem:} BFS $\leftrightarrow$ Extreme Point $\leftrightarrow$ Vertex

\textbf{Degeneracy:} BFS with some $x_{B_i} = 0$
Risk: cycling in simplex method

\subsection*{Simplex Method}

\textbf{Optimality Test:} $\bar{c}_j = c_j - c_B^T B^{-1}A_j \geq 0$ for all $j$

\textbf{Entering Variable:} Choose $j$ with most negative $\bar{c}_j$

\textbf{Ratio Test:} $\theta^* = \min_i \left\{\frac{(B^{-1}b)_i}{(B^{-1}A_j)_i} : (B^{-1}A_j)_i > 0\right\}$

\textbf{Leaving Variable:} $i$ achieving minimum in ratio test

\textbf{Tableau Form:}
$\begin{array}{c|c|c|c}
 & x_B & x_N & \text{RHS} \\
\hline
x_B & I & B^{-1}N & B^{-1}b \\
\hline
z & 0 & \bar{c}_N^T & c_B^T B^{-1}b
\end{array}$

\textbf{Phase I:} Find initial BFS
Solve: $\min \sum w_i$ s.t. $Ax + w = b$, $x,w \geq 0$

\section*{Duality Theory}

\textbf{Primal:} $\min c^T x$ s.t. $Ax = b$, $x \geq 0$
\textbf{Dual:} $\max b^T y
[Timestamp: 2026/01/04 10:42:28]

**user**: i have notes like these for each method, add some things from these that i can include aswell.
[Context: Notes: fading flame/Study/Newton_s Method for Minimization.md, fading flame/Study/classes/Optimisation.md]
[Timestamp: 2026/01/04 10:46:12]

**ai**: 
<think>The user is showing me they have detailed notes for individual methods (like the Newton's Method for Minimization note they just shared) and wants me to incorporate relevant details from these types of notes into the cheat sheet. From the Newton's Method note, I can see there are practical examples, step-by-step algorithms, pros/cons, and more intuitive explanations that could be valuable for a test cheat sheet.

Since they want me to include more from these detailed notes, I should look for:
1. Step-by-step algorithmic procedures
2. Simple examples or key insights
3. Pros/cons for each method
4. Common failure modes
5. When to use each method
6. Computational complexity details
7. Key insights about convergence behavior

I should expand the cheat sheet to include more of these practical details while keeping it concise for a 2-page format.</think>```latex
\documentclass[10pt,a4paper]{article}
\usepackage[margin=0.25in]{geometry}
\usepackage{amsmath,amssymb,multicol,array,enumitem}
\setlength{\columnsep}{0.15in}
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.5pt}
\setlength{\itemsep}{0pt}

\begin{document}
\begin{multicols}{3}
\scriptsize

\section*{Problem Classifications}

\textbf{Linear Programming (LP):} Linear objective \& constraints, always constrained, global optimum guaranteed
\textbf{Nonlinear Programming (NLP):} Nonlinear objective/constraints, focus on local optima
\textbf{Nonlinear Least Squares:} $\min \frac{1}{2}\sum r_i(x)^2$, exploits residual structure
\textbf{Convex Programming:} Local = global optimum, LP is special case

\section*{Newton's Method}

\textbf{Core Formula:} $x_{k+1} = x_k - H_f^{-1}(x_k)\nabla f(x_k)$

\textbf{Algorithm Steps:}
1. Start at $x_0$
2. Calculate $\nabla f(x_k)$ and $H_f(x_k)$
3. Solve $H_f(x_k)p_k = -\nabla f(x_k)$ for direction $p_k$
4. Update: $x_{k+1} = x_k + p_k$ (pure Newton: $\alpha = 1$)
5. Repeat until convergence

\textbf{Key Insight:} Approximates function with quadratic, jumps to bottom of "bowl"

\textbf{Properties:}
• Quadratic convergence: $\|e_{k+1}\| \leq c\|e_k\|^2$
• Exact for quadratic functions in 1 step
• $O(n^3)$ per iteration (Cholesky/LU)
• Requires $H_f \succ 0$ for descent
• May diverge far from optimum

\textbf{Pros:} Extremely fast convergence near solution
\textbf{Cons:} Expensive Hessian computation, may fail if $H_f$ not pos-def

\textbf{Failure Modes:}
• Indefinite Hessian → not descent direction
• Singular Hessian → system unsolvable
• Poor conditioning → numerical instability

\textbf{When to Use:} Smooth functions, good initial guess, affordable Hessian

\section*{Steepest Descent}

\textbf{Formula:} $x_{k+1} = x_k - \alpha_k \nabla f(x_k)$
\textbf{Direction:} $d_k = -\nabla f(x_k)$ (negative gradient)

\textbf{Algorithm:}
1. Start at $x_0$
2. Compute $d_k = -\nabla f(x_k)$
3. Find step size $\alpha_k$ (line search)
4. Update: $x_{k+1} = x_k + \alpha_k d_k$

\textbf{Properties:}
• Linear convergence rate: $c \leq \frac{\kappa-1}{\kappa+1}$
• $\kappa = \frac{\lambda_{max}}{\lambda_{min}}$ (condition number)
• Successive directions orthogonal: $d_{k+1}^T d_k = 0$
• Zig-zagging on ill-conditioned problems
• $O(n)$ per iteration (just gradient)

\textbf{Pros:} Simple, robust, cheap per iteration
\textbf{Cons:} Slow convergence, especially near optimum

\textbf{When to Use:} Far from optimum, noisy functions, simple implementation needed

\section*{Quasi-Newton Methods}

\textbf{Motivation:} Avoid expensive Hessian while maintaining superlinear convergence

\textbf{General Form:} $x_{k+1} = x_k - \alpha_k B_k^{-1}\nabla f_k$
where $B_k \approx H_f(x_k)$ or $H_k \approx H_f^{-1}(x_k)$

\textbf{Secant Condition:} $B_{k+1}s_k = y_k$
• $s_k = x_{k+1} - x_k$ (step)
• $y_k = \nabla f_{k+1} - \nabla f_k$ (gradient change)

\subsection*{BFGS (updates $B_k$)}
$B_{k+1} = B_k - \frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k} + \frac{y_k y_k^T}{y_k^T s_k}$

\textbf{Algorithm:}
1. Initialize $B_0 = I$ (or $H_0 = I$)
2. Solve $B_k p_k = -\nabla f_k$ for direction
3. Line search for $\alpha_k$, update $x_{k+1} = x_k + \alpha_k p_k$
4. Compute $s_k$, $y_k$, update $B_{k+1}$

\textbf{Properties:}
• Superlinear convergence
• $O(n^2)$ storage/computation
• Self-correcting (recovers from bad approximations)
• Maintains pos-def if $y_k^T s_k > 0$

\subsection*{DFP (updates $H_k = B_k^{-1}$)}
$H_{k+1} = H_k - \frac{H_k y_k y_k^T H_k}{y_k^T H_k y_k} + \frac{s_k s_k^T}{y_k^T s_k}$

\textbf{Note:} BFGS generally superior to DFP in practice

\subsection*{SR1 (Symmetric Rank-1)}
$B_{k+1} = B_k + \frac{(y_k - B_k s_k)(y_k - B_k s_k)^T}{(y_k - B_k s_k)^T s_k}$

\textbf{Properties:}
• Satisfies secant condition exactly
• May lose positive definiteness
• Good for trust region methods

\textbf{Skipping Condition:} Skip update if $|(y_k - B_k s_k)^T s_k| < \epsilon\|s_k\|\|y_k - B_k s_k\|$

\section*{Line Search Strategies}

\subsection*{Exact Line Search}
$\alpha_k^* = \arg\min_{\alpha > 0} f(x_k + \alpha d_k)$
• Solve: $\frac{d}{d\alpha}f(x_k + \alpha d_k) = 0$
• Usually too expensive except for simple cases

\subsection*{Armijo Backtracking}
\textbf{Condition:} $f(x_k + \alpha d_k) \leq f(x_k) + c_1\alpha\nabla f_k^T d_k$

\textbf{Algorithm:}
1. Set $\alpha = \alpha_0$ (usually 1), $c_1 = 10^{-4}$, $\tau = 0.5$
2. While Armijo not satisfied: $\alpha \leftarrow \tau\alpha$
3. Accept current $\alpha$

\textbf{Geometric Interpretation:} Step must give sufficient decrease compared to linear approximation

\subsection*{Wolfe Conditions}
\textbf{Sufficient Decrease:} $f(x + \alpha d) \leq f(x) + c_1\alpha\nabla f^T d$
\textbf{Curvature:} $\nabla f(x + \alpha d)^T d \geq c_2\nabla f^T d$

\textbf{Parameters:} $0 < c_1 < c_2 < 1$
• Newton/quasi-Newton: $c_1 = 10^{-4}$, $c_2 = 0.9$
• Steepest descent: $c_1 = 10^{-4}$, $c_2 = 0.1$

\textbf{Strong Wolfe:} $|\nabla f(x + \alpha d)^T d| \leq c_2|\nabla f^T d|$

\section*{Nonlinear Least Squares}

\textbf{Problem:} $\min F(x) = \frac{1}{2}\|r(x)\|^2 = \frac{1}{2}\sum_{i=1}^m r_i(x)^2$

\textbf{Structure Exploitation:}
• Gradient: $\nabla F = J^T r$ where $J_{ij} = \frac{\partial r_i}{\partial x_j}$
• Hessian: $H_F = J^T J + \sum_{i=1}^m r_i \nabla^2 r_i$

\subsection*{Gauss-Newton}
\textbf{Approximation:} Ignore second-order term
$H_F \approx J^T J$ (always positive semidefinite)

\textbf{Step:} Solve $(J_k^T J_k)\Delta x_k = -J_k^T r_k$

\textbf{Algorithm:}
1. Evaluate $r_k$ and $J_k$ at $x_k$
2. Solve normal equations: $(J_k^T J_k)p_k = -J_k^T r_k$
3. Line search: $x_{k+1} = x_k + \alpha_k p_k$

\textbf{Alternative (QR):} $J_k = Q_k R_k$, solve $R_k p_k = -Q_k^T r_k$

\textbf{Properties:}
• Quadratic convergence for small residuals
• Linear convergence for large residuals
• May fail if $J^T J$ singular (rank deficient)
• $O(mn^2 + n^3)$ per iteration

\textbf{When to Use:} Small residual problems, overdetermined systems

\subsection*{Levenberg-Marquardt}
\textbf{Formula:} $(J_k^T J_k + \mu_k I)\Delta x_k = -J_k^T r_k$

\textbf{Parameter Strategy:}
• Start with $\mu_0 = 10^{-3}$
• If $\rho_k > 0.75$: $\mu_{k+1} = 0.5\mu_k$ (more Gauss-Newton)
• If $\rho_k < 0.25$: $\mu_{k+1} = 2\mu_k$ (more steepest descent)
• Where $\rho_k = \frac{\text{actual reduction}}{\text{predicted reduction}}$

\textbf{Trust Region Interpretation:} Solves $\min \|J\Delta x + r\|^2$ s.t. $\|\Delta x\| \leq \delta$

\textbf{Properties:}
• Robust for large residuals
• Always descent direction
• Smooth transition between methods
• Damping prevents breakdown

\section*{Trust Region Methods}

\textbf{Philosophy:} Trust the model only within a region

\textbf{Subproblem:} $\min_p m_k(p) = f_k + g_k^T p + \frac{1}{2}p^T B_k p$ s.t. $\|p\| \leq \Delta_k$

\textbf{Solution Strategy:}
• If $B_k \succ 0$ and unconstrained minimizer $p^N = -B_k^{-1}g_k$ satisfies $\|p^N\| \leq \Delta_k$: $p^* = p^N$
• Otherwise: $(B_k + \sigma I)p^* = -g_k$ where $\sigma \geq 0$ chosen so $\|p^*\| = \Delta_k$

\textbf{Trust Region Update:}
$\rho_k = \frac{f(x_k) - f(x_k + p_k)}{m_k(0) - m_k(p_k)}$

\textbf{Strategy:}
• $\rho_k \geq \eta_2$ (e.g., 0.75): successful, possibly expand $\Delta_{k+1} = \gamma_2\Delta_k$
• $\eta_1 \leq \rho_k < \eta_2$: acceptable, keep $\Delta_{k+1} = \Delta_k$
• $\rho_k < \eta_1$: reject step, shrink $\Delta_{k+1} = \gamma_1\Delta_k$

\textbf{Parameters:} $\eta_1 = 0.1$, $\eta_2 = 0.75$, $\gamma_1 = 0.5$, $\gamma_2 = 2$

\section*{Derivative-Free Methods}

\subsection*{Compass Search}
\textbf{Pattern:} $D = \{\pm e_1, \pm e_2, ..., \pm e_n\}$ (coordinate directions)

\textbf{Algorithm:}
1. Initialize $x_0$, $\alpha_0 > 0$, reduction factor $\gamma \in (0,1)$
2. At iteration $k$: try each $d \in D$ with step $x_k + \alpha_k d$
3. If improvement found: accept move, continue with same $\alpha_k$
4. If no improvement: reduce $\alpha_{k+1} = \gamma\alpha_k$, stay at $x_k$

\textbf{Properties:}
• Convergence: $\alpha_k \to 0$ and $\nabla f(x_k) \to 0$
• Rate: linear (similar to steepest descent)
• $O(n)$ function evaluations per successful iteration
• Robust to noise and discontinuities

\textbf{When to Use:} 
• Derivatives unavailable/expensive
• Noisy or discontinuous functions
• Black-box optimization

\subsection*{Nelder-Mead Simplex}
\textbf{Simplex:} $n+1$ points in $\mathbb{R}^n$

\textbf{Operations:}
• Reflection: $x_r = x_o + \alpha(x_o - x_{worst})$, $\alpha = 1$
• Expansion: $x_e = x_o + \gamma(x_r - x_o)$, $\gamma = 2$  
• Contraction: $x_c = x_o + \rho(x_{worst} - x_o)$, $\rho = 0.5$
• Shrinkage: Move all points toward $x_{best}$

\textbf{Algorithm:}
1. Order vertices by function value
2. Compute centroid $x_o$ of all but worst point
3. Try reflection, expansion, contraction, or shrinkage
4. Update simplex and repeat

\section*{Constrained Optimization}

\subsection*{Optimality Conditions}

\textbf{Equality Constrained:} $\min f(x)$ s.t. $h(x) = 0$

\textbf{Lagrangian:} $\mathcal{L}(x, \lambda) = f(x) + \lambda^T h(x)$

\textbf{KKT Conditions:}
$\nabla_x \mathcal{L} = \nabla f(x^*) + \nabla h(x^*)^T \lambda^* = 0$
$h(x^*) = 0$

\textbf{Second-Order:} $Z^T \nabla_{xx}^2 \mathcal{L}(x^*, \lambda^*) Z \succ 0$
where $Z$ spans null space of $\nabla h(x^*)^T$

\textbf{Constraint Qualification (LICQ):} $\{\nabla h_i(x^*)\}$ linearly independent

\textbf{General Problem:} $\min f(x)$ s.t. $h(x) = 0$, $g(x) \leq 0$

\textbf{Full KKT:}
$\nabla f + \nabla h^T \lambda + \nabla g^T \mu = 0$ (stationarity)
$h(x) = 0$ (equality feasibility)
$g(x) \leq 0$ (inequality feasibility)  
$\mu \geq 0$ (dual feasibility)
$\mu^T g(x) = 0$ (complementary slackness)

\subsection*{Lagrange Multiplier Interpretation}
\textbf{Sensitivity:} $\lambda_i^* = \frac{\partial f^*}{\partial b_i}$ (shadow price)
• How much optimal value changes per unit RHS change
• Economic interpretation: marginal value of relaxing constraint

\section*{Equality Constraint Methods}

\subsection*{Elimination Method}
\textbf{Idea:} Solve constraints to express some variables in terms of others

\textbf{Example:} $h(x) = x_1 + x_2 - 1 = 0 \Rightarrow x_2 = 1 - x_1$
Substitute into objective: $\min f(x_1, 1-x_1)$

\textbf{Pros:} Reduces problem dimension
\textbf{Cons:} May be impossible for nonlinear constraints

\subsection*{Null Space Method}
\textbf{Approach:} Parameterize feasible directions

\textbf{Linear Constraints:} $Ax = b$
Parameterization: $x = x_0 + Zv$ where $Az = 0$, $Ax_0 = b$

\textbf{Reduced Problem:} $\min f(x_0 + Zv)$ (unconstrained in $v$)

\textbf{Null Space Basis:} QR factorization $A^T = [Q_1 \; Q_2] \begin{bmatrix} R \\ 0 \end{bmatrix}$
Then $Z = Q_2$

\textbf{Newton Step:} $Z^T H_f Z \Delta v = -Z^T \nabla f$, $\Delta x = Z\Delta v$

\subsection*{Lagrange Method}
\textbf{System:} $\begin{bmatrix} H_f & A^T \\ A & 0 \end{bmatrix} \begin{bmatrix} \Delta x \\ \lambda \end{bmatrix} = \begin{bmatrix} -\nabla f \\ 0 \end{bmatrix}$

\textbf{Properties:}
• Solves for step and multipliers simultaneously
• $(n+m) \times (n+m)$ system vs. $(n-m) \times (n-m)$ for null space
• Indefinite system (requires special solvers)

\section*{Inequality Constraint Methods}

\subsection*{Active Set Methods}
\textbf{Key Idea:} Guess which constraints are active, solve equality problem

\textbf{Working Set:} $\mathcal{W}_k \subseteq \{1, 2, ..., m\}$ (indices of constraints treated as active)

\textbf{Algorithm:}
1. Solve EQP: $\min \nabla f_k^T p + \frac{1}{2}p^T H_k p$ s.t. $\nabla g_i^T p = 0, i \in \mathcal{W}_k$
2. If $p_k = 0$: compute multipliers $\mu_i$
   - If $\mu_i \geq 0 \; \forall i \in \mathcal{W}_k$: optimal!
   - Else: remove constraint with most negative $\mu_i$ from $\mathcal{W}_k$
3. If $p_k \neq 0$: find blocking constraint
   - $\alpha^* = \min\{1, \min_{i \notin \mathcal{W}_k} \frac{-g_i}{\nabla g_i^T p_k} : \nabla g_i^T p_k > 0\}$
   - If $\alpha^* < 1$: add blocking constraint to $\mathcal{W}_k$

\textbf{EQP Solution:} $p = -P(\nabla f + \sum_{i \in \mathcal{W}} \mu_i \nabla g_i)$
where $P$ projects onto null space of active constraint gradients

\subsection*{Sequential Quadratic Programming}
\textbf{Newton's Method for KKT:} Apply Newton to optimality conditions

\textbf{QP Subproblem:}
$\min \nabla f_k^T p + \frac{1}{2}p^T B_k p$
s.t. $\nabla h_k^T p + h_k = 0$, $\nabla g_k^T p + g_k \leq 0$

\textbf{Update:} $x_{k+1} = x_k + \alpha_k p_k$, $\lambda_{k+1} = \lambda_k + \alpha_k(\bar{\lambda}_k - \lambda_k)$

\textbf{Hessian Update:} BFGS on $\nabla_x \mathcal{L}$:
$B_{k+1} = B_k + \frac{q_k q_k^T}{s_k^T q_k} - \frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k}$
where $q_k = \nabla_x \mathcal{L}_{k+1} - \nabla_x \mathcal{L}_k$

\textbf{Merit Function:} $\phi(x) = f(x) + \sum_i \sigma_i |h
[Timestamp: 2026/01/04 10:47:54]

**user**: you ended abruptly, are you facing a output length contraint? if so just continue where you left off
[Context: Notes: fading flame/Study/Newton_s Method for Minimization.md, fading flame/Study/classes/Optimisation.md]
[Timestamp: 2026/01/04 10:51:45]

**ai**: 
<think>Yes, I did get cut off in the middle of the SQP section. The user is asking me to continue from where I left off, which was in the middle of the merit function definition for SQP. Let me continue from there and complete the cheat sheet.</think>You're right, I hit the output length limit. Let me continue where I left off:

```latex
\textbf{Merit Function:} $\phi(x) = f(x) + \sum_i \sigma_i |h_i(x)| + \sum_j \sigma_j \max(0, g_j(x))$

\textbf{Penalty Parameters:} Choose $\sigma_i \geq |\lambda_i|$, $\sigma_j \geq |\mu_j|$

\section*{Penalty \& Barrier Methods}

\subsection*{Exterior Penalty}
\textbf{Problem:} $\min f(x) + \rho P(x)$

\textbf{Quadratic Penalty:} $P(x) = \frac{1}{2}\sum_i h_i(x)^2 + \frac{1}{2}\sum_j [\max(0, g_j(x))]^2$

\textbf{Exact Penalty:} $P(x) = \sum_i |h_i(x)| + \sum_j \max(0, g_j(x))$

\textbf{Algorithm:}
1. Choose $\rho_0 > 0$, $x_0$
2. Solve $\min f(x) + \rho_k P(x)$ starting from $x_k$
3. If not converged: $\rho_{k+1} = \beta\rho_k$ (e.g., $\beta = 10$)

\textbf{Properties:}
• No feasibility requirement for $x_0$
• $\rho \to \infty$ for convergence
• Ill-conditioning for large $\rho$

\subsection*{Interior Point (Barrier)}
\textbf{Problem:} $\min f(x) + \mu B(x)$ where $g(x) < 0$

\textbf{Log Barrier:} $B(x) = -\sum_j \ln(-g_j(x))$

\textbf{Central Path:} $x^*(\mu)$ solves:
$\nabla f + \mu \sum_j \frac{\nabla g_j}{-g_j} = 0$

\textbf{Algorithm:}
1. Start with $\mu_0 > 0$, strictly feasible $x_0$
2. Solve barrier problem for current $\mu_k$
3. Decrease: $\mu_{k+1} = \sigma\mu_k$ (e.g., $\sigma = 0.1$)

\textbf{Properties:}
• Requires strictly feasible $x_0$
• Stays feasible throughout
• $\mu \to 0^+$ for convergence

\section*{Linear Programming}

\subsection*{Standard Form}
$\min c^T x$ s.t. $Ax = b$, $x \geq 0$

\textbf{Assumptions:} $A \in \mathbb{R}^{m \times n}$, rank$(A) = m < n$

\subsection*{Basic Solutions}
\textbf{Basic Solution:} Choose basis $B$ (invertible $m \times m$ submatrix)
Set $x_N = 0$, solve $Bx_B = b$ to get $x_B = B^{-1}b$

\textbf{Basic Feasible Solution:} Basic solution with $x_B \geq 0$

\textbf{Key Theorem:} BFS $\leftrightarrow$ Extreme Point $\leftrightarrow$ Vertex

\textbf{Degeneracy:} BFS with some $x_{B_i} = 0$

\subsection*{Simplex Method}
\textbf{Optimality:} $\bar{c}_j = c_j - c_B^T B^{-1}A_j \geq 0$ for all $j$

\textbf{Iteration:}
1. \textbf{Entering:} Choose $j$ with $\bar{c}_j < 0$ (most negative)
2. \textbf{Direction:} $d = B^{-1}A_j$
3. \textbf{Ratio Test:} $\theta = \min_i \{\frac{x_{B_i}}{d_i} : d_i > 0\}$
4. \textbf{Leaving:} Variable achieving minimum ratio
5. \textbf{Pivot:} Update basis, tableau

\textbf{Tableau Form:}
$\begin{array}{c|c|c|c}
 & x_B & x_N & b \\
\hline
x_B & I & B^{-1}N & B^{-1}b \\
\hline
z & 0^T & \bar{c}_N^T & c_B^T B^{-1}b
\end{array}$

\textbf{Cycling Prevention:} Bland's rule, perturbation

\subsection*{Phase I}
\textbf{Artificial Problem:} $\min \sum w_i$ s.t. $Ax + w = b$, $x,w \geq 0$
• If optimal value $> 0$: original problem infeasible
• If optimal value $= 0$: use final $x$ for Phase II

\subsection*{Dual Simplex}
\textbf{When:} Dual feasible but primal infeasible
\textbf{Use:} Adding constraints, parametric analysis

\section*{Duality Theory}

\textbf{Primal:} $\min c^T x$ s.t. $Ax \leq b$, $x \geq 0$
\textbf{Dual:} $\max b^T y$ s.t. $A^T y \geq c$, $y \geq 0$

\textbf{Standard Form Dual:}
Primal: $\min c^T x$ s.t. $Ax = b$, $x \geq 0$
Dual: $\max b^T y$ s.t. $A^T y \leq c$

\textbf{Weak Duality:} $c^T x \geq b^T y$ for feasible $x,y$
\textbf{Strong Duality:} $c^T x^* = b^T y^*$ if both optimal

\textbf{Complementary Slackness:}
$x_j^*(c_j - \sum_i y_i^* A_{ij}) = 0$ $\forall j$
$y_i^*(b_i - \sum_j A_{ij} x_j^*) = 0$ $\forall i$

\section*{Sensitivity Analysis}

\textbf{RHS Changes:} $b \to b + \Delta b$
• New solution: $x_B^{new} = B^{-1}(b + \Delta b)$
• Feasible if $B^{-1}(b + \Delta b) \geq 0$
• Shadow prices: $\frac{df^*}{db_i} = y_i^*$

\textbf{Cost Changes:} $c_B \to c_B + \Delta c_B$
• New reduced costs: $\bar{c}_N^{new} = \bar{c}_N - \Delta c_B^T B^{-1}N$
• Optimal if $\bar{c}_N^{new} \geq 0$

\textbf{Adding Variable:} Check $\bar{c}_{new} = c_{new} - c_B^T B^{-1}A_{new}$

\section*{Convexity}

\textbf{Convex Set:} $\lambda x + (1-\lambda)y \in S$ $\forall x,y \in S, \lambda \in [0,1]$

\textbf{Convex Function:} $f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y)$

\textbf{Key Properties:}
• Local minimum = Global minimum
• First-order: $f(y) \geq f(x) + \nabla f(x)^T(y-x)$
• Second-order: $H_f(x) \succeq 0$ everywhere

\textbf{Jensen's Inequality:} $f(\sum \lambda_i x_i) \leq \sum \lambda_i f(x_i)$

\textbf{Operations Preserving Convexity:}
• Non-negative combinations
• Pointwise maximum
• Composition with affine functions
• Perspective function

\section*{Convergence Rates}

\textbf{Linear:} $\|e_{k+1}\| \leq c\|e_k\|$, $c \in (0,1)$
\textbf{Superlinear:} $\lim \frac{\|e_{k+1}\|}{\|e_k\|} = 0$
\textbf{Quadratic:} $\|e_{k+1}\| \leq c\|e_k\|^2$

\textbf{Method Comparison:}
• Steepest Descent: Linear (slow)
• Newton: Quadratic (fast, expensive)
• Quasi-Newton: Superlinear (good compromise)
• Gauss-Newton: Quadratic (small residuals)
• Trust Region: Globally convergent

\section*{Computational Considerations}

\textbf{Condition Number:} $\kappa(A) = \|A\|\|A^{-1}\|$
• Large $\kappa$ → numerical difficulties
• Affects convergence rate

\textbf{Scaling:} Transform variables/constraints
• Row scaling: $D_1 A D_2 x = D_1 b$
• Improves conditioning

\textbf{Termination Criteria:}
• $\|\nabla f\| \leq \epsilon_g$ (gradient)
• $\|x_{k+1} - x_k\| \leq \epsilon_x$ (step)
• $|f_{k+1} - f_k| \leq \epsilon_f$ (function)

\textbf{Implementation Notes:}
• Use Cholesky for positive definite systems
• LDLT for indefinite systems
• QR factorization for least squares
• Sparse techniques for large problems

\section*{Special Problem Types}

\textbf{Transportation:} $\min \sum c_{ij}x_{ij}$ s.t. supply/demand constraints

\textbf{Network Flow:} Node balance equations, special structure enables efficient algorithms

\textbf{Integer Programming:} Branch \& bound, cutting planes

\textbf{Quadratic Programming:} $\min \frac{1}{2}x^T Q x + c^T x$ s.t. linear constraints

\section*{Quick Reference Formulas}

\textbf{Sherman-Morrison:} $(A + uv^T)^{-1} = A^{-1} - \frac{A^{-1}uv^T A^{-1}}{1 + v^T A^{-1}u}$

\textbf{Woodbury:} $(A + UCV)^{-1} = A^{-1} - A^{-1}U(C^{-1} + VA^{-1}U)^{-1}VA^{-1}$

\textbf{Matrix Derivatives:}
• $\frac{\partial}{\partial x}(Ax) = A^T$
• $\frac{\partial}{\partial x}(x^T A x) = (A + A^T)x$

\end{multicols}
\end{document}
```
[Timestamp: 2026/01/04 10:52:37]

**user**: is there a simple line i can add so that all the bulletpoints skip to next row instead of just continueing in text
[Context: Notes: fading flame/Study/Newton_s Method for Minimization.md, fading flame/Study/Penalty Methods.md]
[Timestamp: 2026/01/04 11:16:51]

**ai**: 
<think>The user is asking about formatting the LaTeX document to make bullet points appear on separate lines instead of running together in the text. Looking at the current LaTeX code, I can see they're using bullet points with • symbols in regular text, which indeed would just continue on the same line.

To make bullet points appear on separate lines, they can use either:
1. The `itemize` environment 
2. Force line breaks with `\\` after each bullet point
3. Use `\begin{itemize}` with `\item` commands

Since this is a cheat sheet and space is at a premium, the simplest solution would be to add `\\` (line break) after each bullet point, or use a compact itemize environment.

Looking at the document, they have bullets like:
• Quadratic convergence near solution: $\|x_{k+1} - x^*\| \leq c\|x_k - x^*\|^2$
• $O(n^3)$ per iteration (Cholesky factorization)
• Requires $H_f \succ 0$ (pos-def)

The easiest fix would be to add `\\` after each bullet point, or use `\begin{itemize}[nosep,leftmargin=*]` with `\item` for a more compact list.</think>Yes! You can add `\\` after each bullet point to force a line break. Here are a few options:

**Option 1: Simple line breaks**
```latex
\textbf{Properties:}
• Quadratic convergence: $\|x_{k+1} - x^*\| \leq c\|x_k - x^*\|^2$ \\
• $O(n^3)$ per iteration (Cholesky factorization) \\
• Requires $H_f \succ 0$ (pos-def) \\
```

**Option 2: Use compact itemize (recommended for cheat sheets)**
```latex
\textbf{Properties:}
\begin{itemize}[nosep,leftmargin=8pt,topsep=0pt]
\item Quadratic convergence: $\|x_{k+1} - x^*\| \leq c\|x_k - x^*\|^2$
\item $O(n^3)$ per iteration (Cholesky factorization) 
\item Requires $H_f \succ 0$ (pos-def)
\end{itemize}
```

**Option 3: Add to your preamble for even more compact lists**
```latex
\setlist[itemize]{nosep,leftmargin=8pt,topsep=0pt,partopsep=0pt,parsep=0pt}
```
Then just use regular `\begin{itemize}` everywhere.

For a cheat sheet, **Option 1** with `\\` is probably the simplest - just add it after each bullet point where you want a line break.
[Timestamp: 2026/01/04 11:17:06]