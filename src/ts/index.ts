interface ICount {
    a: number;
    b: number;
}

const a: number = 2;
const b: number = 4;

const count = ({ a, b }: ICount): number => {
    return a + b;
};

const result = count({ a, b });

export { count, result };
