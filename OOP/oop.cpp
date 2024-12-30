#include<iostream>
#include<string>
using namespace std;

// class Teacher{
//     private:
//         double salary;

//     public:
//         string name;
//         string dept;

//         Teacher(){
//             cout<<"constructor executed"<<endl;
//         }
//         Teacher(string dept){
//             this->dept = dept;
//             cout<<"Constructor executed"<<endl;
//         }

//         // copy constructor
//         Teacher(Teacher &orgObj){ //Pass by reference
//             cout<<"I am copy costrcutor "<<orgObj.name<<endl;
//             this->name = orgObj.name;
//             this->dept = orgObj.dept;
//             this->salary = orgObj.salary;
//         }

//         void changeName(string dept){
//             this->dept = dept;
//         }

//         void setSalary(double salary){
//             this->salary = salary;
//         }

//         void getSalary(){
//             cout<<"Salary "<<salary<<endl;
//         }
// };

// int main(){
//     Teacher t1("Computer Science");
//     t1.setSalary(24000);
//     t1.name = "GeeksForGeeks Udemy";

//     Teacher t2(t1); // default copy constructor - invoked when we create a new object from an existing object

//     cout<<t2.name<<endl;
//     cout<<t2.dept<<endl;
//     t2.getSalary();

//     return 0;
// }

/**Shallow and deep copy */

// class Student{
//     public:
//         string name;
//         double* cgpaPtr;

//         Student(string name, double cgpa){
//             this->name = name;
//             cgpaPtr = new double;
//             *cgpaPtr = cgpa;
//         }

//         // Student(Student &obj){
//         //     this->name = obj.name;
//         //     cgpaPtr = new double;
//         //     *cgpaPtr = *obj.cgpaPtr;
//         // }
//         ~Student(){
//             cout<<"Destructor"<<endl;
//             delete cgpaPtr;
//         }

//         void getInfo(){
//             cout<<"Name: "<<name<<endl;
//             cout<<"CGPA: "<<*cgpaPtr<<endl;
//         }
// };

// int main(){
//     Student s1("Abinas Patra", 7.4);
//     // Student s2(s1);
//     // *(s2.cgpaPtr) = 9.2;
//     // s2.getInfo();
//     s1.getInfo();
// }

/******* Inheritance */

class Person{
    public: 
        string name;
        int age;
    
        Person(string name, int age){
            cout<<"Parent constructor"<<endl;
            this->name = name;
            this->age = age;
        }
};

class Student: public Person{
    public:
        int roll;

        Student(string name, int age, int roll) : Person(name, age){
            cout<<"Child constructor"<<endl;
            this->roll = roll;
        }
        void getInfo(){
            cout<<"Name: "<< name <<endl;
            cout<<"Age: "<< age << endl;
            cout<<"Roll: "<<roll<<endl;
        }
};

int main(){
    Student s1("Abinas Patra", 31, 11011444);
    s1.getInfo();
    return 0;
}