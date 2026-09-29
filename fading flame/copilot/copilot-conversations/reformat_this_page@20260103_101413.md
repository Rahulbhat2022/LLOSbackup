---
epoch: 1767431653194
modelKey: "claude-sonnet-4-20250514|anthropic"
topic: "Page Reformatting Request"


tags:
  - copilot-conversation
---

**user**: reformat this page
[Context: Notes: fading flame/Study/Exact Line Search.md]
[Timestamp: 2026/01/03 10:14:13]

**ai**: 
<think>The user wants me to reformat the "Exact Line Search" note. Looking at the current content, I can see it's already well-structured but there are some formatting issues:

1. The LaTeX equations are using \[ \] format, but according to my instructions I should use $ format
2. Some of the formatting could be cleaner
3. The structure is good but could be more polished

Let me reformat this maintaining the same structure but improving the formatting and fixing the LaTeX equations.</think>Here's your reformatted [[Exact Line Search]] note:

# Exact Line Search

An **exact line search** finds the optimal step size along a given search direction. Here are the steps, presented cleanly and operationally.

---

## Algorithm Steps

**Given:**
- Current iterate $x_k$
- Search direction $d_k$ (must be a descent direction)

### Step 1: Reduce to a 1D Problem

Define the one-dimensional function:
$$\phi(\alpha) = f(x_k + \alpha d_k)$$

This is the objective function restricted to the line in direction $d_k$.

### Step 2: Solve the 1D Minimization

Compute the optimal step size:
$$\alpha_k = \arg\min_{\alpha \geq 0} \phi(\alpha)$$

This gives the **largest possible decrease** along $d_k$.

### Step 3: Update the Iterate

$$x_{k+1} = x_k + \alpha_k d_k$$

---

## Example: Quadratic Function

**Setup:**
$$f(x) = \frac{1}{2} x^T Q x + b^T x$$
with descent direction $d_k$.

**Line function:**
$$\phi(\alpha) = f(x_k + \alpha d_k)$$
is quadratic in $\alpha$.

**Derivative:**
$$\phi'(\alpha) = d_k^T (Qx_k + b) + \alpha d_k^T Q d_k$$

**Optimal step size:**
Setting $\phi'(\alpha_k) = 0$:
$$\alpha_k = -\frac{d_k^T \nabla f(x_k)}{d_k^T Q d_k}$$

This provides a **closed-form solution** in one step.

---

## Advantages and Limitations

### Why It's "Perfect"
- Guarantees maximal decrease along the chosen direction
- Theoretically optimal step size

### Why It's Impractical
- Requires solving a (possibly nonconvex) 1D optimization problem exactly
- Each evaluation of $\phi(\alpha)$ costs a full function evaluation
- For non-quadratic $f$, no closed-form solution exists

**Solution:** Use **inexact line search** methods (Armijo, Wolfe conditions) in practice.

---

## Key Comparison

| Method | Guarantees | Computational Cost |
|--------|------------|-------------------|
| Exact line search | Maximal decrease along direction | High |
| Armijo | Sufficient decrease | Low |

---

## Next Topics

- Compare **exact vs Armijo line search** mathematically
- Show **why Newton's method + exact line search converges in one step for quadratics**
[Timestamp: 2026/01/03 10:14:26]