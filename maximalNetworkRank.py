class Solution:
    def maximalNetworkRank(self, n, roads):
        city_roads = [set() for _ in range(n)]
        for road in roads:
            city1, city2 = road
            city_roads[city1].add(city2)
            city_roads[city2].add(city1)
        
        max_rank = 0
        for city1 in range(n):
            for city2 in range(city1 + 1, n):
                rank = len(city_roads[city1]) + len(city_roads[city2])
                if city2 in city_roads[city1]:
                    rank -= 1
                max_rank = max(max_rank, rank)
        
        return max_rank
