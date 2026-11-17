
from math_polish import polish_math
_orig_steps = steps
def steps(*a):
    return _orig_steps(*[polish_math(x) for x in a])
