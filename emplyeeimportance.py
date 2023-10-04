"""
# Definition for Employee.
class Employee:
    def __init__(self, id: int, importance: int, subordinates: List[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates
"""

class Solution:
    def getImportance(self, employees, id):
        employee_map = {employee.id: employee for employee in employees}

        def dfs(employee_id):
            employee = employee_map[employee_id]
            total_importance = employee.importance
            for subordinate_id in employee.subordinates:
                total_importance += dfs(subordinate_id)
            return total_importance

        return dfs(id)
