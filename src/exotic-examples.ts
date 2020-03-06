// keys of type FromType which 
type GetNames<FromType, KeepType = any, Include = true> = {
    [K in keyof FromType]:
    FromType[K] extends KeepType
    ? Include extends true ? K : never
    : Include extends true ? never : K
}[keyof FromType];

interface User {
    id: number,
    login: string,
    email: string,
    position: {
        lattitude: number,
        longitude: number,
    }
}

// const keys: GetNames<User>;

// const keys: GetNames<User, string, true> = 'email ;

// never when never
type func = (...args: any) => any;
type Params<T extends func> = 
    T extends (...args: infer P) => any ? P : never;

function logTime(message: string, time: Date) {
    console.log(message, time);
}

const logTimeParams: Params<typeof logTime> = ['Time:', new Date()];
logTime(...logTimeParams);