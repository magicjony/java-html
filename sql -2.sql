select department_id
from   employee
group  by department_id
having count(*) <= 3