function repeatForever(): never {
    while (true) {
    }
}

function neverEnds(): never {
    throw new Error('Go out!');
}

function inifinteRec(): never {
    inifinteRec();
}


function sum(x: string, y: string) {
    return x + y;
}

const aa: Parameters<typeof sum> = ['a', 'as'];
