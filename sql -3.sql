with sum_salary as
  ( select department_id, sum(salary) salary
    from   employee
    group  by department_id )
select department_id
from   sum_salary a       
where  a.salary = ( select max(salary) from sum_salary ) 