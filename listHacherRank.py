if __name__ == '__main__':
 
    list = []
    N = int(input())
    for _ in range(N):
        temp = input().split(" ");
        command = temp[0]
        
        if command == "insert":
            list.insert(int(temp[1]),int(temp[2]))
        elif command == "print":
            print(list)
        elif command == "remove":
            list.remove(int(temp[1]))
        elif command == "append":
            list.append(int(temp[1]))
        elif command == "sort":
            list.sort();
        elif command == "pop":
            list.pop();
        elif command == "reverse":
            list.reverse();
    
