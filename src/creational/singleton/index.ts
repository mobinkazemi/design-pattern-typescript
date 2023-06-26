class Singleton {
    //store and cache the instance by making it static
    private static instance:Singleton;
    //make sure no instance is manually created
    private constructor(){}
    //get instance
    static getInstance(){
        if(!Singleton.instance) Singleton.instance = new Singleton();
        return Singleton.instance;
    }
}