## SOLID Principle in the programming

**S - Single Responsibilty Principle**
- This principle states that **a class, snippet, modules or functions should have only one responsibility**. In other words, a class should have a single job or purpose.
- For example, consider a chef in a restaurant. The chef's job is to prepare food. They should not be responsible for other tasks like taking orders, providing customer service, managing cash, ordering supplies, or similar duties. Otherwise, this would violate the principle.

```js
class Chef {
    prepareFood(){
        console.log("Prepare food");
    }
}

class Waiter {
    takeOrder(){
        console.log("Take order from customers");
    }

    supplyOrder(){
        console.log("Deliver order to customers");
    }
}

class Cashier {
    collectCash(){
        console.log("Collect cash from customers");
    }

    generateBill(){
        console.log("Generate bill for a customer");
    }
}
```

**O - Open / Closed Principle**
- **A class, module or functions should be open for extension but closed for modification** which means I should be able to add some new functionalities to my existing module, but I can't modify any existing functionality. 


```js

```