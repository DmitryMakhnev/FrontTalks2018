

export class Girl {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    static serialize(girl: Girl) : string {
        return `Name: ${girl.name}; Age: ${girl.age};`;
    }
}


export class Boy {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    static serialize(boy: Boy) : string {
        return `Name: ${boy.name}; Age: ${boy.age};`;
    }
}

