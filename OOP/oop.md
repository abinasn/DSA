## Class and Objects
    - Class is a blueprint 
    - Object is an instance of that blueprint

    - Class is the collection of (properties / data / attributes) and (methods / member functions);
    - Object is an entity which is a carbon copy or an instance of the class.

## Access Modifiles
    - Private:- can't be accessed outside of class
    - Public:- accessed anywhere
    - Protected:- accessed by only class methods and derived class methods, Can't be accessed outside class.

## OOP Backbond:
    1. Encapsulation
        - Encapsulation wraps up all the data / prperties and methods in to a single unit which is called class
        - It helps us to create data hiding. 
            - Data hiding:- declaring a property or method as private.
    2. Abstraction
    3. Inheritance
    4. Polymorphism

## Constructor:-
    1. Constructor is one kind of public function which gets executed when an object created,
    2. Constructor function should be same name as class name
    3. Constructor doen't have any return type.
    4. Memory allocation happens when constructor gets called. As class doesn't take any memory, It's just code. 
    5. Constructor automatically can be created by compiler or the user.
    6. There are 3 types constructor
        - Parameterized // e.g. Teacher(int name, int dept)
        - Non Parameterized // e.g Teacher()
        - Copy constructor
            - Special constructor used to copy properties. oof one object to another.

    7. Multiple constructor with name can be created which is called constructor overloading (which is an example of Polymorphism)
    8. this is a special pointer which points to the current object.
        - this->prop is same *(this).prop

        ![alt text](image.png)