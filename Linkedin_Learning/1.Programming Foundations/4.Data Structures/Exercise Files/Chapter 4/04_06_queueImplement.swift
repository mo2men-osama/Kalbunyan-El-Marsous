// Queue in swift
// enqueue, dequeue, and peek functions

class Queue {
    var queueArray = [String]()
    
    //enqueue (adding an item)
    func enqueue(item:String) {
        self.queueArray.append(item)
    }
    
    //dequeue (removing an item)
    func dequeue()->String? {
        if self.queueArray.first != nil {
            let firstString = self.queueArray.first
            self.queueArray.removeFirst()
            return firstString!
        } else {
            return nil
        }
    }
    
    //peek (See the first item in the queue without removing it)
    func peek() -> String? {
        if self.queueArray.first != nil {
            return self.queueArray.first
        } else {
            return nil
        }
    }
}