class Singleton {
    //store and cache the instance by making it static
    private static instance: Singleton;
    //make sure no instance is manually created
    private constructor() { }
    //get instance
    static getInstance() {
        if (!Singleton.instance) Singleton.instance = new Singleton();
        return Singleton.instance;
    }
}


class ParametricSingleton {
    private param: string;
    private static instances: Map<string, ParametricSingleton>
    private constructor(param: string) {
        this.param = param
    }

    static getInstance(param: string) {
        if (!ParametricSingleton.instances.has(param)) {
            ParametricSingleton.instances.set(param,
                new ParametricSingleton(param))
        }
        return ParametricSingleton.instances.get(param);
    }
}