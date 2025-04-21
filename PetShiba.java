class Animal{
    Animal(){
        System.out.println("Animal created.");
    }void walk(){
        System.out.println("This animal can walk.");
    }
    void breath(){
        System.out.println("This animal can breathe.");
    }
}

class Cat extends Animal{
    Cat(){
        System.out.println("Cat created.");
    }
    Cat(String color){
        System.out.println("Cat color: "+color);
    }
    void family(){
        int legs=4;
        String color="white";
        System.out.println("This is a royal cat with "+ legs +" legs and color "+color);
    }
}

class ShibaNeko extends Cat{
    ShibaNeko() {
        super("Golden");
        System.out.println("ShibaNeko created.");
    }
    void breedInfo(){
        System.out.println("ShibaNeko is a rare Japanese cat breed.");
    }
}
public class PetShiba extends ShibaNeko{
    PetShiba(){
        System.out.println("PetShiba created.");
    }
    void owner(){
        System.out.println("This PetShiba belongs to Anvesh.");
    }

    public static void main(String[] args) {
        PetShiba myPet = new PetShiba();
        myPet.walk();
        myPet.breath();
        myPet.family();
        myPet.breedInfo();
        myPet.owner();
    }
}
