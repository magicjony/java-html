select a.*
from   employee a
where  a.salary = ( select max(salary) from employee b
                    where  b.department_id = a.department_id )